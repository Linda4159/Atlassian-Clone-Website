import { Global, css } from '@emotion/react'
import React from 'react'

const GlobalStyle = () => {
  return (
    <Global
    styles={ css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap');

    body{
        font-family: 'Montserrat', sans-serif;
    }
    `}
    />
  )
}

export default GlobalStyle