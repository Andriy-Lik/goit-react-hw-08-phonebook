import { ReactComponent as PhoneBook } from '../../images/PhoneBook.svg';
import Section from 'components/Section';
import Container from 'components/Container';
import css from './Home.module.css';


const Home = () => {
    return (
        <Section>
            <Container>
                <h1 className={css.homeTitle}>Welcome to Phonebook App!</h1>
                <PhoneBook  className={css.homeImg} />
            </Container>
        </Section>
    );
};

export default Home;