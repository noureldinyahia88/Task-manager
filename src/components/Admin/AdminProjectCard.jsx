import React, { useState } from 'react'
import styled from 'styled-components'
import manger from '../../img/manger.png'
import { useForm } from 'react-hook-form';
import  * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


import { FaCalendarMinus } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { useMutation } from '@tanstack/react-query';

import { deleteProject, queryClient, updateProject } from '../Uitily/http/http'
import { useNavigate } from 'react-router';


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
    color: #374151;
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
    border-left: 1px solid ${theme.fontColor};
    padding-left: 25px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    
`


const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    position: relative;
`



const ConFarimationBox = styled.div`
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
    position: absolute;
    bottom: 33px;
    right: 31px;
    z-index: 200;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &.show{
        display: flex;
    }
`

const Header2confirmation = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: #463F3F;
    border-bottom: 1px solid ${theme.black};
    padding-bottom: 15px;
    width: 100%;
    margin: 0;
`
const ConfimationBtnsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
`
const Span = styled.span`
    color: red;

`

/* **************Update Form****************** */
const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.white};
    width: 1130px;
    height: 768px;
    border-radius: 40px;
    gap: 80px;
    position: relative;
`
const InputFormWrapperParent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
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
    
    font-weight: 600;
    color: ${theme.gray800};
    font-size: 60px;
    margin: 0;
    border-bottom: 2px solid ${theme.inputColor};
    width: 1130px;
    padding-bottom: 60px;
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
// *********************


const AdminProjectCard = ({id ,progress ,managerImg, title, description, startDate, deadline, managerName, onClick}) => {

    const navigate = useNavigate()
    //React Hook Form
    const validationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        managerid: yup.number().positive().integer().required("Please Enter a valid ID"),
        description: yup.string().required("Description is required"),
        date: yup.string().required("Please Enter a valid date")
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const [choose, setChoose] = useState(false) 
    const [showUpdateForm, setUpdateFrom] = useState(false)

    // clicked projectCard ID state
    const [projectId, setProjectId] = useState()
    
    const handleClick = () => {
        setProjectId(id)
        setChoose(!choose)
        onClick(id);
    }

    const handleclickUpdateForm = () => {
        setUpdateFrom(!showUpdateForm)
        setChoose(false)
    }

    const [cancel, setCancel] = useState(false)
    const confarimationHandleCancel = () => {
        setCancel(!cancel)
    }


    // to delete Project
    const { mutate: deleteMutate } = useMutation({
        mutationFn: deleteProject,
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ['data']
            })
        }
    });

    function handleDelete() {
        deleteMutate({ id: projectId});
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    // update Project
    const { mutate: updateMutate  } = useMutation({
        mutationFn:()=> updateProject(),
    })

    function handleSubmitUpdate(formData) {
        updateMutate({id: projectId, 
            title: formData.title,
            description: formData.description,
            deadline: formData.date,
            managerID: formData.managerid
        })
    }

    return (
        <MangeProjectHeader>
        <HeaderTitle># {id}</HeaderTitle>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderTitle>{progress}%</HeaderTitle>
        <HeaderTitle><img src={managerImg} alt="" /> {managerName}</HeaderTitle>
        {/* <HeaderTitle>{startDate}</HeaderTitle> */}
        <HeaderTitle>{deadline}</HeaderTitle>
    
        <MangeWrapper>
            <ButtonSetting onClick={handleClick}>
            <IoSettings style={{ width: '24px', height:'24px'}} />
            </ButtonSetting>
        </MangeWrapper>
        
        
        <OverlayDiv2 className={showUpdateForm ? 'show': ''}>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            <ButtonSky400 onClick={handleclickUpdateForm}>Update</ButtonSky400>
            <ButtonSky100 onClick={handleDelete}>Delete</ButtonSky100>
        </ConfimationBtnsWrapper>
        </ConFarimationBoxSetting>
    </MangeProjectHeader>
)
}

export default AdminProjectCard