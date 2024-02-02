import React, { useState } from 'react';
import useFetch from './component/useFetch'

function Try() {
    const { data } = useFetch('http://localhost:8080/user/users')
    const [cargado, setCargado] = useState(null);
    const try_ = () => {
        setCargado(
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )

    };

    return (
        <div>
            <button onClick={try_}>Cargar</button>
            {cargado}
        </div>
    )
}

export default Try