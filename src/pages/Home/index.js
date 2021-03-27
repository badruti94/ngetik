import React, { useState } from 'react'
import { Key } from '../../components/atoms'
import './home.css'
import {allKey, nav1} from '../../assets/key-play'

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
            <div className="key-wrapper" >
                {KeyWrapper}
            </div>
            <p>ini home</p>
        </div>
    )
}

export default Home
