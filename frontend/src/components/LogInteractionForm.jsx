import { useState } from "react";
import { logInteraction } from "../services/api";

function LogInteractionForm() {
  const [hcpName, setHcpName] = useState("");
  const [date, setDate] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [notes, setNotes] = useState("");
  const [time, setTime] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [outcome, setOutcome] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await logInteraction({
      hcp_name: hcpName,
      interaction_type: interactionType,
      notes,
      date,
      time,
      sentiment,
      outcome,
      follow_up: followUp,
    });

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    setHcpName("");
    setDate("");
    setInteractionType("");
    setNotes("");
    setTime("");
    setSentiment("");
    setOutcome("");
    setFollowUp("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>HCP Name</label>
      <input value={hcpName} onChange={(e) => setHcpName(e.target.value)} />

      <label>Date</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Interaction Type</label>
      <select value={interactionType} onChange={(e) => setInteractionType(e.target.value)}>
        <option value="">Select</option>
        <option value="Call">Call</option>
        <option value="Visit">Visit</option>
        <option value="Email">Email</option>
      </select>

      <label>Notes</label>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />

      <label>Time</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      

      <label>Observed / Inferred HCP Sentiment</label>
      <div className="sentiment-row">
  <label>
    <input
      type="radio"
      name="sentiment"
      value="Positive"
      checked={sentiment === "Positive"}
      onChange={(e) => setSentiment(e.target.value)}
    />
    😊 Positive
  </label>

  <label>
    <input
      type="radio"
      name="sentiment"
      value="Neutral"
      checked={sentiment === "Neutral"}
      onChange={(e) => setSentiment(e.target.value)}
    />
    😐 Neutral
  </label>

  <label>
    <input
      type="radio"
      name="sentiment"
      value="Negative"
      checked={sentiment === "Negative"}
      onChange={(e) => setSentiment(e.target.value)}
    />
    😟 Negative
  </label>
</div>

       

      <label>Outcome / Key Discussion</label>
      <textarea value={outcome} onChange={(e) => setOutcome(e.target.value)} />

      <label>Follow-up Actions</label>
      <textarea value={followUp} onChange={(e) => setFollowUp(e.target.value)} />

      <label>Voice Note (requires consent)</label>
      <input disabled placeholder="Voice recording placeholder" />

      <button type="submit">Save Interaction</button>

      {success && <p>✅ Interaction saved successfully</p>}
    </form>
  );
}

export default LogInteractionForm;
