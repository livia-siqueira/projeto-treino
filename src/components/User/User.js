import styles from './User.module.css';
import InputUser from '../User/InputUser/InputUser';
import ButtonUser from './ButtonUser/ButtonUser.js';
import CardUser from './CardUser/CardUser';
import { useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';


const User = (props) => {

    const [nameUser, setNameUser] = useState('');
    const [ageUser, setAgeUser] = useState('');
    const [modal, setModal] = useState();



    function addNewUserClick(event) {
        event.preventDefault();
        if (nameUser.trim().length === 0 || ageUser.trim().length === 0) {
            setModal({
                title: 'Invalid input',
                message: 'Not empty values'
            })
            return;
        }
        if (+ageUser < 1) {
            setModal({
                title: 'Age invalid',
                message: 'Ages valid are >0'
            })
            return;
        }
        props.addNewUser(nameUser, ageUser);
        setNameUser('');
        setAgeUser('');
    }

    function getAge(event) {
        setAgeUser(event.target.value);
    }

    function getValue(event) {
        setNameUser(event.target.value);
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
                <InputUser title="UserName" getValue={getValue} value={nameUser} />
                <InputUser title="Age(Years)" getValue={getAge} value={ageUser} />
                <ButtonUser eventClick={addNewUserClick} content="Add User" />
            </CardUser>

        </div>
    );
}

export default User;