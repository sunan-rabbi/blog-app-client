"use client"
import React from 'react';
import './register.css'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

const SIGNUP = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $bio: String!){
  signup(name: $name, email: $email, password: $password, bio: $bio) {
    name
    email
    profile {
      id
      bio
    }
  }
}
`

const Signup = () => {

    const router = useRouter();
    const [signup, { data, loading, error }] = useMutation(SIGNUP);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const handleRegister = (e: any) => {
        e.preventDefault();
        const values = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            bio: e.target.bio.value
        }
        signup({ variables: values });


    }
    if (data) {
        router.push('/login')
    }
    return (
        <div className="form">
            <form onSubmit={handleRegister}>
                <label htmlFor="">Your Name</label>
                <input name="name" type="text" />
                <label htmlFor="">Your Email</label>
                <input name="email" type="email" />
                <label htmlFor="">Your Password</label>
                <input name="password" type="password" />
                <label htmlFor="">Your Bio</label>
                <input name="bio" type="text" />
                <button type='submit' className='rounded-full p-2 bg-white text-black'>Register</button>
            </form>
        </div>
    );
};

export default Signup;