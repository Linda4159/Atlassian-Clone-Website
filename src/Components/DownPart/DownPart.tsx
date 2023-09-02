import styled from '@emotion/styled'
import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {AiOutlineDown} from "react-icons/ai"
import globe from "../../assets/globe.svg"
import facebook from "../../assets/Facebook1.png"
import twitter1 from "../../assets/twitter2.png"
import linkedIn from "../../assets/linkedIn1.png"
import youtube from "../../assets/youtube1.png"

const Container=styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
gap: 100px;
font-size: small;
color: #253858;
background-color: #f4f5f7;

`
const Wrap = styled.div`
display: flex;
gap: 10px;
cursor: pointer;
`
const Image= styled.img`
width: 20px;
`
const P = styled.div``
// const Icon= styled.div``
const Set=styled.div`
display: flex;
gap: 20px;
cursor: pointer;
`
const Para = styled.div``
const Group=styled.div`
display: flex;
cursor: pointer;
img{
    width: 40px;
    height: 30px;
}
`

const DownPart = () => {
  return (
    <Container>
        <Wrap>
            <Image src={globe}/>
            <P>English<a><icon>{<AiOutlineDown/>}</icon></a></P>
        </Wrap>
        <Set>
            <Para>Privacy policy</Para>
            <Para>Notice at Collection</Para>
            <Para>Terms</Para>
            <Para>Impressum</Para>
        </Set>
        <div>Copyright <a><icon>{<AiOutlineCopyrightCircle/>}</icon>2023 Atlassian</a></div>
        <Group>
            <img src={facebook}/>
            <img src={twitter1}/>
            <img src={linkedIn}/>
            <img src={youtube}/>
        </Group>
    </Container>
  )
}

export default DownPart