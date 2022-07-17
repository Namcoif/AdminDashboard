import React, { useState } from 'react';
import FormGroup from '../../_sharecomponents/formgroup/FormGroup';
import CustomFromUpdateGroup from './../../_sharecomponents/customformupdategroup/CustomFromUpdateGroup';
import CustomFormAddGroup from './../../_sharecomponents/customformaddgroup/CustomFormAddGroup';

function Setting(props) {
    const [isOpen, setIsOpen] = useState(false)
    const showForm = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);

    }
    let option = ['FRONTEND', 'BACKEND', 'FULLSTACK']
    return (
        <div>
            {/* <div className={isOpen ? "show-form" : "form"}>

               <CustomFormAddGroup option={option}/>
            </div> */}

        </div>
    );
}

export default Setting;