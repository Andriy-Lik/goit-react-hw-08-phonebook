import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ children }) {
    return (
        <div className={css.section}>
            {children}
        </div>
    );
}

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;