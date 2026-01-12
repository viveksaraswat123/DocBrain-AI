from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class DocumentBase(BaseModel):
    prompt: str
    result: str
    model: str

class DocumentCreate(DocumentBase):
    pass

class Document(DocumentBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class PromptRequest(BaseModel):
    prompt: str
    model: str

class ProcessResponse(BaseModel):
    result: str