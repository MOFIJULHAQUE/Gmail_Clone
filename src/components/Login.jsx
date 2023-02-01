import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../features/userSlice';
import { auth, provider } from '../firebase';



import "../styles/login.css"

const Login = () => {

    const dispatch = useDispatch();

    const login = () => {

        auth.signInWithPopup(provider).then(({ user }) => {
             dispatch(signIn({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            }))
        }).catch(error => {
            alert(error);
        })


    }


    return (
        <div className='login__wrapper'>

            <div className="logo__img">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="Gmail_Logo" />

                <button className='gmail__login' onClick={login}>Login with Gmail</button>
            </div>

        </div>
    )
}

export default Login;