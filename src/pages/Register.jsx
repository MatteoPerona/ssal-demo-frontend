import { useState } from "react";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <section style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ marginBottom: "16px" }}>Register Your Account</h3>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form style={{ padding: "24px" }} method="post" autoComplete="off">
        <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>Legal Name</label>
            <input type="email" style={{ width: "100%", background: "#FDEBD0"}} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", }}>Username</label>
            <input type="text" style={{ width: "100%" , background: "#FDEBD0" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>Password</label>
            <input type="text" style={{ width: "100%" , background: "#FDEBD0" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>Email Address</label>
            <input type="email" style={{ width: "100%" , background: "#FDEBD0" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "-8px" }}>
            <input type="checkbox" checked={checked} onChange={handleChecked} style={{ marginRight: "8px" }} />
            <span style={{ marginRight: "-8px" }}>
              I agree the <a href="#">Terms and Conditions</a>
            </span>
          </div>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <button type="submit" style={{ padding: "12px 24px", background: "linear-gradient(to right, #FF8A00, #FFCD40)", color: "#FFF", border: "none" }}>
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormSimple;