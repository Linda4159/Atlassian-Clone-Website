import React from "react";
import styled from "@emotion/styled";
import { BsArrowRight } from "react-icons/bs";
import team from "../assets/Atlassianteam23.png"

interface Iprops {
  changeResourceShow: () => void;
  title: string;
  textA: string;
  textB: string;
  textC: string;
  textD: string;
  textE: string;
  textF: string;
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 70px);
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 4;
  display: flex;
`;
const Wrapper = styled.div`
  width: 900px;
  background-color: white;
  padding: 20px;
`;
const Card = styled.div`
width: 250px;
/* background-color: red; */
height: 300px;
cursor: pointer;
font-size: small;
font-weight: 500;

/* :hover{
    cursor: pointer;
    color: blue;
} */
/* font-weight: 500; */
`;
const Section = styled.div`
  width: 400px;
  background-color: #f4f5f7;
  padding: 30px;
  font-size: small;
  font-weight: 400;
  
`;
const CardBox = styled.div`
display: flex;
gap: 20px;
`;
const Wrap=styled.div`
padding: 10px;
background-color: #E6FCFF;
width: 800px;
height: 100px;
display: flex;
`
const Box1=styled.div`
line-height: 20px;
width: 700px;
`
const Box2=styled.div`
height: 30px;
width: 200px;
/* background-color: blue; */
margin-top: 30px;
/* margin-right: 10px; */
border:1px solid blue;
padding: 10px;
cursor: pointer;
border-radius: 5px;
color: blue;
`
const P =styled.div`
font-size: larger;
font-weight: 400;
margin-top: 10px;
cursor: pointer;

:hover{
    color: blue;
    cursor: pointer;
}
`
const Para = styled.div`
font-size: small;
margin-top: 10px;
`
const Image=styled.img`

`
const Span = styled.div`
color: blue;
font-weight: 500;
`

const ResourcesCard: React.FC<Iprops> = ({
  title,
  textA,
  textB,
  textC,
  textD,
  textE,
  textF,
}) => {
  return (
    <Card>
      <h4>{title}</h4>
      <p>{textA}</p>
      <p>{textB}</p>
      <p>{textC}</p>
      <p>{textD}</p>
      <p>{textE}</p>
      <p>{textF}</p>
    </Card>
  );
};

const Resources: React.FC<Iprops> = ({ changeResourceShow }) => {
  return (
    <Container onClick={changeResourceShow}>
      <Wrapper>
        <CardBox>
          <ResourcesCard 
          changeResourceShow={() => {}}
          title="Learn"
          textA="Atlassian University"
          textB="Atlassian Platbook"
          textC="Product Documentation"
          textD="Developer Resources"
          textE=""
          textF=""
          />
          <ResourcesCard 
          changeResourceShow={() => {}}
          title="Support"
          textA="Atlassian Community"
          textB="Atlassian Support"
          textC="Atlassian Migration Program"
          textD="Enterprise Services"
          textE="Partner Support"
          textF="Purchasing & Licensing"
          />
          <ResourcesCard 
          changeResourceShow={() => {}}
          title="Connect"
          textA="About Us"
          textB="Career"
          textC="Work Life Blog"
          textD="Events"
          textE=""
          textF=""/>
        </CardBox>
        <Wrap>
        <Box1>
            <P>Support for Server products ends February 15,2024</P>
            <Para>With end of support for our server products fast approaching,create a winning plan for<br/> your cloud migrationwith the Atlassian Migration Program</Para>
        </Box1>
        <Box2>Assess my options</Box2>
        </Wrap>
      </Wrapper>
      <Section>
<h4>WHAT'S NEW</h4>
<Image src={team}/>
<h4>Atlassian Team'23</h4>
<p>Catch up on the latest Atlassian product<br/>announcements and innovations shared live<br/>on stage in Las Vegas</p>
<Span>Watch now <icon>{<BsArrowRight />}</icon></Span>
      </Section>
    </Container>
  );
};

export default Resources;
