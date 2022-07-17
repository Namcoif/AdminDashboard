import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';



import './Home.css';

import { connect } from 'react-redux';
import userAction from '../../redux/actions/userAction';
import { useEffect } from 'react';



const Home = (props) => {
    //const [isOpenSideBar, setisOpenSideBar] = useState(true)
    const handleClickMenuIcon = (isOpenSideBar) => {
        //setisOpenSideBar(isOpenSideBar)
    }


    useEffect(() => {
        props.getUserInfo(localStorage.getItem('username'))
        props.getListGroups()
    }, [])

    return (
        <div className='home-container'>
            <Sidebar />
            <div className={props.isOpenSideBar ? 'home-main' : 'home-main sidebar-close'}>
                <Header clickMenuIcon={handleClickMenuIcon} />
                <div className='main-content'>
                    {/* react router ver 5 */}
                    {/* <Switch>
                        <Route path="/user-info" component={UserWithLoading} />
                        <Route path="/list-groups" component={ListGroupsWithLoading} />
                        <Route path="/settings" component={SettingsWithLoading} />
                    </Switch> */}

                    {/* react router ver 6 */}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isOpenSideBar: state.view.isOpenSideBar
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getUserInfo: (username) => {
            dispatch(userAction.getUserInfo(username))
        },
        getListGroups: () => {
            dispatch(userAction.getListGroups())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);