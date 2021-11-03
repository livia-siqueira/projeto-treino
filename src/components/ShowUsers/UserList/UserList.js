

const UserList = (props) => {

    return (
        <div className="UserLits">
            <li>{props.name + " (" + props.age + " years old)"}</li>
        </div>
    );
}

export default UserList;