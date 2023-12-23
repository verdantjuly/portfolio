import { useNavigate } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  function toProfile() {
    navigate("/");
  }

  function toResmemory() {
    navigate("/project/resmemory");
  }

  function toSansampet() {
    navigate("/project/sansampet");
  }

  return (
    <div>
      <nav>
        <p id="navProfile" onClick={toProfile}>
          프로필
        </p>
        <p id="navResmemory" onClick={toResmemory}>
          응답하라 추억시대
        </p>
        <p id="navSansampet" onClick={toSansampet}>
          산삼펫
        </p>
      </nav>
    </div>
  );
}

export default Nav;
