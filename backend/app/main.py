from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import ai, export, history

app = FastAPI(title="DocBrain AI Backend", version="1.0.0")

# CORS middleware for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(ai.router, prefix="/api/ai", tags=["AI"])
app.include_router(export.router, prefix="/api/export", tags=["Export"])
app.include_router(history.router, prefix="/api/history", tags=["History"])

@app.get("/")
def read_root():
    return {"message": "Welcome to DocBrain AI Backend"}