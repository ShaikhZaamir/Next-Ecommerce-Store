"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await signIn("credentials", {
            email,
            password,
            callbackUrl: "/",
        });
    };

    return (
        <main style={{ padding: "20px", maxWidth: "400px" }}>
            <h1>Login</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", marginBottom: "10px", width: "100%" }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", marginBottom: "10px", width: "100%" }}
            />

            <button onClick={handleLogin}>Login</button>
        </main>
    );
}