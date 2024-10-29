"use client"
import React, { FormEvent } from 'react';
import '../register/register.css'
import { gql } from '@apollo/client';

const signin = gql`
    mutation login($email: String!, $password: String!){
        signin(email: $email, password: $password) {
          message
          token
        }
    }
`

const Signin = () => {
    const handleRegister = (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        console.log("data: ", data)
    }

    return (
        <div className="form">
            <form onSubmit={handleRegister}>

                <label htmlFor="">Your Email</label>
                <input name="email" type="email" />
                <label htmlFor="">Your Password</label>
                <input name="password" type="password" />

                <button className='rounded-full p-2 bg-white text-black'>Login</button>
            </form>
        </div>
    );
};

export default Signin;