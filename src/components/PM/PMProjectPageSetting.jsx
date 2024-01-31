import React, { useRef, useState } from 'react'
import PMManageProjectHeader from './PMManageProjectHeader'
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
import PMMAngeProjectCardUpdate from './PMMAngeProjectCardUpdate';
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import  * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    gray800: '#1F2937',
    sky900: '#0C4A6E',
    blue500: '#3B82F6'
};


const MangeProjectPage = styled.div`
    background-color: #7DD3FC;
    padding-left: 55px;
    padding-right: 55px;
    padding-top: 13px;
    height: 100%;
`;

const HeaderPage = styled.div`
    margin-bottom: 30px;
`;

const PageHeading2 = styled.h1`
    color: ${theme.sky900};
    font-weight: 600;
    font-size: 61px;
    margin: 0;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const ArrowBtn = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background-color: ${theme.white};
    display: grid;
    place-items: center;
    cursor: pointer;
`
const Button = styled.button`
    width: 50%;
    background-color: ${theme.white};
    padding: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    width: 195px;
`
const FormWrapper = styled.form`
    display: flex;
    align-items: center;
    width: 50%;
    margin-top: 17px;
`;

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
`;

const SearchBtn = styled.button`
    background-color: ${theme.blue500};
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: ${theme.fontColor};
    cursor: pointer;
`;

const PageContentWrapper = styled.div`
    
`;

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
    font-family: "Roboto Condensed", sans-serif;
`
const Label = styled.label`
    font-weight: bold;
    font-size: 24px;
    color: ${theme.gray800};
    
`
const Input = styled.input`
    
    border: none;
    border-bottom: 2px solid #9CA3AF;
    background-color: transparent;
    font-size: 20px;
    color: ${theme.gray500};
    padding: 7px;

    &:focus {
        outline: none;
    }
`

const FormWrapperBtns = styled.form`
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: flex;
    gap: 10px;
`
const FormHeading2 = styled.h2`
    
    font-weight: 600;
    color: ${theme.fontColor};
    font-size: 60px;
    margin: 0;
    border-bottom: 2px solid #9CA3AF;
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
    background-color: #38BDF8;
    color: ${theme.gray800};
    font-size: 20px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    z-index: 100;
    &.sky400{
        background-color: #E0F2FE;
    }
`

const PMProjectPageSetting = () => {

    //React Hook Form
    const validationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        id: yup.number().positive().integer().required("Please Enter a valid ID"),
        description: yup.string().required("Description is required"),
        date: yup.string().required("Please Enter a valid date")
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
    });

    const searchElement = useRef(null);

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        // Handle search logic
        console.log('Search:', searchElement.current.value);
    };

    // for confirmation function
    const [showUpdateForm, setUpdateFrom] = useState(false)
    const [cancel, setCancel] = useState(false)

    const confarimationHandleCancel = () => {
        setCancel(!cancel)
    }

    
    const handleclickUpdateForm = () => {
        setUpdateFrom(!showUpdateForm)
        setCancel(false)
    }

    // and new project project

    // const {mutate, isPending} = useMutation({
    //     mutationFn: createNewProject,
    //     onSuccess: () => {
    //         // to refatch the data
    //         queryClient.invalidateQueries({queryKey:['data']});
    //         console.log("sucsess");
    //         Navigate('/')
    //     }
    // })

    async function handleSubmitAddNewProject(formData){
//     mutate({
//         title: formData.title,
//         description: formData.description,
//         deadline: formData.date,
//         managerID: formData.id
// })
}
    return (
    <MangeProjectPage>
            <HeaderPage>
                <Wrapper>
                <PageHeading2>Manage Task</PageHeading2>
                <NavLink className="navLink" to="/manageProjectsPM" style={{ textDecoration: 'none' }}>
                <ArrowBtn><FaArrowLeft style={{ color: '#7dd3fc', fontSize: '33px' }} /></ArrowBtn>
                </NavLink>
                </Wrapper>
                <Wrapper>
                <FormWrapper>
                    <InputSearch
                        type="text"
                        className="manageProjectSearch"
                        placeholder='Search by ID or Name'
                        ref={searchElement}
                        />
                    <SearchBtn onClick={handleSubmitSearch} type="submit" className="searchButton">
                    <IoSearch />
                    </SearchBtn>
                </FormWrapper>
                <Button onClick={handleclickUpdateForm}>Add New Task</Button>
                </Wrapper>
            </HeaderPage>
            <PageContentWrapper>
                <PMManageProjectHeader />
                
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
                <PMMAngeProjectCardUpdate />
            </PageContentWrapper>

            {/* ********************Add New Project form************** */}
        <OverlayDiv2 className={showUpdateForm ? 'show': ''}>
        <Form onSubmit={handleSubmit(handleSubmitAddNewProject)}>
        <FormHeading2>ADD Task</FormHeading2>

        <InputFormWrapperParent>
        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">Title</Label>
        <Input type='text' placeholder='First Task' name='title' id='title' {...register("title")} />
        <Span>{errors.title?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">Description</Label>
        <Input type='number' placeholder='This is the first task' name='id' id='id' {...register("id")}/>
        <Span>{errors.id?.message}</Span>
        </InputWrapper>
        
        </InputformWrapper>

        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">employee ID</Label>
        <Input type='number' placeholder='123' name='date' id='date' {...register("date")} />
        <Span>{errors.date?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">DeadLine</Label>
        <Input type='text' placeholder='8/12/2023' name='description' id='description' {...register("description")} />
        <Span>{errors.description?.message}</Span>
        </InputWrapper>
        
        </InputformWrapper>

        {/* {isError &&(
        <ErrorBlock title="Failed to create new project" message={error.info?.message || 
            'faild to create project. please try again later.'} />
        )} */}
        </InputFormWrapperParent>

                        {/* {isPending && 'Submitting...'} */}
                        
                            <FormWrapperBtns>
                            <ButtonSky400 type="submit">Finish</ButtonSky400>
                            <ButtonSky400  type="reset" onClick={confarimationHandleCancel}>Cancel</ButtonSky400>
                        </FormWrapperBtns>
                    
    

            <ConFarimationBox className={cancel? "show":""}>
                <Header2confirmation>Are you sure you want cancel</Header2confirmation>
                <ConfimationBtnsWrapper>
                    <ButtonSky400 onClick={handleclickUpdateForm}>Yes</ButtonSky400>
                    <ButtonSky400 className='sky400' type='reset' onClick={confarimationHandleCancel}>No</ButtonSky400>
                </ConfimationBtnsWrapper>
            </ConFarimationBox>
        </Form>
        </OverlayDiv2>
        </MangeProjectPage>
  )
}

export default PMProjectPageSetting