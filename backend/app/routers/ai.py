from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app import database, models, schemas, auth
from app.services.openai_service import process_with_openai
from app.services.gemini_service import process_with_gemini

router = APIRouter()

@router.post("/process", response_model=schemas.ProcessResponse)
def process_document(request: schemas.PromptRequest, current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    try:
        if request.model == "openai":
            result = process_with_openai(request.prompt)
        elif request.model == "gemini":
            result = process_with_gemini(request.prompt)
        else:
            raise HTTPException(status_code=400, detail="Invalid model")

        # Save to database
        db_document = models.Document(
            user_id=current_user.id,
            prompt=request.prompt,
            result=result,
            model=request.model
        )
        db.add(db_document)
        db.commit()
        db.refresh(db_document)

        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))