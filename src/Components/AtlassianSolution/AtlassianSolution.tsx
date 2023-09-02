import styled from '@emotion/styled'
import React,{useState} from 'react'
import Work from "./Work"
import Service from "./Service"
import { BsArrowRight } from "react-icons/bs";
import Solution3 from "../../assets/solution3.png"
import JiraSoftware from "../../assets/jiraSoftware.png"
import JiraProduct from "../../assets/jiraProduct.png"
import compass from "../../assets/compass.png"
import bitBucket from "../../assets/bitBucket.png"

interface Iprops{
// bgColor:string
// textColor:string
title:string
text:string
avatar:any
}

const Container = styled.div`
padding: 10px;
justify-content: center;
align-items: center;
width: 100%;
height: 950px;
`
const H1 = styled.h1`
text-align: center;
margin-top: 50px;
`
const Wrap=styled.div`
display: flex;
gap: 20px;
justify-content: center;
margin-top: 20px;
`
const Button = styled.button`
background-color:#DEEBFF;
color: #0052CC;
width: 300px;
height: 80px;
/* padding: 30px; */
font-size: larger;
border-radius: 50px;
font-weight: bold;
border: transparent;
cursor: pointer;
transition: all 350ms;

:hover{
cursor: pointer;
background-color: #0052CC;
color: #DEEBFF;
}
`
const Section = styled.div`
display: flex;
`
const Sect1 = styled.div`
width: 500px;
padding: 20px;

`
const Sect2 = styled.div`
margin-top: 180px;
width: 700px;
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
const Image = styled.img`
padding: 10px;
width: 70px;
height: 70px;
background-color: #c1c7d0;
  border-radius: 5px;
  object-fit: contain;
  margin-top: 20px;
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
const Icon = styled.div``
const GroupSpan=styled.div`
display: flex;
gap: 10px;
`

export const Agile:React.FC<Iprops>=({title,text,avatar})=>{
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

const AtlassianSolution:React.FC = () => {

    const[showWork,setShowWork] = useState<boolean>(false)
    const changeWorkShow=()=>{
        setShowWork(!showWork)
    }
    const [ showService,setShowService] = useState<boolean>(false)
    const changeServiceShow =()=>{
        setShowService(!showService)
    }
  return (
    <Container>
        <H1>Atlassian solutions are designed for all types of work
</H1>
<Wrap>
    <Button onClick={changeWorkShow}
    >Work Mangement</Button>
    {showWork ?(
    <div>
       <Work changeWorkShow={changeWorkShow}/>
          </div>
          ): null}
    <Button onClick={changeServiceShow}
    >IT Service Mangement</Button>
    {showService ? (
        <div>
            <Service changeServiceShow={changeServiceShow}/>
        </div>
    ): null}
    <Button>Agile and DevOps</Button>
</Wrap>
<Section>
    <Sect1>
        <H2>Run a world-class agile software<br/> company—from discovery to <br/>delivery and operations
</H2>
<GroupSpan>
<Span>Explore Open DevOps</Span>
<Span><Icon>{<BsArrowRight />}</Icon></Span>
</GroupSpan>

<Agile
title="Jira Software"
text="Project ans issue tracking"
avatar={JiraSoftware}
/>
<Agile
title="Jira Product and Discovery"
text="Prioritization and roadmapping"
avatar={JiraProduct}
/>
<Agile
title="Jira Align"
text="Enterprise Agile Planning"
avatar={JiraSoftware}
/>
<Agile
title="Compass"
text="Developer experirnce platform"
avatar={compass}
/>
<Agile
title="Bitbucket"
text="Code & CI/CD"
avatar={bitBucket}
/>

    </Sect1>
    <Sect2>
    <img src={Solution3}/>
    </Sect2>
</Section>

    </Container>
  )
}

export default AtlassianSolution