"use client"
import React, { useEffect } from 'react';
import '../register/register.css'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

const SIGNIN = gql`
    mutation login($email: String!, $password: String!){
        signin(email: $email, password: $password) {
          message
          token
        }
    }
`;

const Signin = () => {
    const router = useRouter();
    const [signin, { data, loading, error }] = useMutation(SIGNIN);

    // Handle form submission
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        signin({ variables: formData });
    };

    // Redirect on successful login
    useEffect(() => {
        if (data?.signin?.token) {
            const { token } = data.signin;
            localStorage.setItem("accessToken", token);
            router.push('/blogs');
        }
    }, [data, router]);

    return (
        <div className="form">
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Your Email</label>
                <input name="email" type="email" required />

                <label htmlFor="password">Your Password</label>
                <input name="password" type="password" required />

                <button
                    type="submit"
                    className="rounded-full p-2 bg-white text-black"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Login'}
                </button>

                {error && <p className="error">Submission error! {error.message}</p>}
            </form>
        </div>
    );
};

export default Signin;
