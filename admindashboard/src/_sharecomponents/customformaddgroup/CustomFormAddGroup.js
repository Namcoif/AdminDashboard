import React from 'react';
import "react-datepicker/dist/react-datepicker.css"
import CustomSelect from './../customselect/CustomSelect';
import CustomInput from './../custominput/CustomInput';
import FormGroup from './../formgroup/FormGroup';
import './CustomFormAddGroup.css'
import CustomButton from '../custombutton/CustomButton';
import viewActions from './../../redux/actions/viewAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import userAction from './../../redux/actions/userAction';
function CustomFormAddGroup(props) {
    const { option } = props
    const [groupCreate, setGroupCreate] = useState({
        type: '',
        name: '',
        totalMember: ''
    })

    let color = '#1A73E8'
    const dispatchRedux = useDispatch();


    const _getDataType = (type) => {
        setGroupCreate({
            ...groupCreate,
            type: type
        })
    }

    const _handleOnChangeInput = (name, value) => {
        setGroupCreate({
            ...groupCreate,
            [name]: value
        })

    }


    const _handleCreateGroup = () => {

        console.log(groupCreate);
        dispatchRedux(userAction.createGroup(groupCreate)).then(() => {
            dispatchRedux(userAction.getListGroups())
        }).then(() => {
            dispatchRedux(viewActions.toggleCreateForm())
        })

    }

    const _handleClose = () => {
        dispatchRedux(viewActions.toggleCreateForm())

    }
    return (
        <div className='form-update-group'>
            <FormGroup>
                <h1>Create Group</h1>
            </FormGroup>
            <FormGroup>
                <CustomInput
                    type='text'
                    name='name'
                    label='Name *'
                    value={groupCreate.name}
                    getData={_handleOnChangeInput}
                />
            </FormGroup>
            <FormGroup>
                <CustomInput
                    type='text'
                    name='totalMember'
                    label='Total Member *'
                    value={groupCreate.totalMember}
                    getData={_handleOnChangeInput}

                />
            </FormGroup>

            <FormGroup>
                <CustomSelect
                    label="Type "
                    option={option}
                    getData={_getDataType}
                />
            </FormGroup>


            <div>
                <CustomButton
                    type='submit'
                    uppercase='uppercase'
                    onClick={_handleCreateGroup}
                    width='250px'
                >
                    Add
                </CustomButton>

                <CustomButton
                    type='submit'
                    uppercase='uppercase'
                    width='250px'
                    color={color}
                    onClick={_handleClose}
                >
                    Close
                </CustomButton>
            </div>
        </div>
    );
}




export default CustomFormAddGroup