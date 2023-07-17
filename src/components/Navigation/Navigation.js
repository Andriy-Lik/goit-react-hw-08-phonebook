import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/Auth/authSelectors";
import css from './Navigation.module.css'


const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.navigationBox}>
            <NavLink className={css.navigationLink} to="/">Home</NavLink>
            {isLoggedIn && (<NavLink className={css.navigationLink} to="/contacts">Contacts</NavLink>)}
        </nav>
    );
};

export default Navigation;