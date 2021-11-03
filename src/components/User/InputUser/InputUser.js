import styles from './InputUser.module.css';

const InputUser = (props) =>{
    return (
        <div>
            <h3 className={styles.h3}>{props.title}</h3>
            <input className={styles.Input} ref={props.useRef}></input>
        </div>
    );
}

export default InputUser;