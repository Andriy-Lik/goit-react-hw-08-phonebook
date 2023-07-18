import css from './Message.module.css';

const Message = () => {
    return (
        <div className={css.messageBox}>
            <p className={css.messageText}>PhoneBook is empty!!!</p>
        </div>
    );
}

export default Message;