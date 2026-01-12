from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.openai_service import process_with_openai
from app.services.gemini_service import process_with_gemini

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str
    model: str  # "openai" or "gemini"

@router.post("/process")
def process_document(request: PromptRequest):
    try:
        if request.model == "openai":
            result = process_with_openai(request.prompt)
        elif request.model == "gemini":
            result = process_with_gemini(request.prompt)
        else:
            raise HTTPException(status_code=400, detail="Invalid model")
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))