import styled from "@emotion/styled";
import React from "react";
import whiteLogo from "../../assets/whiteLogo.png";

interface Iprops {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  search: string;
}
const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f4f5f7;
  display: flex;
  gap: 100px;
  padding-top: 20px;
  /* margin-top: 50px; */
`;
const Wrapper = styled.div``;
const H4 = styled.h4`
font-size: small;
color: #253858;
`;
const P = styled.div`
font-size: small;
line-height: 20px;
color: #253858;
cursor: pointer;
`;
const Span = styled.div`
font-size: small;
font-weight: 500;
padding-top: 10px;
color: #508EFF;
cursor: pointer;
`;
const Wrap = styled.div`
  display: flex;
  gap: 80px;

`;
const Image = styled.img`
width: 150px;
height: 50px;
cursor: pointer;
`;

export const FooterDuplicate: React.FC<Iprops> = ({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  search,
}) => {
  return (
    <Wrapper>
      <H4>{title}</H4>
      <P>{text1}</P>
      <P>{text2}</P>
      <P>{text3}</P>
      <P>{text4}</P>
      <P>{text5}</P>
      <P>{text6}</P>
      <P>{text7}</P>
      <Span>{search}</Span>
    </Wrapper>
  );
};

const Footer = () => {
  return (
    <Container>
      <Image src={whiteLogo} />
      <Wrap>
        <FooterDuplicate
          title="PRODUCTS"
          text1="Jira Software"
          text2="Jira Align"
          text3="Jira Service Management"
          text4="Jira Product Discovery"
          text5="Confluence"
          text6="Trello"
          text7="Bitbucket"
          search="View all products"
        />
        <FooterDuplicate
          title="RESOURCES"
          text1="Technical Support"
          text2="Purchasing & licensing"
          text3="Atlassian Community"
          text4="Knowlegde Base"
          text5="Marketplace"
          text6="My Account"
          text7=""
          search="Create support ticket "
        />
        <FooterDuplicate
          title="EXPAND & LEARN"
          text1="Partners"
          text2="Training & Certification"
          text3="Documentation"
          text4="Deloverps Resources"
          text5="Enterprise Services"
          text6=""
          text7=""
          search="View all resources"
        />
        <FooterDuplicate
          title="ABOUT ATLASSIAN"
          text1="Company"
          text2="Careers"
          text3="Events"
          text4="Blogs"
          text5="Atlassian Foundation"
          text6="Investor Relations"
          text7="Trust & Security"
          search="Contact us"
        />
      </Wrap>
    </Container>
  );
};

export default Footer;
