import styles from './CardUser.module.css';

const CardUser = (props) =>{
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default CardUser;