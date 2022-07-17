import { MdFace, MdMenu } from 'react-icons/md';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown';

import './Header.css';

import { connect } from 'react-redux';
import viewActions from '../../../redux/actions/viewAction';


const Header = (props) => {
    const clickMenuIcon = () => {
   
      
        props.toggleSidebar();
        console.log("abcccc");
    }
 

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const _onClickAvatar = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const handleClickOutSideDropdown = () => {
        setDropdownIsOpen(false)
    }
    return (
        <div className='header'>
            <div className='row-1'>
                <div className='nav-left'>
                    <MdMenu className='menu-icon' onClick={clickMenuIcon} />
                    <Link to="/">Dashboard</Link>
                    <Link to="/user-info">User Info</Link>
                    <Link to="/list-groups">List Group</Link>
                    <Link to="/settings">Settings</Link>
                </div>
                <div className='nav-right'>
                    <div className='header-avatar' onClick={_onClickAvatar}>
                        <MdFace size={"30px"}/>
                    </div>
                    {   
                        dropdownIsOpen && <Dropdown setDropdownClose={handleClickOutSideDropdown}/>
                    }
                </div>
            </div>
            <div className='row-2'>
                
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleSidebar: () => {
            dispatch(viewActions.toggleSidebar())
        }}
}

export default connect(null, mapDispatchToProps)(Header);