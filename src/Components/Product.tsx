import styled from "@emotion/styled";
import React from "react";
import jiraSoftware from "../assets/jiraProduct.png";
import confluence from "../assets/confluence.png";
import jiraService from "../assets/jiraSoftware.png";
import trello from "../assets/trello.png";
import { BsArrowRight } from "react-icons/bs";
import atlas from "../assets/atlas.png"
import jiraProduct from "../assets/jiraProduct.png"
import roadmap from "../assets/roadmap.png"
import cloud from "../assets/cloud.png"

interface Iprops {
  changeProductShow: () => void;
  title: string;
  icon: any;
  text: string;
  // bc:string
}

const Container = styled.div`
  /* display: flex; */
  position: fixed;
  width: 100%;
  height: calc(100vh - 70px);
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0%;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
`;
// const Wrapper=styled.div``
const Card1 = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  padding: 20px;
`;
const Card2 = styled.div`
  background-color: #f4f5f7;
  width: 400px;

  padding: 20px;
  

  /* position: absolute; */
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  /* height: 500px; */
`;

const Box = styled.div`
  width: 300px;
  height: 70px;
  /* background-color:#D3DFFF; */
  border-radius: 5px;
  display: flex;
`;
const CardBox = styled.div`
  padding: 5px;
  font-size: smaller;
  line-height: 5px;
`;
const P = styled.div``;
const Image = styled.img`
  width: 80px;
  background-color: #c1c7d0;
  border-radius: 5px;
  margin-top: 10px;
  object-fit: contain;
`;
const Sect = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
`;
const Span = styled.div`
font-weight: 500;
  margin-top: 40px;
  font-size: small;
  color: blue;
`;
// const Icon=styled.div``
const Sects = styled.div`
  margin-top: 50px;
  font-size: small;
  line-height: 5px;
  cursor: pointer;
  h4 {
    :hover {
      color: blue;
    }
  }
`;
const Group1 = styled.div`
display: flex;


img{
    height: 60px;
    width: 80px;
  background-color: #c1c7d0;
  border-radius: 5px;
  object-fit: contain;
}
`;
const Group2 = styled.div`
display: flex;
margin-top: 20px;

img{

    height: 60px;
    width: 80px;
  background-color: #c1c7d0;
  border-radius: 5px;
  object-fit: contain;
}
`
const GroupSet1=styled.div`
margin-bottom: 3px;
  padding: 5px;
  font-size: medium;
  line-height: 1px;
  font-weight: light;

`
const GroupSet2=styled.div`
  padding: 5px;
  font-size: medium;
  line-height: 1px;
  font-weight: light;
`

const H4 = styled.div`
margin-top: 30px;
font-size: small;
`
const Set1 = styled.div`
margin-top: 20px;
display: flex;
gap: 5px;
font-size: small;
/* padding: 10x; */

img{
    width: 40px;
    height: 30px;
}
`
const Set2 = styled.div`
font-size: small;
display: flex;
gap: 5px;
margin-top: 10px;


img{
    width: 40x;
    height: 30px;
}
`

const Span1 = styled.div`
    color: blue;
    margin-top: 30px;
    font-size: small;
    font-weight: 500;
`

export const ProductDrop: React.FC<Iprops> = ({ title, icon, text }) => {
  return (
    <Box>
      <Image src={icon} />
      <CardBox>
        <h5>{title}</h5>
        <P>{text}</P>
      </CardBox>
    </Box>
  );
};

const Product: React.FC<Iprops> = ({ changeProductShow}) => {
  return (
    <Container onClick={changeProductShow}>
      <Section>
        <Card1>
          <h4>FEATURED</h4>
          <Sect>
            <ProductDrop
              changeProductShow={() => {}}
              icon={jiraService}
              title="Jira Software"
              text="Project and issue tracking"
            />
            <ProductDrop
              changeProductShow={() => {}}
              icon={confluence}
              title="Confluence"
              text="Content collaboration"
            />
            <ProductDrop
              changeProductShow={() => {}}
              icon={jiraSoftware}
              title="Jira Service Management"
              text="High-velocity ITSM"
            />
            <ProductDrop
              changeProductShow={() => {}}
              icon={trello}
              title="Trello"
              text="Visual project management"
            />
          </Sect>
          <Span>
            View all products{" "}
            <a>
              <icon>{<BsArrowRight />}</icon>
            </a>
          </Span>
          <Sects>
            <h4>Marketplace</h4>
            <p>
              Connects thousands of apps and integrations for all your Atlassian
              products
              <a>
                <icon>{<BsArrowRight />}</icon>
              </a>
            </p>
          </Sects>
        </Card1>
        <Card2>
          <h5>WHAT'S NEW</h5>
          <Group1>
            <img  src={atlas}/>
            <GroupSet1>
                <h6>Atlas</h6>
                <p>Teamwork directory</p>
            </GroupSet1>
          </Group1>
          <Group2>
          <img  src={jiraProduct}/>
          <GroupSet2>
<h6>Jira Product Discovery</h6>
<p>Prioritization and roadmapping</p>
          </GroupSet2>
          </Group2>
          <Span1>View all <a><icon>{<BsArrowRight />}</icon></a></Span1>
          <H4>YOU MIGHT FIND HELPFUL</H4>
          <Set1>
            <img src={roadmap}/>
            <p>Cloud Product Roadmap</p>
          </Set1>
          <Set2>
          <img src={cloud}/>
            <p>Atlassian Migration Program</p>
          </Set2>
        </Card2>
      </Section>
    </Container>
  );
};

export default Product;
