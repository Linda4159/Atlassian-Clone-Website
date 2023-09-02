import React from 'react'
import styled from '@emotion/styled'
import { BsArrowRight } from "react-icons/bs";
import confluence from "../../assets/confluence.png"
import jiraWork from "../../assets/jiraWork.png"
import trello from "../../assets/trello.png";
import atlas from "../../assets/atlas.png"
import solution1 from "../../assets/solution1.png"


interface Iprops{
changeWorkShow: ()=>void
title:string
text:string
avatar:any
}

const Container = styled.div`
width: 100%;
height: 500px;
background-color: white;
position: absolute;
left: 0;
right: 0;
bottom: 100;
top: (700px - 150px);
display: flex;
margin-top: 100px;
/* z-index: 2; */

`
const Wrap1 = styled.div`
width: 500px;
padding: 20px;
`
const H2 = styled.div`
font-size: larger;
font-weight: 500;
line-height: 30px;
`
const Span = styled.div`
    color: blue;
    margin-top: 20px;
    font-weight: 500;
`
const Card = styled.div`
display: flex;
gap: 15px;
`
const Group = styled.div`
line-height: 5px;
margin-top: 20px;

h5{
    cursor: pointer;
}
:hover h5{
    color: blue;
}
`
const Image = styled.img`
padding: 10px;
width: 70px;
height: 70px;
background-color: #c1c7d0;
  border-radius: 5px;
  object-fit: contain;
  margin-top: 20px;
`
const CardBox = styled.div``
const Wrap2 = styled.div`
margin-top: 180px;
width: 700px;

`
const Icon = styled.div``

export const WorkManagement:React.FC <Iprops>=({title,text,avatar})=>{
return(
    <Card>
        <Image src={avatar}/>
        <Group>
            <h5>{title}</h5>
            <p>{text}</p>
        
        </Group>

    </Card>
)
}

const Work:React.FC<Iprops> = ({changeWorkShow}) => {
  return (
    <Container onClick={changeWorkShow}>
        <Wrap1>
            <H2>
Make work flow across teams<br/> while connecting back to company<br/> goals
</H2>
<Span>Work differently,together</Span>
<Span><Icon>{<BsArrowRight />}</Icon></Span>
<CardBox>
<WorkManagement
changeWorkShow={()=>{}}
avatar={confluence}
title="Confluence"
text="Content collaboration"
/>
<WorkManagement
changeWorkShow={()=>{}}
avatar={trello}
title="Trello"
text="Visual project management"
/>
<WorkManagement
changeWorkShow={()=>{}}
avatar={jiraWork}
title="Jira Work Management"
text="Business team collaboration"
/>
<WorkManagement
changeWorkShow={()=>{}}
avatar={atlas}
title="Atlas"
text="Teamwork directory"
/>

</CardBox>
        </Wrap1>
        <Wrap2>
            <img src={solution1}/>
        </Wrap2>

    </Container>
  )
}

export default Work