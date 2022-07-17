import React from 'react';
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import CustomSelect from './../customselect/CustomSelect';
import CustomInput from './../custominput/CustomInput';
import FormGroup from './../formgroup/FormGroup';
import './CustomFromUpdateGroup.css'
import CustomButton from '../custombutton/CustomButton';
import viewActions from './../../redux/actions/viewAction';
import { useDispatch, connect, } from 'react-redux';
import { useState, useEffect } from 'react';
import userAction from './../../redux/actions/userAction';
import { HandleFunction } from './../../handle_function/HandleFunction';
function CustomFromUpdateGroup(props) {

    const { option, group } = props
    const [groupGet, setGroupGet] = useState(group)

    const [dateSelect, setDateSelect] = useState(group.createdAt)

    let color = '#1A73E8'
    const dispatchRedux = useDispatch();

    const _closeForm = () => {
        dispatchRedux(viewActions.toggleUpdateForm())
    }

    const _handleOnChangeInput = (name, value) => {
        setGroupGet({
            ...groupGet,
            [name]: value
        })

    }

    const _handleDateChange = (date) => {


        setDateSelect(date)
        setGroupGet({
            ...groupGet,
            createdAt: HandleFunction._handleDate(date)
        })

    }
    const _handleUpdateGroup = () => {
        dispatchRedux(userAction.updateGroup(groupGet)).then(() => {
            dispatchRedux(userAction.getListGroups())

        }).then(() => {
            dispatchRedux(viewActions.toggleUpdateForm())

        })
    }


    useEffect(() => {
        setGroupGet({
            ...groupGet,
            createdAt: HandleFunction._handleDate(groupGet.createdAt)
        })
    }, [])

    return (
        <div className='form-update-group'>
            <FormGroup>
                <h1>Update Group</h1>
            </FormGroup>

            <FormGroup>
                <DatePicker
                    className='form-control-filter'
                    selected={new Date(dateSelect)}
                    onChange={_handleDateChange}
                    name="creatAt"
                    dateFormat="dd/MM/yyyy"
                    placeholderText='Creat At'
                />
            </FormGroup>

            <FormGroup>
                <CustomInput
                    type='text'
                    name='name'
                    label='Name *'
                    value={groupGet.name}
                    getData={_handleOnChangeInput}

                />
            </FormGroup>
            <FormGroup>
                <CustomInput
                    type='text'
                    name='totalMember'
                    label='Total Member *'
                    value={groupGet.totalMember}
                    getData={_handleOnChangeInput}

                />
            </FormGroup>
            <FormGroup>
                <CustomSelect
                    label="Type"
                    option={option}
                    valInput={group.type}
                />
            </FormGroup>


            <div>
                <CustomButton
                    type='submit'
                    uppercase='uppercase'
                    onClick={_handleUpdateGroup}
                    width='250px'
                >
                    Update
                </CustomButton>

                <CustomButton
                    type='submit'
                    uppercase='uppercase'
                    width='250px'
                    color={color}
                    onClick={_closeForm}
                >
                    Close
                </CustomButton>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        group: state.userGetInfo.groupCurrent
    }
}

export default connect(mapStateToProps, null)(CustomFromUpdateGroup);