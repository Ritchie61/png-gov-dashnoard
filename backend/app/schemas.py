from pydantic import BaseModel
from typing import Optional
from datetime import date

class ProjectSchema(BaseModel):
    project_id: str
    name: str
    department: str
    status: str
    budget_allocated: float
    budget_spent: float
    start_date: date
    end_date: date
    rag_status: Optional[str]
    risks: Optional[str]

    class Config:
        orm_mode = True
