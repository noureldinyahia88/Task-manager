import React from 'react'
import styled from 'styled-components'


const ErrorWrapper = styled.div`
    color: Red;
    font-weight: bold;
    font-size: 30px;
`

const ErrorBlock = (Message) => {
    return (
    <ErrorWrapper>{Message}</ErrorWrapper>
)
}

export default ErrorBlock