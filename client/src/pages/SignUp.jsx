import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignUp = () => {

    const [formData, setFormData] = useState({});
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.id] : e.target.value,
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('/api/auth/signup',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData),
            })
            const data = await response.json();
            if(data.success === false){
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in')
        } catch (error) {
            setLoading(false);
            setError(error.message)
        }
    }

  return (
    <div className='p-3 max-w-lg mx-auto '>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
            <input type="text" placeholder='username' id='username'
            className='border p-3 rounded-lg'onChange={handleChange} />
            <input type="email" placeholder='email' id='email'
            className='border p-3 rounded-lg' onChange={handleChange}/>
            <input type="password" placeholder='password' id='password'
            className='border p-3 rounded-lg'onChange={handleChange} />
            <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>
                Sign up
            </button>
            <OAuth />
        </form>
    </div>
  )
}

export default SignUp