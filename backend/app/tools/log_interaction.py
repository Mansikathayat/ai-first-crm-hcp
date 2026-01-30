def log_interaction_tool(data: dict):
    return {
        "hcp_name": data.get("hcp_name"),
        "interaction_type": data.get("interaction_type"),
        "notes": data.get("notes"),
        "message": "Interaction logged successfully"
    }
