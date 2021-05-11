import React, { useContext } from 'react';
import loginBg from '../../../images/loginImg.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    let history = useHistory();
    let location = useLocation()
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

  let { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user);
            const {displayName,email} = result.user;
            const newUser={userName: displayName, email};
            setLoggedInUser(newUser);
            console.log(loggedInUser);
            storeAuthToken();

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    return (
        <div className="container-fluid">
            <div className="row align-items-center" >
                <div className="col-md-6  text-center" >
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Login using Google</button>
                </div>
                <div className="col-md-6 align-self-end">
                    <img style={{ height: "100vh" }}  src={loginBg} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Login;