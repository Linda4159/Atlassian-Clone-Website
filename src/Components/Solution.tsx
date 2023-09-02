import styled from '@emotion/styled'
import React from 'react'
import pages from "../assets/PageMultiple.png"
import bolt from "../assets/bolt.png"
import building from "../assets/building.png"
import diagram from "../assets/diagramOrgChart.png"
import securityCheck from "../assets/securityChekMark.png"
import { BsArrowRight } from "react-icons/bs";



interface Iprops{
    changeSolutionShow:()=>void
title:string
text: string
avatar: any
title1: string
text1: string
text2: string
text3: string
text4: string
text5: string
// backgroundColor:string


}
const Container = styled.div`
padding: 20px;
width: 100%;
height: calc(100vh- 70px);
height: 500px;
position: fixed;
top: 70px;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
  z-index: 3;
  background-color:white;
  display: flex;
`
const Wrapper = styled.div`
width: 900px;
`
const UpSection = styled.div`
gap: 20px;
display: flex;
`
const Section = styled.div``
// const Box1=styled.div``
const Image = styled.img`
width: 50px;
height: 40px;
`
// const Box2 = styled.div``
const FirstCard =styled.div`
height: 150px;
width: 250px;
background-color: #D3DFFF;
border-radius: 5px;
padding: 10px;
font-weight: 200;
font-size: large;
margin-top: 20px;

:hover{
    cursor: pointer;
    transition: 350ms;
}




`
const Card = styled.div`
display: flex;
justify-content:space-between;
`
const P = styled.div`
  margin-bottom  :30px ;
`
const SecondCard = styled.div`
/* background-color: yellow; */
width: 250px;
height: 200px;
padding: 10px;
margin-top: 30px;
line-height: 15px;
`
const CornerSection =styled.div`
width: 350px;
background-color: #F4F5F7;
padding: 20px;
font-size: small;
line-height: 20px;

`
const DownSection = styled.div`
display: flex;
gap: 20px;
`
const Wrap = styled.div``
const Span = styled.div`
    
    color: blue;
    font-weight: 500;
`
const H4= styled.div`

margin-top: 30px;
font-size: small;
`

const Set3 = styled.div`
font-size: small;
display: flex;
gap: 5px;
margin-top: 15px;


img{
    width: 40x;
    height: 30px;
}
`
const Set4 = styled.div`
font-size: small;
display: flex;
gap: 5px;
margin-top: 10px;


img{
    width: 40x;
    height: 30px;
}
`








export const SolutionDuplicate:React.FC<Iprops> =({title,text,avatar})=>{
    return(
       <Section>
       
            
        <FirstCard>
        <Card>
            
        <h5>{title}</h5>
        <Image src={avatar}/>
        </Card>
        <P>{text}</P>
    
    </FirstCard>
    </Section> 
    )
}
export const SolutionCard:React.FC<Iprops>=({title1,text1,text2,text3,text4,text5})=>{
    return(
<Wrap>
<SecondCard>
     <h5>{title1}</h5>
     <p>{text1}</p>
     <p>{text2}</p>
     <p>{text3}</p>
     <p>{text4}</p>
     <p>{text5}</p>
     </SecondCard>
</Wrap>
    )
}

        
       
 

const Solution:React.FC<Iprops> = ({changeSolutionShow}) => {
  return (
    <Container onClick={changeSolutionShow}> 
<Wrapper>

        <h4>FEATURED</h4>
        <UpSection>
            
        <SolutionDuplicate
        changeSolutionShow={() => {}}
        title="work Mangement"
        avatar={pages}
        text="Manage projects and align goals across all teams to achieve deliverables."

        />
        <SolutionDuplicate
        changeSolutionShow={() => {}}
                title="IT Service Management"
                avatar={bolt}
                text="Enable dev, IT ops and business teams to deliver great service at high velocity."
                
        />
        <SolutionDuplicate
        changeSolutionShow={() => {}}
                title="Agile & DevOps"
                avatar={diagram}
                text="Run a world-class agile software organization from discovery to delivery and operation."
            
        />
        </UpSection>
        <DownSection>
            <SolutionCard
            changeSolutionShow={() => {}}
            title1="By Team Size"
            text1="Enterprise"
            text2="Small Business"
            text3="Startup"
            text4="Non-profit"
            text5=""
            />
            <SolutionCard
            changeSolutionShow={() => {}}
                        title1="By Team Function"
                        text1="Software development"
                        text2="IT"
                        text3="Finance"
                        text4="Marketing"
                        text5="HR"
            />
            <SolutionCard
            changeSolutionShow={() => {}}
                        title1="By Industry"
                        text1="Retail"
                        text2="Telecommunications"
                        text3="Professional Services"
                        text4="Government"
                        text5=""
            />

        </DownSection>
        </Wrapper>
<CornerSection>
    <h5>WHAT'S NEW</h5>
    <h4>Atlassian Together</h4>
    <p>Get atlassian work management products in <br/> one convenient package for eneterprise teams.</p>
    <Span>Learn more<icon>{<BsArrowRight />}</icon></Span>
    <H4>WHAT YOU MIGHT HELPFUL</H4>
    <Set3>
    <img src={securityCheck}/>
            <p>Atlassian Trust & Security</p>
    </Set3>
    <Set4>
    <img src={building}/>
            <p>Customer Case Studies</p>
    </Set4>
</CornerSection>
    </Container>
  )
}

export default Solution