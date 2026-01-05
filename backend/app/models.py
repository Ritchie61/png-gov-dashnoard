from sqlalchemy import Column, Integer, String, Float, Date
from .database import Base

class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(String, unique=True, index=True)
    name = Column(String)
    department = Column(String)
    status = Column(String)
    budget_allocated = Column(Float)
    budget_spent = Column(Float)
    start_date = Column(Date)
    end_date = Column(Date)
    rag_status = Column(String)
    risks = Column(String)
