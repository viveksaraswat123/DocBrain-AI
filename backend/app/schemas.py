from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class DocumentBase(BaseModel):
    prompt: str
    result: str
    model: str

class DocumentCreate(DocumentBase):
    pass

class Document(DocumentBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True

class PromptRequest(BaseModel):
    prompt: str
    model: str

class ProcessResponse(BaseModel):
    result: str