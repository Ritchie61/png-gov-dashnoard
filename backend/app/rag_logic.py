def compute_rag(status: str, budget_allocated: float, budget_spent: float) -> str:
    # Status-based
    if status.lower() in ["delayed", "over budget"]:
        status_rag = "Red"
    elif status.lower() in ["at risk"]:
        status_rag = "Amber"
    else:
        status_rag = "Green"

    # Budget-based
    utilization = budget_spent / budget_allocated if budget_allocated else 0
    if utilization > 1:
        budget_rag = "Red"
    elif utilization > 0.8:
        budget_rag = "Amber"
    else:
        budget_rag = "Green"

    # Take the worst-case RAG
    if "Red" in [status_rag, budget_rag]:
        return "Red"
    elif "Amber" in [status_rag, budget_rag]:
        return "Amber"
    else:
        return "Green"
