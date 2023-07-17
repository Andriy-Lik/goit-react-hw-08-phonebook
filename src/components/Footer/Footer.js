import { BsBookHalf } from 'react-icons/bs';
import Section from 'components/Section';
import { ReactComponent as LogoAL } from '../../images/LogoAL.svg';
import { ReactComponent as Phone } from '../../images/Phone.svg';
import { ReactComponent as Email } from '../../images/Email.svg';
import { ReactComponent as Telegram } from '../../images/Telegram.svg';
import { ReactComponent as Github } from '../../images/Github.svg';
import { ReactComponent as LinkedIn } from '../../images/LinkedIn.svg';
import css from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={css.footer}>
            <Section>
                <div className={css.footerContainer}>
                    
                    <p className={css.footerText}>
                        <BsBookHalf className={css.footerIconBook} />
                        Phonebook by
                        <LogoAL className={css.footerIconAL} />
                    </p>
                    
                    <ul className={css.footerList}>
                        <li className={css.footerItem}>
                            <a href="tel:+380506384844" className={css.footerLink}>
                                <Phone className={css.footerListIcon} />
                            </a>
                        </li>
                        <li className={css.footerItem}>
                            <a href="mailto:alan321987@gmail.com" className={css.footerLink}>
                                <Email className={css.footerListIcon} />
                            </a>
                        </li>
                        <li className={css.footerItem}>
                            <a href="https://t.me/AndriiLikhoshva" className={css.footerLink}>
                                <Telegram className={css.footerListIcon} />
                            </a>
                        </li>
                        <li className={css.footerItem}>
                            <a href="https://github.com/Andriy-Lik" className={css.footerLink}>
                                <Github className={css.footerListIcon} />
                            </a>
                        </li>
                        <li className={css.footerItem}>
                            <a href="https://www.linkedin.com/in/andrii-likhoshva/" className={css.footerLink}>
                                <LinkedIn className={css.footerListIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;