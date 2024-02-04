import React from 'react'
import styled from 'styled-components'
import loading from '../../img/Layer_1.png'
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
const Rightframe = styled.div`
    background-color: ${theme.blue700};
    width: 11px;
    height: 81px;
    border-radius: 0px 10px 10px 0px;
`
const Leftframe = styled.div`
    background-color: ${theme.blue700};
    width: 11px;
    height: 81px;
    border-radius: 10px 0px 0px 10px;
`
const P = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
const Header2 = styled.h2`
    font-size: 60px;
    font-weight: bold;
    margin: 0;

`

const ImgwrapperParent = styled.div`
    background-color: transparent;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    display: grid;
    place-items: center;

`
const ImgWrapper = styled.div`
    background-color: transparent;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    display: grid;
    place-items: center;
`
const ImgLoading = styled.img`
    background-color: transparent;
    border-radius: 50%;
`
const Card = styled.div`
    background-color: ${theme.white};
    height: 300px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.fontColor};
    transition: all 0.3s ease;
    
    &:hover{
        background-color: ${theme.blue400};
        color: ${theme.white};
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

        ${Rightframe}{
            background-color: ${theme.white};
        }

        ${Leftframe}{
            background-color: ${theme.white};
        }
        ${P}{
            display: none;
        }
        ${ImgwrapperParent}{
            transform: translateY(-100px);
            background-color: #7dd3fc7d;
            
        }
        ${ImgWrapper}{
            background-color: ${theme.white};
        }
        ${Header2}{
            transform: translateY(-50px);
        }
    }

`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AdminProjectSummery = ({adminProjectCardCount}) => {
    return (
    <Wrapper>
        <Card>
            <Rightframe></Rightframe>
            <CardContent>
                <ImgwrapperParent>
                <ImgWrapper>
                <ImgLoading src={loading} alt=''/>
                </ImgWrapper>
                </ImgwrapperParent>
            <P>All Projects</P>
            <Header2>{adminProjectCardCount}</Header2>
            </CardContent>
            <Leftframe></Leftframe>
        </Card>

        <Card>
            <Rightframe></Rightframe>
            <CardContent>
                <ImgwrapperParent>
                <ImgWrapper>
                <ImgLoading src={loading} alt=''/>
                </ImgWrapper>
                </ImgwrapperParent>
            <P>In-Progress</P>
            <Header2>30</Header2>
            </CardContent>
            <Leftframe></Leftframe>
        </Card>

        <Card>
            <Rightframe></Rightframe>
            <CardContent>
                <ImgwrapperParent>
                <ImgWrapper>
                <ImgLoading src={loading} alt=''/>
                </ImgWrapper>
                </ImgwrapperParent>
            <P>Completed Projects</P>
            <Header2>40</Header2>
            </CardContent>
            <Leftframe></Leftframe>
        </Card>
    </Wrapper>
)
}

export default AdminProjectSummery