import {useState} from 'react'

export default function Water () {
    const [water,setWater]= useState(0)
    return(
        <div className='container'>
            <h1>ควรดื่มน้ำวันละเท่าไหร่</h1>
            <h2 style={{color:'Red',fontSize:'2rem'}}>{Math.floor(water)} ม.ล </h2>
            <div>
                <input type="number" onChange={(e) => {
                    setWater((e.target.value *2.2) * (30/2))
                }} style={{
                    padding:'15px',
                    borderRadius: '15px'
                }} />
            </div>
        </div>
    )
    
}


