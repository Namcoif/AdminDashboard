import React from 'react';
import { connect } from 'react-redux';


import { MdAddToPhotos } from 'react-icons/md'

import { MdOutlineClose } from 'react-icons/md'

import { MdSearch } from 'react-icons/md'
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'

import './ListGroup.css'
import { useState } from 'react';
import CustomTable from './../../_sharecomponents/customtable/CustomTable';
import CustomFromUpdateGroup from './../../_sharecomponents/customformupdategroup/CustomFromUpdateGroup';
import viewActions from '../../redux/actions/viewAction';
import userAction from './../../redux/actions/userAction';
import CustomFormAddGroup from '../../_sharecomponents/customformaddgroup/CustomFormAddGroup';
function ListGroup(props) {

    let listGroupGet = props.listGroup

    const [selectChanged, setSelectChanged] = useState(false)

    const [type, setType] = useState('Type')

    const [startDate, setStartDate] = useState(null)

    const [endDate, setEndtDate] = useState(null)

    let option = ['Type','FRONTEND', 'BACKEND', 'FULLSTACK']

    const _handleClickAddGroup = () => {

        props.toggleCreateForm()

    }

    const _onHandleClickEdit = (group) => {
       
        props.getGroupCurrent(group)

        props.toggleUpdateForm()
        console.log("edit: ", group);
    }



    const _onHandleClickDelete = (id) => {
        props.deleteGroup(id)
    }

    const handleClickIconClose = () => {
        setType('Type')
        setSelectChanged(false)
    }

    const onSelectChange = (e) => {
        setType(e.target.value)
        setSelectChanged(true)
    }

    const handleStartDateChange = (date) => {
        console.log(date)
        let dateTiemConvert = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
        console.log(dateTiemConvert)
        setStartDate(date)
    }

    const handleEndDateChange = (date) => {
        setEndtDate(date)
    }


    const _clickSerch = () => {

    }

    return (
        <div>
            {
                props.isOpenFormUpdate ?
                    <div>
                        <CustomFromUpdateGroup
                            option={option}
                        />
                    </div>
                    :
                    (props.isOpenFormCreateGroup ?
                        <div>
                            <CustomFormAddGroup
                                option={option}
                            />
                        </div>
                        :
                        <div className='list-groups'>
                            <div>
                                <div className='filter-form'>
                                    <div className='type-filter'>
                                        <select
                                            className='form-control-filter'
                                            value={type}
                                            onChange={onSelectChange}
                                        >
                                            <option value="Type" hidden>Type</option>
                                            <option value="BACKEND">BACKEND</option>
                                            <option value="FRONTEND">FRONTEND</option>
                                            <option value="FULLSTACK">FULLSTACK</option>
                                        </select>

                                        {
                                            selectChanged && <MdOutlineClose onClick={handleClickIconClose} className='icon-close' />
                                        }
                                    </div>
                                    <DatePicker
                                        className='form-control-filter'
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        name="startDate"
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText='Start Date'
                                    />
                                    <DatePicker
                                        className='form-control-filter'
                                        selected={endDate}
                                        onChange={handleEndDateChange}
                                        name="endtDate"
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText='End Date'
                                    />
                                    <div className='icon-serach'>
                                        <MdSearch onClick={_clickSerch} fontSize="1.2rem" />
                                    </div>
                                </div>
                                <div className='icon-add'>
                                    <MdAddToPhotos fontSize="1.2rem" style={{ cursor: 'pointer' }}
                                        onClick={_handleClickAddGroup}
                                    />
                                </div>
                                <div>
                                    <h1>List Groups</h1>

                                </div>
                                <div>
                                    <CustomTable
                                        listGroupGet={listGroupGet}
                                        _onHandleClickEdit={_onHandleClickEdit}
                                        _onHandleClickDelete={_onHandleClickDelete}
                                    />
                                </div>
                            </div>
                        </div>

                    )

            }

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        listGroup: state.userGetInfo.listGroup,
        isOpenFormUpdate: state.view.isOpenFormUpdateGroup,
        isOpenFormCreateGroup: state.view.isOpenFormCreateGroup
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleUpdateForm: () => {
            dispatch(viewActions.toggleUpdateForm())
        },
        getGroupCurrent: (group) => {
            dispatch(userAction.getGroupCurrent(group))
        },
        deleteGroup: (id) => {
            dispatch(userAction.deleteGroup(id)).then(() => {
                dispatch(userAction.getListGroups())
            }
            )
        },

        toggleCreateForm :()=>{
            dispatch(viewActions.toggleCreateForm())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListGroup);
