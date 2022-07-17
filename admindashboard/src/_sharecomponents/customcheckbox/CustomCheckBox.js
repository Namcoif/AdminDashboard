import { useState } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import './CustomCheckBox.css'
import { useSelector, useDispatch } from 'react-redux';
const CustomCheckBox = (props) => {

    const stateRemember= useSelector(state=>state.view);

    const dispatchRedux=useDispatch();
    const [checked, setCheck] = useState(stateRemember.isRememberMe)
    const _onClick = () => {    
        setCheck(!checked)
    }
    const { label, fontSize } = props
    return (
        <div className='check-box' onClick={_onClick}>
            {
                checked ?
                    < MdCheckBox className='checkbox-checked' size={fontSize} /> :
                    <MdCheckBoxOutlineBlank size={fontSize} />
            }
            <span>{label}</span>
        </div>
    )
}

export default CustomCheckBox