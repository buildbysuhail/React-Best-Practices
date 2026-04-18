export function useUsers() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            setUsers(['Alice', 'Bob', 'Charlie']);
        }, 1000);
    }, []);

    return users;

}