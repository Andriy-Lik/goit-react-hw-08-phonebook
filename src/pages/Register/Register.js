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
            <form className={css.registerForm} onSubmit={handleSubmit} autoComplete="off">
                <h2 className={css.registerTitle}>Registration</h2>
                <label className={css.registerLabel}>
                    User name
                    <input className={css.registerInput} type="text" name="name" />
                </label>
                <label className={css.registerLabel}>
                    Email
                    <input className={css.registerInput} type="email" name="email" />
                </label>
                <label className={css.registerLabel}>
                    Password
                    <input className={css.registerInput} type="password" name="password" />
                </label>
                <button className={css.registerButton} type="submit">Register</button>
            </form>
        </Section>
    );    
};

export default Register;