import { useDispatch } from "react-redux";
import { logInUser } from "redux/Auth/authOperations";
import Section from 'components/Section';
import css from './Login.module.css';


const Login = () => {
    const dispatch =useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logInUser({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };

    return (
        <Section>
            <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
                <h2 className={css.loginTitle}>Log In</h2>
                <label className={css.loginLabel}>
                    Email
                    <input className={css.loginInput} type="email" name="email" />
                </label>
                <label className={css.loginLabel}>
                    Password
                    <input className={css.loginInput} type="password" name="password" />
                </label>
                <button className={css.loginButton} type="submit">Log In</button>
            </form>
        </Section>
    );
};

export default Login;