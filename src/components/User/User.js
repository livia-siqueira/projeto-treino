import styles from './User.module.css';
import InputUser from '../User/InputUser/InputUser';
import ButtonUser from './ButtonUser/ButtonUser.js';
import CardUser from './CardUser/CardUser';
import { useRef, useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';


const User = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [modal, setModal] = useState();

    function addNewUserClick(event) {
        event.preventDefault();
        console.log(nameInputRef.current.value);
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setModal({
                title: 'Invalid input',
                message: 'Not empty values'
            })
            return;
        }
        if (+enteredAge < 1) {
            setModal({
                title: 'Age invalid',
                message: 'Ages valid are >0'
            })
            return;
        }
        props.addNewUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setModal(null);
    };

    return (
        <div>
            {modal && (
                <ErrorModal
                    title={modal.title}
                    message={modal.message}
                    onConfirm={errorHandler}
                />
            )}
            <CardUser className={styles.enters}>
                <InputUser title="UserName" useRef={nameInputRef} />
                <InputUser title="Age(Years)" useRef={ageInputRef} />
                <ButtonUser eventClick={addNewUserClick} content="Add User" />
            </CardUser>

        </div>
    );
}

export default User;