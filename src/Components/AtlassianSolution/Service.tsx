import React from 'react'
import styled from "@emotion/styled"

interface Iprops{
    changeServiceShow:() => void
}

const Container = styled.div`
display: flex;
width: 100%;
height: 500px;
position: fixed;
left: 0;
right: 0;
top: (700px - 150px);
bottom: 100px;
margin-top:100px;
z-index: 2;
`
const Wrapper= styled.div``
const Wrap = styled.div``

const Service:React.FC<Iprops> = ({changeServiceShow}) => {
  return (
    <Container>
        <Wrapper></Wrapper>
        <Wrap></Wrap>
    </Container>
  )
}

export default Service