import { useState } from "react";
import {Link} from "react-router-dom"

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <section style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ marginBottom: "16px" }}>Login</h3>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form style={{ padding: "24px" }} method="post" autoComplete="off">
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", }}>Username</label>
            <input type="text" style={{ width: "100%" , background: "#FDEBD0" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>Password</label>
            <input type="text" style={{ width: "100%" , background: "#FDEBD0" }} />
          </div>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <button type="submit" style={{ padding: "12px 24px", background: "linear-gradient(to right, #FF8A00, #FFCD40)", color: "#FFF", border: "none" }}>
              Login
            </button>
          </div>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <p style={{ marginBottom: "8px" }}>
              Don't have an account? <Link to="/register" style={{ textDecoration: "underline" }}>Sign up for free</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormSimple;