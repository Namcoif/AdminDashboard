import React, { useState } from 'react';
import { connect } from 'react-redux';
import './UserInfo.css'
import FormGroup from './../../_sharecomponents/formgroup/FormGroup';
import CustomButton from './../../_sharecomponents/custombutton/CustomButton';
import CustomInput from './../../_sharecomponents/custominput/CustomInput';
import userAction from './../../redux/actions/userAction';
import CustomSelect from './../../_sharecomponents/customselect/CustomSelect';
function UserInfo(props) {
    let userInfoGet = props.userInfo

    const [userInfo, setuserInfo] = useState(userInfoGet)


    const option = ['Role', 'ADMIN', 'EMPLOYEE', 'MANAGER']


    let fullName = userInfoGet.firstName + ' ' + userInfoGet.lastName

    const _handleOnChangeInput = (name, value) => {
        setuserInfo({
            ...userInfo,
            [name]: value
        });

    }
    const _handleUpdateUser = () => {
        console.log(userInfo);
        props.updateUser(userInfo)

    }

    const _getDataType = (role) => {
        setuserInfo({
            ...userInfo,
            role: role
        })
    }

    return (
        <div className='userInfo-container'>

            <div className='user-head'>
                <img src={userInfoGet.avatarUrl} />
                <h3>{fullName}</h3>
            </div>
            <div className='user-body'>
                <div className="full-name">
                    <FormGroup>
                        <CustomInput
                            type='text'
                            name='firstName'
                            label='FirstName *'
                            value={userInfoGet.firstName}
                            getData={_handleOnChangeInput}
                        />
                    </FormGroup>

                    <FormGroup>
                        <CustomInput
                            type='text'
                            name='lastName'
                            label='LastName *'
                            value={userInfoGet.lastName}
                            getData={_handleOnChangeInput}

                        />
                    </FormGroup>
                </div>

                <FormGroup>
                    <CustomInput
                        type='text'
                        name='username'
                        label='Username *'
                        value={userInfoGet.username}
                        getData={_handleOnChangeInput}
                        isDisable='disabled'

                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        type='password'
                        name='password'
                        label='Password *'
                        value={userInfoGet.password}
                        getData={_handleOnChangeInput}

                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        type='email'
                        name='email'
                        label='Email *'
                        value={userInfoGet.email}
                        getData={_handleOnChangeInput}

                    />
                </FormGroup>

                <FormGroup>
                    <CustomSelect
                        label="Role *"
                        option={option}
                        valInput={userInfoGet.role}
                        getData={_getDataType}
                    />
                </FormGroup>

                <CustomButton
                    type='submit'
                    uppercase='uppercase'
                    onClick={_handleUpdateUser}
                    width='250px'
                >

                    Update
                </CustomButton>
            </div>
        </div>

    );

}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userGetInfo.userInfo,
        isLoading: state.userGetInfo.isLoading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateUser: (userInfo) => {
            dispatch(userAction.updateUser(userInfo)).then((response) => {
                dispatch(userAction.getUserInfo(userInfo.username))
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
