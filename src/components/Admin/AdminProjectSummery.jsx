import React from 'react'
import styled from 'styled-components'
const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    blue400: '#38BDF8',
    blue700: '#1D4ED8'
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
`
const Card = styled.div`
    background-color: ${theme.white};
    height: 300px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

`
const Header2 = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: ${theme.fontColor};
    margin: 0;

`
const P = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.fontColor};
    text-align: center;
`

const AdminProjectSummery = () => {
    return (
    <Wrapper>
        <Card>
            <P>All Projects</P>
            <Header2>50</Header2>
        </Card>

        <Card>
            <P>In-Progress</P>
            <Header2>30</Header2>
        </Card>

        <Card>
            <P>Completed Projects</P>
            <Header2>50</Header2>
        </Card>
    </Wrapper>
)
}

export default AdminProjectSummery