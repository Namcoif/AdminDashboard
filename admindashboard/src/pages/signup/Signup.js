import { useState } from "react"
import userAction from "../../redux/actions/userAction"
import CustomButton from "../../_sharecomponents/custombutton/CustomButton"
import CustomInput from "../../_sharecomponents/custominput/CustomInput"
import FormGroup from "../../_sharecomponents/formgroup/FormGroup"
import { connect } from 'react-redux'
import { MdAccountCircle } from 'react-icons/md'

import './Signup.css'
import { Link } from 'react-router-dom';
import CustomSelect from './../../_sharecomponents/customselect/CustomSelect';
const Signup = (props) => {
    const [userSingUp, setUserSignUp] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        role: '',
        email: ''
    })

    const option = ['Role *', 'ADMIN', 'EMPLOYEE', 'MANAGER']

    const _handleOnChangeInput = (name, value) => {
        setUserSignUp({
            ...userSingUp,
            [name]: value
        });

    }

    const _getDataType = (role) => {
        setUserSignUp({
            ...userSingUp,
            role: role
        })
    }

    const _handleRegister = (e) => {
        props.signup(userSingUp)
    }
    return (
        <div className="signup-container">
            <div className="signup-header">
                <div className="signin-avatar" >
                    <MdAccountCircle size='24px' />

                </div>
                <h1>Sign Up</h1>
            </div>

            <div className="signup-main">
                <div className="full-name">
                    <FormGroup>
                        <CustomInput
                            type='text'
                            name='firstName'
                            label='FirstName *'
                            value=''
                            getData={_handleOnChangeInput}
                        />
                    </FormGroup>

                    <FormGroup>
                        <CustomInput
                            type='text'
                            name='lastName'
                            label='LastName *'
                            value=''
                            getData={_handleOnChangeInput}

                        />
                    </FormGroup>
                </div>

                <FormGroup>
                    <CustomInput
                        type='text'
                        name='username'
                        label='Username *'
                        value=''
                        getData={_handleOnChangeInput}

                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        type='password'
                        name='password'
                        label='Password *'
                        value=''
                        getData={_handleOnChangeInput}

                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        type='email'
                        name='email'
                        label='Email *'
                        value=''
                        getData={_handleOnChangeInput}

                    />
                </FormGroup>

                <FormGroup>

                    <CustomSelect
                        label="Role *"
                        option={option}
                        getData={_getDataType}
                    />
                </FormGroup>

                <CustomButton
                    type='submit'
                    uppercase='uppercase'
                    onClick={_handleRegister}
                >

                    Sign up
                </CustomButton>
            </div>
            <div className="group-link">
                <Link to='/sign-in'>Sign in</Link>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        isRegistering:state.userGetInfo.isRegistering
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signup: (user) => {
            dispatch(userAction.registerUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
