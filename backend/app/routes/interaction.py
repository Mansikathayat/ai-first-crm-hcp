from fastapi import APIRouter
from pydantic import BaseModel
from app.agents.hcp_langgraph_agent import hcp_graph

router = APIRouter()

class InteractionRequest(BaseModel):
    hcp_name: str
    interaction_type: str
    notes: str

@router.post("/log")
def log_interaction(data: InteractionRequest):
    result = hcp_graph.invoke({
        "notes": data.notes
    })

    return {
        "hcp_name": data.hcp_name,
        "interaction_type": data.interaction_type,
        "summary": result["summary"]
    }
