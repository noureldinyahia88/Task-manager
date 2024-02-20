import React, { useEffect, useRef, useState } from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminProjectCard from '../../components/Admin/AdminProjectCard'
import styled from 'styled-components'
import AdminProjectSummery from '../../components/Admin/AdminProjectSummery'
import { useForm } from 'react-hook-form';
import  * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { FaCalendarMinus } from "react-icons/fa6";
// import { useForm } from 'react-hook-form';

import AdminMangeHeader from '../../components/Admin/AdminMangeProjectHeader'

import { useQuery } from '@tanstack/react-query';
import { createNewProject, fetchEvent, queryClient } from '../../components/Uitily/http/http'

import { useMutation } from '@tanstack/react-query'





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

const MangeProjectWrapper = styled.div`
    display: flex;
    font-family: "Roboto Condensed", sans-serif;
`;
const MangeProjectPage = styled.div`
    width: 100%;
    background-color: ${theme.blue400};
    border-radius: 30px;
    padding: 20px 60px 20px 60px;
`
const Wrapper = styled.div`
    margin-top: 50px;

`
const WrapperChild = styled.div`
margin-top: 50px;
`

const ManageProjectsInputs = styled.div`
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    margin-bottom: 15px;
`

const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`
const InputSearch = styled.input`
    background-color: ${theme.white};
    width: 60%;
    border: none;
    height: 30px;
    padding: 5px;
    border-radius: 10px 0px 0px 10px;

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
const BtnsWrapper = styled.div`
    display: flex;
    width: 40%;
    gap: 50px;
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
    &.blueBtn{
    background-color: ${theme.blue700};
    color: ${theme.white};
    }
`
const Header2 = styled.h2`
    font-weight: 600;
    color: ${theme.white};
    font-size: 60px;
    margin: 0;
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

const FormWrapperBtns = styled.form`
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: flex;
    gap: 10px;
`
const FormHeading2 = styled.h2`
    
    font-weight: 600;
    color: transparent;
    font-size: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
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
const ErrorBlock = styled.div`
  
`
const Wapper = styled.div`
  /* height: 500px; */
    overflow-y: scroll;
    width: 100%;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`

const ManageProjects = () => {
    // React Hook Form

    const validationSchema = yup.object().shape({
        title: yup.string().required("Title is required"),
        id: yup.number().positive().integer().required("Please Enter a valid ID"),
        description: yup.string().required("Description is required"),
        date: yup.string().required("Please Enter a valid date")
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
    });
  
  
    const [showUpdateForm, setUpdateFrom] = useState(false);
    const [cancel, setCancel] = useState(false);
  
    const handleclickUpdateForm = () => {
      setUpdateFrom(!showUpdateForm);
      setCancel(false);
    };
  
    const confarimationHandleCancel = () => {
      setCancel(!cancel);
    };
  
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ['data'],
      queryFn: () => fetchEvent(),
      staleTime: 5000,
    });
  // add a new project
    const { mutate, isPending } = useMutation({
      mutationFn: createNewProject,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['data'] });
        console.log('success');
        handleclickUpdateForm()
      },
    });
  
    async function handleSubmitAddNewProject(formData) {
        try {
             await mutate({
              title: formData.title,
              description: formData.description,
              deadline: formData.date,
              managerID: formData.id,
            });
        } catch (error) {
            console.error('Mutation error:', error);
        }
     // Assuming 'result' contains the data from the mutation
    }

