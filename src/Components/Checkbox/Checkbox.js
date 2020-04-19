import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: text-top;
    height: 18px;
`

const Icon = styled.svg` 
  fill: none;
  stroke: #c39a6b; 
  stroke-width: 3px;  
`


const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px; 
  background: #fcfcfc;
  border: 1px solid #bbbbbb;
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
);

export default Checkbox
