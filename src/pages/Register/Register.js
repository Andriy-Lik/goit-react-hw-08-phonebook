import { useDispatch } from "react-redux";
import { registerUser } from "redux/Auth/authOperations";
import Section from 'components/Section';
import css from './Register.module.css';


const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form =e.currentTarget;
        dispatch(registerUser({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };

    return (
        <Section>
            <div className={css.registerBox}>
                <form className={css.registerForm} onSubmit={handleSubmit} autoComplete="off">
                    <h2 className={css.registerTitle}>Registration</h2>
                    <label className={css.registerLabel} htmlFor="name">
                        Name
                    </label>
                    <input className={css.registerInput} id="name" type="text" name="name" placeholder="Ivan Ivanov" />
                    
                    <label className={css.registerLabel} htmlFor="email">
                        Email
                    </label>
                    <input className={css.registerInput} id="email" type="email" name="email" placeholder="ivan123@mail.com" />
                    
                    <label className={css.registerLabel} htmlFor="password">
                        Password
                    </label>
                    <input className={css.registerInput} id="password" type="password" name="password" placeholder="**********" />
                    <button className={css.registerButton} type="submit">Register</button>
                </form>
            </div>
        </Section>
    );    
};

export default Register;