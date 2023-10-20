import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles/App.module.css";

function App() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/booking"}>Booking</NavLink>
                    </li>
                </ul>
            </header>
            <div className={styles.main}>
                <Outlet />
            </div>
            <footer className={styles.footer}>
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default App;
