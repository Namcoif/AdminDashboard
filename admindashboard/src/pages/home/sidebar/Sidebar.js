import './Sidebar.css';
import { MdControlCamera } from 'react-icons/md';
import { menuLinks } from '../../../data/data';

import { connect } from 'react-redux';
import CustomLinks from './../../../_sharecomponents/customlinks/CustomLinks';


const Sidebar = (props)=> {
    console.log('side bar props: ')
    console.log(props)

    return(
        <div 
            className={
                props.isOpenSideBar ? 
                'sidebar' : 'sidebar close'
            }
        >   
            <div className='sidebar-header'>
                <img src="../../../logo192.png" />
                <h3>REACT.JS</h3>
            </div>
            <div className='sidebar-menu'>
                <div className='dashboard'>
                    <MdControlCamera size='1.5rem'/>
                    <span>Dashboard</span>
                    <span>new</span>
                </div>
                {/* react-router-domm v5 */}
                {/* <CustomLink menuLinks={menuLinks} /> */}

                {/* react-router-domm v6 */}
                <CustomLinks menuLinks={menuLinks} />
            </div>
            <div className='sidebar-bottom'>
                <h4>Creative</h4>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isOpenSideBar: state.view.isOpenSideBar
    }
}

export default connect(mapStateToProps, null)(Sidebar);