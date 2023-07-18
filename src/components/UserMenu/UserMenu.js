import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "redux/Auth/authOperations";
import { selectUser } from "redux/Auth/authSelectors";
import { ReactComponent as IconAvatar } from "../../images/IconAvatar.svg";
import css from './UserMenu.module.css';


const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.userMenuBox}>
            <div className={css.userMenuWrap}>
                <p className={css.userMenuText}>Welcome {user.name}!</p>
                <IconAvatar className={css.userMenuIcon} width="30" height="30" />
            </div>
            <button className={css.userMenuButton} type="button" onClick={() => dispatch(logOutUser())}>Logout</button>
        </div>
    );
};

export default UserMenu;