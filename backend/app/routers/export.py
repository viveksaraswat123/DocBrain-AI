from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app import database, models, auth
from app.services.pdf_service import generate_pdf

router = APIRouter()

@router.post("/export")
def export_document(content: str, format: str, current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    try:
        if format == "pdf":
            pdf_path = generate_pdf(content)
            return {"file_path": pdf_path}
        elif format == "txt":
            # Simple TXT export
            import os
            from datetime import datetime
            filename = f"docbrain_export_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
            filepath = os.path.join("exports", filename)
            os.makedirs("exports", exist_ok=True)
            with open(filepath, "w") as f:
                f.write(content)
            return {"file_path": filepath}
        elif format == "docx":
            # DOCX export
            from docx import Document
            import os
            from datetime import datetime
            filename = f"docbrain_export_{datetime.now().strftime('%Y%m%d_%H%M%S')}.docx"
            filepath = os.path.join("exports", filename)
            os.makedirs("exports", exist_ok=True)
            doc = Document()
            doc.add_paragraph(content)
            doc.save(filepath)
            return {"file_path": filepath}
        else:
            raise HTTPException(status_code=400, detail="Invalid format")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))