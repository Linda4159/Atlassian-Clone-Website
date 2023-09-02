import styled from '@emotion/styled'
import React from 'react'
import careerLeft from "../../assets/CareersLeft.svg"
import careerRight from "../../assets/CareersRight.svg"

const Container = styled.div`
width: 100%;
height: 500px;
background-color: #ffffff;
margin-bottom: 230px;

`
const Wrap = styled.div`
display: flex;
gap: 250px;
margin-bottom: 200px;
/* padding-bottom: 150px; */
`
const H4 = styled.h4`
text-align: center;
padding-top: 100px;
color: #508EFF;
`
const H1 = styled.h1`
text-align: center;
padding-top: 10px;
color: #253858;
`
const Para = styled.div`
text-align: center;
padding-top: 10px;
line-height: 25px;
color: #253858;
`
const Button = styled.button`
padding: 10px;
border-radius: 5px;
background-color: #0047B3;
color: white;
border: transparent;
font-size: medium;
font-weight: 500;
margin-top: 20px;
margin-left: 550px;

`
const Image = styled.img`
width: 500px;
height: 400px;
object-fit: contain;
`

const Career = () => {
  return (
    <Container>
        <H4>CAREERS</H4>
        <H1>We can’t do it alone
</H1>
        <Para>We have an ambitious road ahead, and we’re looking for people to <br/>join our global team to help shape the future of Atlassian.

</Para>
        <Button>Join the team</Button>
        <Wrap>
        <Image src={careerLeft}/>  
        <Image src={careerRight}/>
        </Wrap>
    </Container>
  )
}

export default Career