import React, { useState } from 'react'
import { Key } from '../../components/atoms'
import './home.css'
import {allKey, char_kanan1, enter_dkk1, kurung1, nav1} from '../../assets/key-play'

const Home = () => {
    const [data, setData] = useState(nav1)

    const deleteData = key => {
        const newData = data.filter(dt => dt !== key)

        setData(newData)
        console.log(newData);
    }

    const KeyWrapper = data.map(dt => (<Key key={dt} code={dt} deleteData={deleteData} />))

    return (
        <div className="home" >
            <button onClick={()=>setData(allKey)} >all key</button>
            
            <button onClick={()=>setData(nav1)} >nav1</button>
            <button onClick={()=>setData(char_kanan1)} >char_kanan1</button>
            <button onClick={()=>setData(enter_dkk1)} >enter_dkk1</button>
            <button onClick={()=>setData(kurung1)} >kurung1</button>
            <div className="key-wrapper" >
                {KeyWrapper}
            </div>
            <p>ini home</p>
        </div>
    )
}

export default Home
