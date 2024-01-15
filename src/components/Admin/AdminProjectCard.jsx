import React from 'react'
import styled from 'styled-components'
import manger from '../../img/manger.png'
import setting from '../../img/settings-2.png'

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    gray700: '#374151',
};

const MangeProjectHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.white};
    border-radius: 10px;
    padding: 10px;
    margin-top:30px

`
const HeaderTitle = styled.h3`
    font-weight: 560;
    font-size: 13px;
    color: ${theme.gray700};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
const MangeWrapper = styled.div`
    border-left: 1px solid ${theme.fontColor};
    padding-left: 25px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const ButtonSetting = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const AdminProjectCard = () => {
    return (
        <MangeProjectHeader>
        <HeaderTitle>#123</HeaderTitle>
        <HeaderTitle>Fake Title</HeaderTitle>
        <HeaderTitle>25%</HeaderTitle>
        <HeaderTitle><img src={manger} alt="" /> Vivian R. Lloyd</HeaderTitle>
        <HeaderTitle>9 \ 5 \ 2023</HeaderTitle>
        <HeaderTitle>September 28, 2023</HeaderTitle>

        <MangeWrapper>
            <ButtonSetting>
            <img src={setting} alt='' />
            </ButtonSetting>
        </MangeWrapper>
    </MangeProjectHeader>
)
}

export default AdminProjectCard