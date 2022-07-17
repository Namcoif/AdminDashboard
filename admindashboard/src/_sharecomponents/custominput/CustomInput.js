import { useEffect, useState } from "react"

import './CustomInput.css'

const CustomInput = (props) => {
    const [cusInput, setCusInput] = useState({
        value: props.value,
        color: '',
        inputFocus: false,
        isDisable: props.isDisable
    })

    const [allowed, setAllowed] = useState(false)

    const _onChange = (e) => {
        setCusInput({
            ...cusInput,
            value: e.target.value
        })
        if (props.getData) {
            props.getData(props.name, cusInput.value)
        }


    }
    useEffect(() => {
        if (cusInput.value !== '') {
            setCusInput({
                ...cusInput,
                inputFocus: true
            })
            setAllowed(true)
        }
        if (props.getData) {
            props.getData(props.name, cusInput.value)
        }
        if (props.onChangeUser) {
            props.onChangeUser(props.onChange, cusInput.value)
        }

    }, [cusInput.value]);

    const _onFocus = (e) => {
        setCusInput({
            ...cusInput,
            inputFocus: true
        })
    }

    const _onBlur = (e) => {
        setCusInput({
            ...cusInput,
            inputFocus: false
        })

        if (cusInput.value !== null && cusInput.value !== '') {
            setAllowed(true)
        }
        else
            setAllowed(false)
    }


    return (
        <div className="formcontrol-input">
            <label className={
                cusInput.inputFocus ? 'label active' :
                    (allowed ? 'label allowed' : 'label')
            }
            >
                {props.label}
            </label>
            <div className="input-item">
                <input
                    required
                    className={
                        cusInput.inputFocus ? 'active' :
                            (allowed ? 'allowed' : '')
                    }
                    type={props.type}
                    value={cusInput.value}
                    name={props.name}
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                    onChange={_onChange}
                    disabled={cusInput.isDisable}
                />

                <fieldset className={
                    cusInput.inputFocus ? 'active' :
                        (allowed ? 'allowed' : '')
                }
                >
                    <legend>
                        <span>{props.label}</span>
                    </legend>
                </fieldset>
            </div>

        </div>
    )
}
export default CustomInput