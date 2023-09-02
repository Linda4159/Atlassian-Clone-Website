import React from 'react'
import Hero from "../Hero/Hero"
import AtlassianSolution from '../AtlassianSolution/AtlassianSolution'
import Diagram from '../Diagram/Diagram'
import Essential from '../Essential/Essential'
import Boxes from '../Boxes/Boxes'
import Career from "../Career/Career"
import Footer from "../Footer/Footer"
import DownPart from '../DownPart/DownPart'


const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AtlassianSolution/>
        <Diagram/>
        <Essential/>
        <Boxes/>
        <Career/>
        <Footer/>
        <DownPart/>

        
    </div>
  )
}

export default LandingPage