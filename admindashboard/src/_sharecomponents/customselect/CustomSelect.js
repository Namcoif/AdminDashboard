import React, { useEffect } from 'react';
import { useState } from 'react';
import './CustomSelect.css'
function CustomSelect(props) {
    const { option, valInput,getData } = props
    const [val, setVal] = useState(valInput)
    const _onChange = (e) => {
        setVal(e.target.value)
        if (props.getData) {
            props.getData(val)
        }
    }

    useEffect(() => {
        if (props.getData) {
            props.getData(val)
        }
    }, [val]);
    return (
        <div className='cus-select'>
            <select id='customSelect' onChange={_onChange} value={val}>
                {option.map((val,key) => {
                    return (<option key={key}  hidden={key==0? true: null}>{val}</option>

                    )
                })}

            </select>

        </div>

    );
}

export default CustomSelect;