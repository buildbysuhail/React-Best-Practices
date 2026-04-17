import { useEffect, useRef } from "react";

function Controlled({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="this is a controlled input..."
        />  
    )
}

function Uncontrolled() {
    const inputRef = useRef();

    const handleClick = () => {
        alert(`The value of the input is: ${inputRef.current.value}`);
    }
    return (
        <div>
            <input
                ref={inputRef} placeholder="This is an uncontrolled input..." /> 
                <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

function Smart() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUsers(['Alice', 'Bob', 'Charlie']);
        }, 1000);
    },[users])

    if (users.length === 0) {
        return <p>Loading users...</p>;
    }

    return (
        <div>
            <h2>Users:</h2>
            <Dumb users={users} />
        </div>
    )
}

function Dumb({ users }) {
    return (
        <div>
            <h2>Users:</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    )
}