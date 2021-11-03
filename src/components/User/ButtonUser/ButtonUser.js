import styles from './ButtonUser.module.css';


const ButtonUser = (props) => {
    return (
        <div>
            <button className={styles.button} onClick={props.addNewUserClick}>Add User</button>
        </div>
    );
}

export default ButtonUser;