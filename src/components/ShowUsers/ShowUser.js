import styles from './ShowUser.module.css';
import UserList from './UserList/UserList';

const ShowUsers = (props) => {
    return (
        <div className="listUsers">
            <ul>
            {props.users.map((user) => (
                <UserList key={user.id} name={user.name} age={user.age}/>
            ))}
            </ul>
        </div>
    );
}

export default ShowUsers;