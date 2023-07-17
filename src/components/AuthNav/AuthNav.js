import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={css.authNavBox}>
            <NavLink className={css.authNavlink} to="/register">Register</NavLink>
            <NavLink className={css.authNavlink} to="/login">Log in</NavLink>
        </div>
    );
};

export default AuthNav;