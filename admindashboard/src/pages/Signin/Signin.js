import CustomInput from "../../_sharecomponents/custominput/CustomInput";
import FormGroup from "../../_sharecomponents/formgroup/FormGroup";
import { MdAccountCircle } from 'react-icons/md'

import { Link } from 'react-router-dom'

import './Signin.css'
import CustomCheckBox from "../../_sharecomponents/customcheckbox/CustomCheckBox";
import CustomButton from "../../_sharecomponents/custombutton/CustomButton";
import { connect } from "react-redux";
import userAction from './../../redux/actions/userAction';

import React from 'react';
import { useState } from "react";

function Signin(props) {

    const [userSignIn, setUserSignIn] = useState({
        username: '',
        password: '',
        rememberMe: false
    })


    const _handleOnChangeInput = (name, value) => {
        setUserSignIn({
            ...userSignIn,
            [name]: value
        })

    }

    const _handleCheckBox = (checked) => {
        setUserSignIn({
            ...userSignIn,
            rememberMe: checked
        })
    }

    const _handleSubmitForm = (e) => {
        // e.preventDefault()
        console.log(userSignIn);
        props.signin(userSignIn.username, userSignIn.password)
        // console.log(props.signin(userSignIn.username, userSignIn.password));
        console.log('Submited')
    }


    return (
        <div className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar" >
                    <MdAccountCircle size='24px' />

                </div>
                <h1>Sign In</h1>
            </div>
            <div className="signin-main">
                <FormGroup>
                    <CustomInput
                        type='text'
                        value={userSignIn.username}
                        label='Username *'
                        name='username'
                        getData={_handleOnChangeInput}
                    />
                </FormGroup>
                <FormGroup >
                    <CustomInput
                        type='password'
                        name='password'
                        label='Password *'
                        value={userSignIn.password}
                        getData={_handleOnChangeInput}
                    />
                </FormGroup>

                <CustomCheckBox
                    label='Remember me'
                    onCheckBox={_handleCheckBox}
                    fontSize='24px'
                    rememberMe={userSignIn.rememberMe}
                />
                <div>
                    <CustomButton
                        type='submit'
                        uppercase='uppercase'
                        onClick={_handleSubmitForm}
                    >
                        Sign in
                    </CustomButton>
                </div>
                <div className="group-link">
                    <Link to='forgot-password'>Forgot your password?</Link>
                    <Link to='/sign-up'>Don't have an account? Sign up</Link>
                </div>

            </div>
            <div className="copy-right">
                Copyright&nbsp;&copy;&nbsp;
                <Link to='/'>your website</Link>
            </div>
        </div>

    );
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        signin: (username, password) => {
            dispatch(userAction.signin(username, password))
        }
    }
}
export default connect(null, mapDispatchToProps)(Signin)