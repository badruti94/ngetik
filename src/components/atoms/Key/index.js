import React from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import getKeyImg from '../../../assets/key-data'
import './key.css'


const Key = ({ code, deleteData, ...rest }) => {
    console.log(code);
    const img = getKeyImg(code)

    return (
        <div className="key" >
            <img src={img} alt="img" width="75" />
            <KeyboardEventHandler
                handleKeys={['all']}
                onKeyEvent={(key, e) => {
                    console.log(e.key)
                    if (e.key === code) {
                        deleteData(code)
                    }
                }} />
        </div>
    )
}

export default Key
