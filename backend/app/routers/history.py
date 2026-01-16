from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app import database, models, schemas, auth

router = APIRouter()

@router.get("/history", response_model=List[schemas.Document])
def get_history(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    documents = db.query(models.Document).filter(models.Document.user_id == current_user.id).order_by(models.Document.created_at.desc()).all()
    return documents