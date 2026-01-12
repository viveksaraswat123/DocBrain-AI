from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.pdf_service import generate_pdf

router = APIRouter()

class ExportRequest(BaseModel):
    content: str
    format: str  # "pdf" for now

@router.post("/export")
def export_document(request: ExportRequest):
    try:
        if request.format == "pdf":
            pdf_path = generate_pdf(request.content)
            return {"file_path": pdf_path}
        else:
            raise HTTPException(status_code=400, detail="Invalid format")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))