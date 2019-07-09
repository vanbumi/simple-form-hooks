import React, { useState } from 'react';

function SimpleFormHooks() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => setEmail(e.target.value);
  const handleButton = () => setEmail("");

  return (
    <div>
      <form action="">
        <p>Input email anda</p>
        <input onChange={handleChange} type="text" value={email} />
        <p>Email anda adalah: {email}</p>
      </form>
      <button onClick={handleButton}>Submit</button>
    </div>
  )
}

export default SimpleFormHooks;