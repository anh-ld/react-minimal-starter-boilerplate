import React from "react"
import styled from 'styled-components'
import './index.css'
import './index.scss'
import basketball from './assets/basketball.svg'

const App:React.FC<{}> = () => {
    return (
        <div>
            <StyledHeading>styled by styled-components</StyledHeading>
            <h1 className='css-heading'>styled by CSS</h1>
            <h1 className='scss-heading'>styled by SCSS</h1>
            <div className='scss-svg-heading'>
                <img src={basketball} alt='basketball' />
                <span>SVG imported as an image</span>
            </div>
            <div className='scss-font-heading'>font face added</div>
        </div>
    )
}

export default App

const StyledHeading = styled.h1`
    border: 3px solid green;
    border-radius: 3px;
    padding: 5px;
    font-family: sans-serif;
    font-size: 20px;
`