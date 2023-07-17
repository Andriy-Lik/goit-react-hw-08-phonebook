import { useSelector } from "react-redux";
import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import Section from 'components/Section';
import { selectIsLoggedIn } from "redux/Auth/authSelectors";
import css from './AppBar.module.css';


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.header}>
            <Section>
                <div className={css.headerContainer}>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </div>
            </Section>
        </header>
    );
};

export default AppBar;