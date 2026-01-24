from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import ai, export, history, auth
from app.config import settings

app = FastAPI(
    title="DocBrain AI Backend",
    version="1.0.0",
)

#CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#API Routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(ai.router, prefix="/api/ai", tags=["AI"])
app.include_router(export.router, prefix="/api/export", tags=["Export"])
app.include_router(history.router, prefix="/api/history", tags=["History"])


@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Welcome to DocBrain AI Backend"}


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok"}
