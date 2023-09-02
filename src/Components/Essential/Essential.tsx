import styled from '@emotion/styled'
import React from 'react'
import community from "../../assets/Community.jpg"

const Container= styled.div`
width: 100%;
background-color: #FFFFFF;
height: 500px;
display: flex;
margin-top: 80px;
/* justify-content: space-around; */
`
const Wrap1=styled.div`
width: 400px;
padding: 50px;


`

const H4 = styled.h4`
color: #508EFF;
`
const H1 = styled.h1`
color: #253858;
/* word-spacing: 2px; */
line-height: 40px;
font-size: x-large;
`
const Wrap2=styled.div`
width: 800px;
height: 500px;
background-color: #FFFAE5;
border-radius: 7px;
margin-right: 50px;
/* overflow: hidden; */

`
const Image = styled.img`
height: 300px;
width: 100%;
border-radius: 5px 5px 0px 0px;
`
const Para = styled.div`
text-align: center;
padding-top: 30px;
font-size: large;
font-weight: 400;
color:#253858;
`
const P = styled.div`
text-align: center;
color: #253858;
padding-top: 20px;
font-weight: 400;
`
const Set= styled.div`
display: flex;
justify-content: center;
gap: 70px;
color: #508EFF;
font-weight: 500;
padding-top: 20px;
cursor: pointer;
`

const Essential = () => {
  return (
    <Container>
        <Wrap1>
            <H4>
TEAM ESSENTIALS
</H4>
<H1>Explore resources to<br/> unleash the potential<br/> of your team
</H1>
        </Wrap1>
        <Wrap2>
            <Image src={community}/>
            <Para>
Atlassian Community
</Para>
<P>Connect globally and meet locally to get more out of our products.</P>
<Set>
    <p>Search the forum</p>
    <p>Join our community</p>
</Set>
        </Wrap2>
        
    </Container>
  )
}

export default Essential