import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [name, setName] = useState("");
    const[email,setEamil] = useState("");
    const[password,setPassword] =  useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoURL,
                })
            );
        })
        .catch((error) => alert(error));
    };
    const register = () =>{
        if(!name){
            return alert ("Please Enter a Full Name!");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                // displayname and photoURL are feilds realted to firebase 
                // while name and profile pic are local variable
                displayName: name,
                photoURL: profilePic,
            })
            .then(()=> {
                // the dispatch action sends the data to the redux store
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,

                    })
                );
            });
        }).catch((error) => alert(error));
    };
    
    return (
        <div className="login">
            <img src="https://media.sproutsocial.com/uploads/2017/11/Social-Media-Ideas.png" alt=""/>
            <form>
                <input placeholder="Put Full Name Here" 
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />

                <input placeholder="Put Profile Picture Here"
                type="text"
                value={profilePic} 
                onChange={(e) => setProfilePic(e.target.value)}
                />

                <input placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEamil(e.target.value)}
                />

                <input placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit"onClick={loginToApp} >Sign In</button>

                <p>Not a Member? {" "}
                    <span className="login_register" onClick={register}>
                      Register Now
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login
