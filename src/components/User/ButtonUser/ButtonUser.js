import styles from './ButtonUser.module.css';


const ButtonUser = (props) => {
    return (
        <div>
            <button className={styles.button} onClick={props.eventClick}>{props.content}</button>
        </div>
    );
}

export default ButtonUser;