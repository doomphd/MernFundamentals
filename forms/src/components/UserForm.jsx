import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 3)) {
            setFirstNameError("First Name must be at least 3 characters");
        } else {
            setFirstNameError('');
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 3)) {
            setLastNameError("Last Name must be at least 3 characters");
        } else {
            setLastNameError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 3)) {
            setEmailError("Email must be at least 3 character");
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) && (e.target.value.length > 0)) {
            setEmailError("Invalid email format!");
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 8)) {
            setPasswordError("Passsword must be at least 8 characters");
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if ( password === e.target.value ) {
            setConfirmPasswordError('');
        } else if (password !== e.target.value) {
            setConfirmPasswordError("Passwords must match")
        }
    }

    return (
        <div className="row">
            <form className="col-10 bg-primary" onSubmit={createUser}>
                <div className="form-group">
                    <label for="fName">First Name: </label>
                    <input id="fName" className="form-control" type="text" onChange={(e) => handleFirstName(e)} />
                        {
                            firstNameError
                                ? <p style={{ color: 'red' }}>{firstNameError}</p>
                                : ''
                        }
                </div>
                <div className="form-group">
                    <label for="lName">Last Name: </label>
                    <input id="lName" className="form-control" type="text" onChange={(e) => handleLastName(e)} />
                        {
                            lastNameError
                                ? <p style={{ color: 'red' }}>{lastNameError}</p>
                                : ''
                        }
                </div>
                <div className="form-group">
                    <label for="email">Email Address: </label>
                    <input id="email" className="form-control" type="text" onChange={(e) => handleEmail(e)} />
                        {
                            emailError
                                ? <p style={{ color: 'red' }}>{emailError}</p>
                                : ''
                        }
                </div>
                <div className="form-group">
                    <label for="pword">Password: </label>
                    <input id="pword" className="form-control" type="text" onChange={(e) => handlePassword(e)} />
                        {
                            passwordError
                                ? <p style={{ color: 'red' }}>{passwordError}</p>
                                : ''
                        }
                </div>
                <div>
                    <label for="cPassword">Confirm Password: </label>
                    <input id="cPassword" className="form-control" type="text" onChange={(e) => handleConfirmPassword(e)} />
                        {
                            confirmPasswordError
                                ? <p style={{ color: 'red' }}>{confirmPasswordError}</p>
                                : ''
                        }
                </div>
                <input className="btn btn-sm bg-success"type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UserForm;