import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import InputControl from './InputControl';
import { auth } from './Firebase';

import styles from './Signup.module.css'

function Signup(){
    const navigate = useNavigate();
    const[values, setValues]=useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission=() => {
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Please fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);

        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async(res) => {
                setSubmitButtonDisabled(false);
                const user =res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/home");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    
    return(
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Sign Up</h1>

                <InputControl label="Name" placeholder="Enter your Full Name"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, name: event.target.value }))
                }
                />
                <InputControl label="Email" placeholder="Enter your Email Address"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, email: event.target.value }))
                }
                />
                <InputControl label="Password" placeholder="Enter your Password"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, pass: event.target.value }))
                }
                />

                <div className={styles.footer}>
                    <b className={styles.error}> {errorMsg}</b>
                    <button onClick={handleSubmission} disabled = {submitButtonDisabled}>Sign Up</button>
                    <p>
                        Already have an account?{" "} 
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