//   ****search*******
    // for search input***************************************
    const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  const { data: searchData, isPending: searchIsPending, isError: searchIsError, error: searchError } = useQuery({
    queryKey: ['data', { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvent({ signal, searchTerm }),
  });

  function handleSubmitSearch(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
    console.log('search');
}

useEffect(() => {
    // Fetch data based on the updated searchTerm
    // Ensure that the searchTerm is not an empty string before triggering the search
    if (searchTerm.trim() !== '') {
      // Fetch data here
    }
  }, [searchTerm]);
  
  let content;
  let adminProjectCardCount = 24;
  
  const foundedProject = searchData?.find(item => item.projectId === parseInt(searchTerm, 10));
  const foundedProjectTitle = searchData?.find(item => item.title === searchTerm);
  
  if (searchIsError) {
    content = <ErrorBlock title="An error occurred" message={searchError.info?.message || 'Failed to fetch events.'} />;
  } else if (foundedProject) {
    // If a project is found based on ID, display it
    content = (
      <AdminProjectCard
        key={foundedProject.projectId}
        id={foundedProject.projectId}
        title={foundedProject.title}
        description={foundedProject.description}
        deadline={foundedProject.deadline}
        progress={foundedProject.progress}
        managerName={foundedProject.managerName}
        managerImg={foundedProject.managerImg}
      />
    );
    
  } else if (foundedProjectTitle) {
    // If a project is found based on title, display it
    content = (
      <AdminProjectCard
        key={foundedProjectTitle.projectId}
        id={foundedProjectTitle.projectId}
        title={foundedProjectTitle.title}
        description={foundedProjectTitle.description}
        deadline={foundedProjectTitle.deadline}
        progress={foundedProjectTitle.progress}
        managerName={foundedProjectTitle.managerName}
        managerImg={foundedProjectTitle.managerImg}
      />
    );
  } else if (searchData) {
    // If no project is found but searchData exists, display the list of projects
    content = searchData.map((event) => (
        
      <AdminProjectCard
        key={event.projectId}
        id={event.projectId}
        title={event.title}
        description={event.description}
        deadline={event.deadline}
        progress={event.progress}
        managerName={event.managerName}
        managerImg={event.managerImg}
      />
    ));
  } else {
    // Display loading or error for initial load
    content = (
      <>
        {searchIsPending && <h2>Loading...</h2>}
        {searchIsError && <h2>Error: {searchError.info?.message || 'Failed to fetch Projects.'}</h2>}
      </>
    );
  }
    return (
      <MangeProjectWrapper>
        <AdminSidebar />
        <MangeProjectPage>
          <Header2>Manage Projects</Header2>
          <Wrapper>
            <AdminProjectSummery adminProjectCardCount={adminProjectCardCount} />

            <WrapperChild>
              <ManageProjectsInputs>
                <FormWrapper>
                  <InputSearch type="text" className="manageProjectSearch" placeholder="Search by ID or Title" ref={searchElement} />
                  <SearchBtn onClick={handleSubmitSearch} type="submit" className="searchButton">
                    Go
                  </SearchBtn>
                </FormWrapper>
                <BtnsWrapper>
                  <Button>Generate Reports</Button>
                  <Button className="blueBtn" onClick={handleclickUpdateForm}>
                    Add New Projects
                  </Button>
                </BtnsWrapper>
              </ManageProjectsInputs>
            </WrapperChild>

            <Wapper>
            <AdminMangeHeader />
            {content}
            </Wapper>

          </Wrapper>
  
          {/* Add New Project form */}
          <OverlayDiv2 className={showUpdateForm ? 'show' : ''}>
            <Form onSubmit={handleSubmitAddNewProject}>
              <FormHeading2>Add a new Project</FormHeading2>
  
              <InputFormWrapperParent>
                <InputformWrapper>
                  <InputWrapper>
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" placeholder="Enter your Title" name="title" id="title" {...register('title')} />
                    <Span>{errors.title?.message}</Span>
                  </InputWrapper>
  
                  <InputWrapper>
                    <Label htmlFor="id">Manager ID</Label>
                    <Input type="number" placeholder="Enter your User ID" name="id" id="id" {...register('id')} />
                    <Span>{errors.id?.message}</Span>
                  </InputWrapper>
                </InputformWrapper>
  
                <InputformWrapper>
                  <InputWrapper>
                    <Label htmlFor="date">Date</Label>
                    <Input type="text" placeholder="....\....\...." name="date" id="date" {...register('date')} />
                    <FaCalendarMinus style={{ position: 'absolute', right: 0, bottom: 17, color: '#0D1C2E' }} />
                    <Span>{errors.date?.message}</Span>
                  </InputWrapper>
  
                  <InputWrapper>
                    <Label htmlFor="description">Description</Label>
                    <Input type="text" placeholder="Enter your Description" name="description" id="description" {...register('description')} />
                    <Span>{errors.description?.message}</Span>
                  </InputWrapper>
                </InputformWrapper>
  
                {isError && (
                  <ErrorBlock
                    title="Failed to create new project"
                    message={error.info?.message || 'Failed to create a project. Please try again later.'}
                  />
                )}
              </InputFormWrapperParent>
  
              <FormWrapperBtns>
                <ButtonSky100 type="reset" onClick={confarimationHandleCancel}>
                  Cancel
                </ButtonSky100>
                <ButtonSky400 type="button" onClick={handleSubmit(handleSubmitAddNewProject)}>
                  Save
                </ButtonSky400>
              </FormWrapperBtns>
  
              <ConFarimationBox className={cancel ? 'show' : ''}>
                <Header2confirmation>Are you sure you want to cancel the update?</Header2confirmation>
                <ConfimationBtnsWrapper>
                  <ButtonSky400 onClick={confarimationHandleCancel}>No</ButtonSky400>
                  <ButtonSky100 type="reset" onClick={handleclickUpdateForm}>
                    Yes
                  </ButtonSky100>
                </ConfimationBtnsWrapper>
              </ConFarimationBox>
            </Form>
          </OverlayDiv2>
        </MangeProjectPage>
      </MangeProjectWrapper>
    );
  };
  
  export default ManageProjects;