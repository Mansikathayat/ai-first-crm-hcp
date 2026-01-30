import LogInteractionForm from "../components/LogInteractionForm";
import ChatInterface from "../components/ChatInterface";
import "./LogInteractionScreen.css";

function LogInteractionScreen() {
  return (
    <div className="page">
      <h1>HCP Interaction Logger</h1>

      <div className="layout">
        <div className="left">
          <LogInteractionForm />
        </div>

        <div className="right">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}

export default LogInteractionScreen;
