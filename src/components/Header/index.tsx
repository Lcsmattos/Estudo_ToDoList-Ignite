import RocketLogo from "../../assets/rocket.svg";
import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={RocketLogo} alt="Foguete" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  );
}
