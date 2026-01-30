def summarize_tool(data: dict):
    notes = data.get("notes", "")
    return f"Summary: {notes[:50]}..."
