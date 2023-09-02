import styled from "@emotion/styled";
import React,{useState}from "react";
import GlobalStyle from "../GlobalStyle";
import Log from "../../assets/AtlassianLogo.svg";
import {AiOutlineDown} from "react-icons/ai"
import Button from "../Reuse/Button"
import {BsSearch} from "react-icons/bs"
import Product from "../Product";
import Solution from "../Solution"
import Resources from "../Resources";


const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 70px;
  box-shadow: rgba(0,0,0,0.02) 0PX 1PX 3PX 0px,rgba(27,31,35,0.15)0px 0px 0px 1px;
  z-index: 10;

`;
const Hold = styled.div`
display: flex;
align-items: center;
margin-left: 70px;
`;
const Logo = styled.img`
width: 200px;
margin-right: 50px;
`;
const Navigations = styled.div`
display: flex;
align-items: center;

`;
const NavHold = styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding: 10px 15px 10px 15px;
border-radius: 5px;
transition: all 350ms;
gap: 5px;

:hover{
  background-color: #c7c7c7;
}
span{
  margin-top: 5px;
  margin-right: 10px;
  color:#0054bb ;
 
}
`;
const Nav =styled.nav``
const ButHold=styled.div`
margin-right: 70px;
display: flex;
gap: 20px;
align-items: center;
`
const ISearch = styled.div``


const Header: React.FC = () => {
  const [showProduct,setShowProduct]= useState<boolean>(false)
  const changeProductShow=()=>{
    setShowProduct(!showProduct)
  }
  const [showSolution,setShowSolution] = useState<boolean>(false)
  const changeSolutionShow=()=>{
    setShowSolution(!showSolution)
  }
  const [showResource,setShowResources]=useState<boolean>(false)
  const changeResourceShow=()=>{
  setShowResources(!showResource)
  }
  return (
    <Container>
      <Hold>
        <Logo  src={Log} />
        <Navigations>
          <NavHold onClick={changeProductShow}>
          <Nav> Products</Nav>
            <span><AiOutlineDown/></span>

          </NavHold>
          {showProduct ? (
            <div>
<Product changeProductShow={changeProductShow}/>
            </div>
          ):null}
           
        
          <NavHold onClick={changeSolutionShow}>
          <Nav>Solutions</Nav>
            <span><AiOutlineDown/></span>
          </NavHold>
          
          {showSolution ? (
          <div>
          <Solution changeSolutionShow={changeSolutionShow}/>
          </div>
          ): null}
          <NavHold onClick={changeResourceShow}>
            
          <Nav>Resources</Nav>
            <span><AiOutlineDown/></span>
          </NavHold>
          
          {showResource? (
          <div>
          <Resources changeResourceShow={changeResourceShow}/>
          </div>
          ): null}

        </Navigations>
      </Hold>
      <ButHold>
        <ISearch>{""}
        <BsSearch/>
        </ISearch>
        <Button title="try now" bg="#0054BB" cl="white"/>
        <Button title="sign in" bg="transparent" cl="black"/>
      </ButHold>
      <GlobalStyle />
    </Container>
  );
};

export default Header;
