import styled from 'styled-components'
import './DisplayFlex.css'

const StyleButton = styled.button`
color:white;
background-color:orange;
font-size:15px;
`

const BlueButton = styled.button`
color:white;
background-color:blue;
`

const MyButton = styled.button`
color:white;
background-color:yellow;
font-size:15px;
`

const YellowButton = styled(MyButton)`
color:black;
`

function StyledButtons(){
    return(
        <div className='flexContainer5'>
            <StyleButton>스타일버튼</StyleButton>
            <BlueButton>블루버튼</BlueButton>
            <YellowButton>노랑버튼</YellowButton>
        </div>
    )
}

export default StyledButtons