import { useState } from "react";

function Setting() {
  const [username, setUserName] = useState("");

  const handleClick = () => {
    alert("Saved!");
  };

  return (
    <div className="container">
      <h1>Profile Settings</h1>
      <div style={{ width: 300 }}>
        <label htmlFor="uname">
          <b>Change Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter New Username"
          name="uname"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="main-button apply-btn"
          type="submit"
          style={{ width: "100%", margin: "10px 0px" }}
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Setting;
