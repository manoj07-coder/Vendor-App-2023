import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signInSuccess } from '../redux/user/userSlice.js'

const OAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickGoogle = async ()=>{
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);

            const result = await signInWithPopup(auth,provider);
            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/vendors');
        } catch (error) {
            console.log('could not sign in with google',error);
        }
    }

  return (
    <button type='button' className='bg-red-700 text-white p-3 uppercase 
    rounded-lg hover:opacity-95' onClick={handleClickGoogle}>
        Continue with google
    </button>
  )
}

export default OAuth