from fastapi import APIRouter
from typing import List

router = APIRouter()

# In-memory storage for demo
history_store = []

@router.get("/history")
def get_history():
    return {"history": history_store}

@router.post("/history")
def add_to_history(item: dict):
    history_store.append(item)
    return {"message": "Added to history"}