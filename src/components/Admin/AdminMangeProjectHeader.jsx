import React from 'react'
import styled from 'styled-components'
import setting from '../../img/settings-2.png'

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E'
};

const MangeProjectHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.white};
    border-radius: 10px;
    padding-left: 8px;
    padding-right: 8px;
`
const HeaderTitle = styled.h3`
    font-weight: 500;
    font-size: 16px;
    color: ${theme.fontColor};
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

const AdminMangeProjectHeader = () => {
    return (
    <MangeProjectHeader>
        <HeaderTitle>ID</HeaderTitle>
        <HeaderTitle>Title</HeaderTitle>
        <HeaderTitle>Progress</HeaderTitle>
        <HeaderTitle>Manager</HeaderTitle>
        <HeaderTitle>Date</HeaderTitle>
        <HeaderTitle>Deadline</HeaderTitle>

        <MangeWrapper>
            <ButtonSetting>
            <img src={setting} alt='' />
            </ButtonSetting>
        </MangeWrapper>
    </MangeProjectHeader>
)
}

export default AdminMangeProjectHeader