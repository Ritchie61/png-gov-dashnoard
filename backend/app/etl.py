import pandas as pd
from .models import Project
from .database import SessionLocal
from .rag_logic import compute_rag

def load_projects_csv(file_path: str):
    df = pd.read_csv(file_path)
    db = SessionLocal()
    for _, row in df.iterrows():
        rag = compute_rag(row['status'], row['budget_allocated'], row['budget_spent'])
        project = Project(
            project_id=row['project_id'],
            name=row['name'],
            department=row['department'],
            status=row['status'],
            budget_allocated=row['budget_allocated'],
            budget_spent=row['budget_spent'],
            start_date=row['start_date'],
            end_date=row['end_date'],
            rag_status=rag,
            risks=row.get('risks', "")
        )
        db.add(project)
    db.commit()
    db.close()
