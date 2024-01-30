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
    height: 30px;
    background-color: ${theme.white};
    border-radius: 10px;
    padding-left: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 8px;
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
`
const HeaderTitle = styled.h3`
    font-size: 16px;
    color: ${theme.fontColor};
    font-weight: 600;
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
    font-size: 16px;
    color: ${theme.fontColor};
    font-weight: 600;
`


const PMManageProjectHeader = () => {
  return (
    <MangeProjectHeader>
        <HeaderTitle>ID</HeaderTitle>
        <HeaderTitle>Title</HeaderTitle>
        <HeaderTitle>Description</HeaderTitle>
        <HeaderTitle>Employee</HeaderTitle>
        <HeaderTitle>Status</HeaderTitle>
        <HeaderTitle>Date</HeaderTitle>

        <MangeWrapper>
            <ButtonSetting>
            Action
            </ButtonSetting>
        </MangeWrapper>
    </MangeProjectHeader>
  )
}

export default PMManageProjectHeader