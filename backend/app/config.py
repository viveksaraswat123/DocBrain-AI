import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite:///./docbrain.db"
    openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    gemini_api_key: str = os.getenv("GEMINI_API_KEY", "")
    secret_key: str = "your-secret-key-here"

    class Config:
        env_file = ".env"

settings = Settings()