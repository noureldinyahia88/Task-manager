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
    padding-top: 8px;
    padding-left: 15px;
    padding-bottom: 8px;
    font-weight: bold;
`
const HeaderTitle = styled.h3`
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
    width: 60px;
`
const ButtonSetting = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ManageAdminHeaderpage = () => {
  return (
    <MangeProjectHeader>
        <HeaderTitle>ID</HeaderTitle>
        <HeaderTitle>Title</HeaderTitle>
        <HeaderTitle>Email</HeaderTitle>
        <HeaderTitle>Phone Number</HeaderTitle>
        {/* <HeaderTitle>Date</HeaderTitle> */}

        <MangeWrapper>
            <ButtonSetting>
            <img src={setting} alt='' />
            </ButtonSetting>
        </MangeWrapper>
    </MangeProjectHeader>
)
}

export default ManageAdminHeaderpage