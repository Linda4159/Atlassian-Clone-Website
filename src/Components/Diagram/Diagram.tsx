import styled from '@emotion/styled'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import kiva from "../../assets/kiva.svg"
import twitter from "../../assets/twitter.png"
import redfin from "../../assets/redfin.svg"
import nasa from "../../assets/nasa.svg"
import audi from "../../assets/audi.svg"
import castlight from "../../assets/castlight.svg"

const Section = styled.div`
width: 100%;
text-align: center;
background-color: #E5EFFF;
height: 400px;
`
const P = styled.div`
font-size: large;
font-weight: 500;
padding-top: 50px;


`
const Span = styled.div`
  color: blue;
    margin-top: 30px;
    font-weight: 500;
    cursor: pointer;
    
`
const Box = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-around;

img{
  width: 150px;
}

`
const Icon = styled.div``
const SpanGroup=styled.div`
display: flex;
gap: 10px;
justify-content: center;
`

const Diagram = () => {
  return (
    <Section>
      <P>Join the 250,000+ companies that use our software to power team collaboration
</P>
<SpanGroup>
<Span>See all customers</Span>
<Span><Icon>{<BsArrowRight />}</Icon></Span>
</SpanGroup>

<Box>
<img src={kiva}/>
<img src={twitter}/>
<img src={redfin}/>
<img src={nasa}/>
<img src={audi} />
<img src={castlight}/>
</Box>
    </Section>
  )
}

export default Diagram