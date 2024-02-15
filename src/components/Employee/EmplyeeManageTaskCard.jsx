import React, { useState } from 'react'
import styled from 'styled-components'
import manger from '../../img/manger.png'




const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    blue400: '#38BDF8',
    blue700: '#1D4ED8',
    gray500: '#6B7280',
    gray800: '#1F2937',
    inputColor: '#9CA3AF',
    black: '#000'
};

const ButtonSetting = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.fontColor};
    font-weight: 600;
    font-size: 20px;
    background-color: #0EA5E9;
    width: 104px;
    height: 40px;
    border-radius: 0 10px 10px 10px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.submit{
        background-color: #F87171;
        display: none;
    }
    &.submit.show{
        display: block;
    }
    &.hide{
        display: none;
    }
    &.done{
        background-color: #E5E7EB;
        display: none;
    }
`

const MangeProjectHeader = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.white};
    border-radius: 10px;
    padding: 10px;
    margin-top:30px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: "Roboto Condensed", sans-serif;
    

    &:hover{
        background-color: ${theme.blue700};
        color: ${theme.white};
        ${ButtonSetting} {
            color: ${theme.white};
        }
    }

`
const HeaderTitle = styled.h3`
    font-weight: blod;
    font-size: 13px;
    color: ${theme.gray700};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
const MangeWrapper = styled.div`
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`


const UploadBoxWraper = styled.div`
  width: 617px;
  height: 230px;
  position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    &.show{
        display: flex;
    }
`;

const HeadingWrapper = styled.div`
  border-bottom: 1px solid #000000;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const H2Box = styled.h2`
  font-size: 49px;
  line-height: 120%;
  color: #1F2937;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 10px;
`;

const ConstentWraper = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
`;

const P = styled.p`
  font-size: 24px;
  line-height: 120%;
  color: #9CA3AF;
  font-weight: 600;
`;

const UploadBtn = styled.label`
position: relative;
  width: 161px;
  height: 44px;
  background-color: #60A5FA;
  color: #1F2937;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UploadBtnInput = styled.input`
    position: absolute;
    left: 0;right:0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`

const EmplyeeManageTaskCard = () => {

    const [StartAction, setStartAction] = useState(false)
    const StartActionHandle = () =>{
        setStartAction(true)
    }

    const [upload, setUpload] = useState(false)

    const showSubmintForm = () => {
        setUpload(!upload)
    }
    return (
    <MangeProjectHeader>
        <HeaderTitle>#123</HeaderTitle>
        <HeaderTitle>Fake Title</HeaderTitle>
        <HeaderTitle>lorem ipsum...</HeaderTitle>
        <HeaderTitle><img src={manger} alt="" /> managerName</HeaderTitle>
        <HeaderTitle>Done</HeaderTitle>
        <HeaderTitle>9 \ 5 \ 2023</HeaderTitle>
    
        <MangeWrapper>
        
            <ButtonSetting onClick={StartActionHandle} className={`${StartAction ? 'hide' : ''}`}>Start</ButtonSetting>
            <ButtonSetting className={`submit ${StartAction ? 'show' : ''} ` } onClick={showSubmintForm}>Submit</ButtonSetting>

            <UploadBoxWraper>
                <HeadingWrapper>
                <H2Box>Upload Task</H2Box>
                </HeadingWrapper>
                <ConstentWraper>
                    <P>JPG or PNG or File no larger than 5 MB</P>
                    <UploadBtn>
                    + Upload Photo
                    <UploadBtnInput placeholder='+ Upload Photo' type='file' />
                </UploadBtn>
                </ConstentWraper>
            </UploadBoxWraper>
            <ButtonSetting className="done">Done</ButtonSetting>
            
        </MangeWrapper>

    </MangeProjectHeader>
)
}

export default EmplyeeManageTaskCard