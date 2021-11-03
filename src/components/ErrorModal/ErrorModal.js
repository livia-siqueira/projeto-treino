import styles from './ErrorModal.module.css';
import Card from '../User/CardUser/CardUser';
import ButtonUser from '../User/ButtonUser/ButtonUser';


const ErrorModal = ( props ) => {
    return (
        <div>
          <div className={styles.backdrop} />
          <Card className={styles.modal}>
            <header className={styles.header}>
              <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
              <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
              <button onClick={props.onConfirm}>Okay</button>
            </footer>
          </Card>
        </div>
      );
}

export default ErrorModal;