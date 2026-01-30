from typing import TypedDict
from langgraph.graph import StateGraph
from app.services.llm import llm

# ---- STATE ----
class InteractionState(TypedDict):
    notes: str
    summary: str

# ---- NODES ----
def parse_input(state: InteractionState):
    return state

def summarize_interaction(state: InteractionState):
    try:
        prompt = f"""
        Summarize the following HCP interaction in 3 bullet points:

        {state['notes']}
        """
        response = llm.invoke(prompt)
        return {"summary": response.content}
    except Exception as e:
        # 👇 fallback so backend never crashes
        return {
            "summary": "AI summary unavailable at the moment. Interaction logged successfully."
        }


def finalize(state: InteractionState):
    return state

# ---- GRAPH ----
def build_graph():
    graph = StateGraph(InteractionState)

    graph.add_node("parse_input", parse_input)
    graph.add_node("summarize", summarize_interaction)
    graph.add_node("finalize", finalize)

    graph.set_entry_point("parse_input")
    graph.add_edge("parse_input", "summarize")
    graph.add_edge("summarize", "finalize")

    return graph.compile()

hcp_graph = build_graph()
