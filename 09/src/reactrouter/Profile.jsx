import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Profile(){
    let navigator = useNavigate()
    return(
        <div className='content'>
            <p>이곳은 바로 Profile 페이지입니다.</p>
            <button onClick={()=> navigator('/')}>홈으로</button>
        </div>
    )
}

export default Profile