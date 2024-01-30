import React, { useState } from 'react'
import styled from 'styled-components'
import manger from '../../img/manger.png'

import { IoSettings } from "react-icons/io5";
import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


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
    /* width: 60px; */
    
`

const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.white};
    width: 1130px;
    border-radius: 40px;
    gap: 80px;
    position: relative;
`
const FormHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #9CA3AF;
`

const ImageWrapper = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const EditBtnWrapper = styled.div`
    position: absolute;
    background-color: #F3F4F6;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    right: 7px;
    bottom: 20px;
    display: grid;
    place-items: center;
`
const EditBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`
const AdminImage = styled.img`
    border-radius: 50%;
`
const AdminheaderDeatials = styled.div`
    color: ${theme.sky900Color};
`

const AdminId = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
`


const InputFormWrapperParent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 110px;
`
const InputformWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 120px;
`
const Label = styled.label`
    font-weight: bold;
    font-size: 24px;
    color: ${theme.gray800};
    
`
const Input = styled.input`

    border: none;
    border-bottom: 2px solid ${theme.inputColor};
    background-color: transparent;
    font-size: 20px;
    color: ${theme.gray500};
    padding: 7px;

    &:focus {
        outline: none;
    }
`

const FormWrapperBtns = styled.div`
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: flex;
    gap: 10px;
`
const FormHeading2 = styled.h2`
    font-weight: 400;
    color: ${theme.sky900Color};
    font-size: 49px;
    margin: 0;
    width: 1130px;
`
const OverlayDiv2 = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #00000036;
    display: none;
    place-items: center;
    top: 0;
    left: 0;

    &.show{
        display: grid;
    }

`
// ********ConFarimation Box Setting**************
const ConFarimationBoxSetting =styled.div`
    width: 320px;
    height: 148px;
    background-color: ${theme.white};
    padding: 5px;
    display: none;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 20px -20px;
    z-index:100;

    &.show{
        display: flex;
    }
`
const Header2confirmationSetting = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #463F3F;
    border-bottom: 1px solid ${theme.black};
    padding-bottom: 15px;
    width: 100%;
    margin: 0;
`

const ButtonSky400 = styled.button`
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    background-color: #E0F2FE;
    color: ${theme.gray800};
    font-size: 20px;
    font-size: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    z-index: 100;
`
const ButtonSky100 = styled.button`
    border-radius: 10px;
    border: none;
    width: 150px;
    height: 50px;
    background-color: #38BDF8;
    color: ${theme.gray800};
    font-size: 20px;
    font-size: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    z-index: 100;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    position: relative;
`

const PMMangeProjectCard = () => {

    //React Hook Form

    const {register, reset, errors, handleSubmit } = useForm();



    const onSubmit = (data) => {
        console.log(data);
    }

    const [choose, setChoose] = useState(false) 
    const [showUpdateForm, setUpdateFrom] = useState(false)

    // clicked projectCard ID state
    const [projectId, setProjectId] = useState()
    
    // const handleClick = () => {
    //     setProjectId(staffId)
    //     setChoose(!choose)
    //     onClick(staffId);
    // }

    const handleclickUpdateForm = () => {
        setUpdateFrom(!showUpdateForm)
        setChoose(false)
    }

    const [cancel, setCancel] = useState(false)
    const confarimationHandleCancel = () => {
        setCancel(!cancel)
    }

    // to delete Project
    // const { mutate: deleteMutate } = useMutation({
    //     mutationFn: deletePMs,
    //     onSuccess: () =>{
    //         queryClient.invalidateQueries({
    //             queryKey: ['pms']
    //         })
    //     }
    // });

    // function handleDelete() {
    //     deleteMutate({ id: projectId});
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 1000);
    // }

    // update Project
    // const { mutate: updateMutate , isError: updateIsError, error: updateError } = useMutation({
    //     mutationFn: updateManager,
    //     onSuccess: () => {
    //         // to refatch the data
    //         queryClient.invalidateQueries({queryKey:['pms']});
    //         console.log("sucsess");
    //     }, onError: (updateError) =>{
    //         console.log(updateError);;
    //     }
    // })

    function handleSubmitUpdate(formData) {
        // updateMutate({id: projectId, 
        //     title: formData.title,
        //     description: formData.description,
        //     deadline: formData.date,
        //     managerID: formData.managerid
        // })
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
            <ButtonSetting>Manage</ButtonSetting>
        </MangeWrapper>

        <OverlayDiv2 className={showUpdateForm ? 'show': ''}>
        <Form onSubmit={handleSubmit(handleSubmitUpdate)}>
        <FormHeading2>Project No: #{projectId}</FormHeading2>

        <InputFormWrapperParent>
        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">Title</Label>
        <Input type='text' placeholder='Enter your Title ' name='title' id='title' {...register("title")} />
        <Span>{errors.title?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">Manager ID</Label>
        <Input type='number' placeholder='Enter your  User ID' name='managerid' id='managerid' {...register("managerid")} />
        <Span>{errors.id?.message}</Span>
        </InputWrapper>
        
        </InputformWrapper>

        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">Date</Label>
        <Input type='text' placeholder='....\....\....' name='date' id='date' {...register("date")}/>
        <FaCalendarMinus style={{ position: 'absolute', right: 0, bottom: 17, color:'#0D1C2E' }} />
        <Span>{errors.date?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">Description</Label>
        <Input type='text' placeholder='Enter your Description'name='description' id='description' {...register("description")} />
        <Span>{errors.description?.message}</Span>
        </InputWrapper>
        
        </InputformWrapper>
        </InputFormWrapperParent>

        <FormWrapperBtns>
            <ButtonSky100 onClick={confarimationHandleCancel}>Cancel</ButtonSky100>
            <ButtonSky400  type="submit" onClick={handleSubmitUpdate}>Save</ButtonSky400>
        </FormWrapperBtns>

        {/* confirm cancel */}
        <ConFarimationBox className={cancel? "show":""}>
        <Header2confirmation>Are you sure you want cancel Update</Header2confirmation>
        <ConfimationBtnsWrapper>
            <ButtonSky400  onClick={confarimationHandleCancel}>No</ButtonSky400>
            <ButtonSky100 onClick={handleclickUpdateForm}>Yes</ButtonSky100>
        </ConfimationBtnsWrapper>
        </ConFarimationBox>
        {/* End Of confirm cancel */}
        </Form>
        </OverlayDiv2>

        <ConFarimationBoxSetting className={choose ? 'show': ''}>
        <Header2confirmationSetting>Setting</Header2confirmationSetting>
        <ConfimationBtnsWrapper>
            <ButtonSky400 type="submit" onClick={handleclickUpdateForm}>Update</ButtonSky400>
            <ButtonSky100 onClick={handleDelete}>Delete</ButtonSky100>
        </ConfimationBtnsWrapper>
        </ConFarimationBoxSetting>
    </MangeProjectHeader>
    
)
}

export default PMMangeProjectCard