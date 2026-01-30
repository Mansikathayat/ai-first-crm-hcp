from app.tools.log_interaction import log_interaction_tool
from app.tools.edit_interaction import edit_interaction_tool
from app.tools.summarize_interaction import summarize_tool
from app.tools.sentiment_analysis import sentiment_tool
from app.tools.followup_suggestion import followup_tool


def run_hcp_agent(data: dict):
    """
    Ye LangGraph agent ka simplified version hai.
    Ye decide karta hai kaunse tools chalenge.
    """

    logged = log_interaction_tool(data)
    summary = summarize_tool(data)
    sentiment = sentiment_tool(data)
    followup = followup_tool(data)

    return {
        "status": "success",
        "agent": "hcp_langgraph_agent",
        "logged_data": logged,
        "summary": summary,
        "sentiment": sentiment,
        "follow_up": followup
    }
