import { useState } from "react"

const Button = ({btntext,onClick})=>{
    return <button onClick={onClick}>{btntext}</button>
}

const Universal = ({backgroundColor:UbackgroundColor='gray',component, ComponentChange, title:Utitle='범용 다이얼로그', content:Ucontent='범용 다이얼로그입니다.', color:Ucolor='gray', btn})=>{
    return(
        <div style={{backgroundColor:UbackgroundColor,color:Ucolor}}>
            {Utitle}
            <div>
            {
                btn.map((name,index)=>{
                    return(
                            component!==index&&
                            <Button key={index} onClick={()=>ComponentChange(index)} btntext={name}/>
                    )
                })
            }
            </div>
            <div>
                {Ucontent}
            </div>
        </div>
    )
}

const Specialization = ()=>{
    const [componentChange,setComponentChange] = useState()
    const btnlist = ['경고','인사','오류','공지사항']
    const menucolor = ['yellow','green','red','blue']
    const titles = ['경고 다이얼로그','인사 다이얼로그','오류 다이얼로그','공지사항 다이얼로그']
    const contents = ['경고 다이얼로그입니다.', '인사 다이얼로그입니다.','오류 다이얼로그입니다.','공지사항 다이얼로그입니다.']
    return(
        <div>
            <Universal 
            backgroundColor={menucolor[componentChange]}
            component = {componentChange} 
            ComponentChange={setComponentChange}
            title={titles[componentChange]}
            color={componentChange!==0 && 'white'}
            content={contents[componentChange]}
            btn={btnlist}
            />
        </div>
    )
}

export default Specialization