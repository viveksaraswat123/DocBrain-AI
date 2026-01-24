from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str = "sqlite:///./docbrain.db"
    openai_api_key: str = ""
    gemini_api_key: str = ""
    secret_key: str = "gfuagfdsaf7dsa5g7a5df7a8afva0dygag98a6gda"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
