import React, { useState } from 'react';
import Demo from "./Demo"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                const newToken = data.token;
                setToken(newToken);
                localStorage.setItem('token', newToken);

                setLoggedIn(true);
            } else {
                console.error('Error en el login:', data.message);
            }
        } catch (error) {
            console.error('Error en el login', error);
        }
    };

    return (
        <div>
            {!isLoggedIn ? (
                <>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Usuario"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Iniciar Sesión</button>
                </>
            ) : (
                <Demo token={token} />
            )}
        </div>
    );
};



export default Login;
