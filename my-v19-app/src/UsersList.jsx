import { use } from "react";

const fetchusers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
}

const userPromise = fetchusers();

const Users = () => {
    const users = use(userPromise);
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default function UsersList(){
    return (
        <div>
            <Users />
        </div>
    );
}