from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

class InteractionRequest(BaseModel):
    hcp_name: str
    interaction_type: str
    notes: str
    date: Optional[str] = None
    time: Optional[str] = None
    sentiment: Optional[str] = None
    outcome: Optional[str] = None
    follow_up: Optional[str] = None

@router.post("/log")
def log_interaction(data: InteractionRequest):
    return {
        "status": "success",
        "message": "Interaction saved",
        "received": data
    }
