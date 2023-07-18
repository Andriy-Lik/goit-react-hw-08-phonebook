import { ReactComponent as PhoneBook } from '../../images/PhoneBook.svg';
import Section from 'components/Section';
import css from './Home.module.css';


const Home = () => {
    return (
        <Section>
            <div className={css.homeContainer}>
                <h1 className={css.homeTitle}>Welcome to Phonebook App!</h1>
                <PhoneBook  className={css.homeImg} />
            </div>
        </Section>
    );
};

export default Home;