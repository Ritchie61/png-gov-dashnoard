from fastapi import FastAPI
from .database import Base, engine
from .schemas import ProjectSchema
from .models import Project
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/projects")
def get_projects():
    db = Session(bind=engine)
    projects = db.query(Project).all()
    db.close()
    return projects
