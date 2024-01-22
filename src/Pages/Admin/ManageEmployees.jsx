import React, { useState } from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import { IoMdSearch } from "react-icons/io";

import styled from 'styled-components'
import { AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import placeHoderImage from '../../img/image-fill.png';
import  * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import MangeEmloyeeCard from '../../components/Admin/MangeEmloyeeCard' 
import ManageAdminHeaderpage from '../../components/Admin/ManageAdminHeaderpage';
import { MdModeEditOutline } from "react-icons/md";
import { fetchEmployees } from '../../components/Uitily/http/AdminApi/ManageEmployeesApi';

import { useQuery } from '@tanstack/react-query';


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

const AdminManageEmployees = styled.div`
    display: flex;
    font-family: "Roboto Condensed", sans-serif;
`
const MangeProjectPage = styled.div`
    width: 100%;
    background-color: ${theme.blue400};
    border-radius: 30px;
    padding: 20px 60px 20px 60px;
`
const Header2 = styled.h2`
    font-weight: 600;
    color: ${theme.white};
    font-size: 60px;
    margin: 0;
`
const Wrapper = styled.div`
margin-top: 50px;
`

const ManageProjectsInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    justify-content: center;
    margin-bottom: 102px;
    gap: 20px;
`

const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`
const InputSearch = styled.input`
    background-color: ${theme.white};
    width: 60%;
    border: none;
    height: 30px;
    padding: 5px;
    border-radius: 10px 0px 0px 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;

    &:focus{
        outline: none;
    }

`
const SearchBtn = styled.button`
    background-color: ${theme.blue700};
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: ${theme.white};
    cursor: pointer;
`

const Button = styled.button`
    background-color: ${theme.white};
    padding: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    &.blueBtn{
    background-color: ${theme.blue700};
    color: ${theme.white};
    }
`
/* **************Update Form****************** */


const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.white};
    width: 1130px;
    border-radius: 40px;
    gap: 20px;
    position: relative;
`
const FormHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 60px;
    border-bottom: 2px solid ${theme.inputColor};
`

const AdminImage = styled.img`
    border-radius: 50%;
`


const InputFormWrapperParent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 80px;
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
    bottom: 18px;
    right: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index:100;

    &.show{
        display: flex;
    }
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    position: relative;
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
const ImageWrapper = styled.div`
    width: 146px;
    height: 146px;
    border-radius: 50%;
    background-color: #D1D5DB;
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
    bottom: 10px;
    display: grid;
    place-items: center;
`
const EditBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`
const ManageEmployees = () => {

    //React Hook Form
    const validationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        id: yup.number().positive().integer().required("Please Enter a valid ID"),
        description: yup.string().required("Description is required"),
        date: yup.date().required("Please Enter a valid date")
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
    });
    //End of React Hook Form

    const onSubmit = (data) => {
        console.log(data);
    }

    const [showUpdateForm, setUpdateFrom] = useState(false)
    const [cancel, setCancel] = useState(false)

    const handleclickUpdateForm = () => {
        setUpdateFrom(!showUpdateForm)
        setCancel(false)
    }

    // for confirmation function
    
    const confarimationHandleCancel = () => {
        setCancel(!cancel)
    }


    //react query
    const { data, isLoading, isError, error  }  = useQuery({
        queryKey: ['data'],
        queryFn: () => fetchEmployees(),
        staleTime: 5000,
    })

    console.log(data)

    return (
        <AdminManageEmployees>
        <AdminSidebar />
        <MangeProjectPage>
            <Header2>Manage Employees</Header2>

            <Wrapper >
                
                <ManageProjectsInputs>
                <Button className='blueBtn' onClick={handleclickUpdateForm}>Add New Employee</Button>
                    <FormWrapper>
                    <InputSearch type="text" className="mangeProjectSearch" placeholder='Search by ID or e-mail' />
                    <SearchBtn className="searchButton"><IoMdSearch style={{'fontSize':'20px'}} /></SearchBtn>
                    </FormWrapper>
                </ManageProjectsInputs>

            <ManageAdminHeaderpage />

            {isLoading && <h2>Loading...</h2>}
                    {isError && <h2>Error: {error.info?.message || 'Failed to fetch Projects.'}</h2>}
                    
                    {data && data.map((project) => (
                        <MangeEmloyeeCard
                            key={project.staffId}
                            staffId={project.staffId}
                            firstName={project.firstName}
                            email={project.email}
                            phoneNo={project.phoneNo}
                            imgSrc={project.imgSrc}
                        />
                    ))}


            
            </Wrapper>
        </MangeProjectPage>


        <OverlayDiv2 className={showUpdateForm ? 'show': ''}>
        <Form onSubmit={handleSubmit(onSubmit)}>

        <FormHeadingWrapper>
                <ImageWrapper>
                    <AdminImage src={placeHoderImage} alt=''/>
                    <EditBtnWrapper>
                        <EditBtn><MdModeEditOutline style={{'font-size': '16px'}} /></EditBtn>
                    </EditBtnWrapper>
                </ImageWrapper>

            </FormHeadingWrapper>

        <InputFormWrapperParent>
        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">First Name</Label>
        <Input type='text' placeholder='Enter your first name' {...register("title")} />
        <Span>{errors.title?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">E-mail Address </Label>
        <Input type='email' placeholder='Enter your e-mail' {...register("id")} />
        <Span>{errors.id?.message}</Span>
        </InputWrapper>
        
        <InputWrapper>
        <Label htmlFor="">New Password</Label>
        <Input type='clender' placeholder='Enter your new password' {...register("date")}/>
        <AiFillEyeInvisible style={{ position: 'absolute', right: 0, bottom: 17, color:'#6B7280' }} />
        <Span>{errors.date?.message}</Span>
        </InputWrapper>
        </InputformWrapper>

        <InputformWrapper>

        <InputWrapper>
        <Label htmlFor="">Last Name</Label>
        <Input type='text' placeholder='Enter your last name' {...register("description")} />
        <Span>{errors.description?.message}</Span>
        </InputWrapper>
        
        <InputWrapper>
        <Label htmlFor="">Phone Number</Label>
        <Input type='text' placeholder='Enter Phone Number' {...register("description")} />
        <Span>{errors.description?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">Confirm New Password</Label>
        <Input type='clender' placeholder='Confirm your new password' {...register("date")}/>
        <AiFillEyeInvisible style={{ position: 'absolute', right: 0, bottom: 17, color:'#6B7280' }} />
        <Span>{errors.date?.message}</Span>
        </InputWrapper>

        </InputformWrapper>
        </InputFormWrapperParent>

        <FormWrapperBtns>
            <ButtonSky100 onClick={confarimationHandleCancel}>Cancel</ButtonSky100>
            <ButtonSky400  type='submit'>Save</ButtonSky400>
        </FormWrapperBtns>

        <ConFarimationBox className={cancel? "show":""}>
        <Header2confirmation>Are you sure you want cancel Update</Header2confirmation>
        <ConfimationBtnsWrapper>
            <ButtonSky400  type='submit' onClick={confarimationHandleCancel}>No</ButtonSky400>
            <ButtonSky100 onClick={handleclickUpdateForm}>Yes</ButtonSky100>
        </ConfimationBtnsWrapper>
        </ConFarimationBox>
        </Form>
        </OverlayDiv2>

    </AdminManageEmployees>
)
}

export default ManageEmployees