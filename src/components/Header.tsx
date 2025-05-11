import styles from "./Header.module.css";

import logoSvg from "../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoSvg} alt="logo To do List" />
    </header>
  );
}
