import styled from '@emotion/styled'
import React from 'react'
import blog from "../../assets/Blog.jpg"
import atlassianteam from "../../assets/TeamPlaybook.png"
import agileCoach from "../../assets/AgileCoach.png"
import transparent from "../../assets/transparentA.png"
import team23 from "../../assets/Atlassianteam23.png"
import teamVelocity from "../../assets/teamAtlassian.png"

interface Iprops{
avatar:any
title:string
text1:string
text2:string
visit:string
bgColor:string
}

const Container=styled.div`
width: 800px;
height: 700px;
background-color: #ffffff;
margin-top: 40px;
padding: 20px;
/* justify-content:space-around; */

`
const Box = styled.div<{bgColor:string}>`
background-color: ${(Iprops)=> Iprops.bgColor};
width: 350px;
height: 400px;
border-radius: 5px;
`
const Image=styled.img`
width: 100%;
height: 250px;
border-radius: 7px 7px 0px 0px;
object-fit: contain;
`
const Para= styled.div`
text-align: center;
padding-top: 20px;
font-weight: 500;
font-size: large;
color: #253858;
`
const P= styled.div`
text-align: center;
font-size: small;
padding-top: 10px;
color: #253858;
`
const Span = styled.div`
padding-top: 10px;
text-align: center;
font-size: small;
font-weight: 500;
color: #508EFF;
cursor: pointer;
`
const Card = styled.div``
const Wrapper=styled.div`
display: flex;
gap: 60px;
margin-left: 50px;
/* flex-wrap: wrap; */
`
const Section=styled.div`
  display: flex;
  gap: 30px;
  gap: 60px;
margin-left: 50px;
/* padding-top: 30px; */
  
`


export const AtlassianBoxes:React.FC<Iprops>=({avatar,title,text1,text2,visit,bgColor})=>{
    return(
      <Card>
        <Box bgColor="bgColor">
            <Image src={avatar}/>
            <Para>{title}</Para>
            <P>{text1}</P>
            <P>{text2}</P>
            <Span>{visit}</Span>
        </Box>
      </Card>
        
    )
}

const Boxes = () => {
  return (
    <Container>
      
<Section>
      <AtlassianBoxes
        bgColor="#EAE6FF"
        avatar={blog}
        title="Work Life"
        text1="Real-life advice, inspiration, and stories"
        text2="from the working world today"
        visit="Read our blog"
        />
        <AtlassianBoxes
        bgColor="#E6FCFF"
        avatar={atlassianteam}
        title="Atlassian Team Playbook
        "
        text1="Solve common team challenges with"
        text2="these group exercises."
        visit="Check team health"
        />
        <AtlassianBoxes
        bgColor="#DEEBFF"
        avatar={agileCoach}
        title="The Agile Coach
        "
        text1="Atlassian's no-nonsense guide to agile"
        text2="development."
        visit="Visit our resources"
        />
        </Section>
        <Wrapper>
        
        <AtlassianBoxes
        bgColor="transparent"
        avatar={transparent}
        title=""
        text1=""
        text2=""
        visit="Learn more"
        />
        <AtlassianBoxes
        bgColor="#250F5E"
        avatar={team23}
        title=""
        text1=""
        text2=""
        visit=""
        />
        <AtlassianBoxes
        bgColor="#250F5E"
        avatar={teamVelocity}
        title=""
        text1=""
        text2=""
        visit=""
        />
      </Wrapper>

    </Container>
  )
}

export default Boxes