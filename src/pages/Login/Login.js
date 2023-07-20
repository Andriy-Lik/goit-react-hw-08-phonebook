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
            <div className={css.loginBox}>
                <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
                    <h2 className={css.loginTitle}>Log In</h2>
                    <label className={css.loginLabel}>
                        Email
                    </label>
                    <input className={css.loginInput} type="email" name="email" placeholder="ivan123@mail.com" />
                    
                    <label className={css.loginLabel}>
                        Password
                    </label>
                    <input className={css.loginInput} type="password" name="password" placeholder="**********" />

                    <button className={css.loginButton} type="submit">Log In</button>
                </form>
            </div>
        </Section>
    );
};

export default Login;