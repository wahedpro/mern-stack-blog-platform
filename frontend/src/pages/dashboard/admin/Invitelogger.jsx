import { useState } from "react";

const Invitelogger = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInvite = async () => {
    if (!email) {
      setMessage("Please enter an email address");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:4000/api/invite/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setMessage("Invitation email sent successfully");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center">
      <h3 className="text-2xl">Invite the User to write the blog</h3>

      <div className="flex items-center text-sm bg-white h-12 border pl-3 pr-0.5 rounded border-gray-500/30 w-full max-w-md">
        <input
          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleInvite}
          disabled={loading}
          className="bg-[#615fff] px-6 py-3.5 mr-px rounded-sm active:scale-95 transition text-white"
        >
          {loading ? "Sending..." : "Invite"}
        </button>
      </div>

      {message && (
        <p className="text-sm text-gray-600">{message}</p>
      )}
    </div>
  );
};

export default Invitelogger;
