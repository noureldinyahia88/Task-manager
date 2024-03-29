import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SidebarPM from '../../components/PM/SidebarPM';
import PMManageProjectHeader from '../../components/PM/PMManageProjectHeader';
import PMMangeProjectCard from '../../components/PM/PMMangeProjectCard';
import { IoSearch } from "react-icons/io5";
// import { useQuery } from 'react-query';
import { fetchProjects } from '../../components/Uitily/http/PMApi/GetProjects';
import { jwtDecode } from 'jwt-decode';
import { useQuery } from '@tanstack/react-query';
import {queryClient} from '../../components/Uitily/http/http'
import { useForm } from 'react-hook-form';


const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    gray800: '#1F2937',
    sky900: '#0C4A6E',
    blue500: '#3B82F6'
};

const MangeProjectPagePMWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

const MangeProjectPage = styled.div`
    background-color: #7DD3FC;
    width: 100%;
    padding-left: 55px;
    padding-right: 55px;
`;

const HeaderPage = styled.div`
    margin-bottom: 30px;
`;

const PageHeading2 = styled.h1`
    color: ${theme.sky900};
    font-weight: 600;
    font-size: 61px;
`;

const FormWrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
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
const Wrapper = styled.div``

const MangeProjectPagePM = () => {
    const searchElement = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitSearch = (e) => {
      e.preventDefault();
      // Handle search logic
      console.log('Search:', searchElement.current.value);
    };
  
    // get Projects
    

  const jwtToken = localStorage.getItem('token')

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchProjects( jwtToken),
  });
  console.log(data);


    // *********************search*****************
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Implement your search logic here
        const filteredResults = data.filter(
            (admin) =>
                String(admin.staffId) === searchInput ||
                admin.firstName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    const handleInputSearch = (event) => {
        setSearchInput(event.target.value);
    };

    

    return (
        <MangeProjectPagePMWrapper>
            <SidebarPM />
            <MangeProjectPage>
                <HeaderPage>
                    <PageHeading2>Manage Project</PageHeading2>
                    <FormWrapper>
                        <InputSearch
                            type="text" 
                            className="mangeProjectSearch" 
                            placeholder='Search by ID or Name' 
                            value={searchInput} 
                            onChange={handleInputSearch}
                        />
                        <SearchBtn  onClick={handleSearch} type="button" className="searchButton">
                            <IoSearch />
                        </SearchBtn>
                    </FormWrapper>
                </HeaderPage>
                <PageContentWrapper>
                    <PMManageProjectHeader />
                    {searchResults.length > 0 && (
                        <Wrapper>
                            {
                            searchResults.map((emloyee)=>(
                                <PMMangeProjectCard key={emloyee.staffId} 
                                id={emloyee.staffId}  
                                title={emloyee.firstName} 
                                email={emloyee.email} 
                                phoneNo={emloyee.phoneNo} 
                                imgSrc={emloyee.imgSrc} 
                                lastNa={emloyee.lastName} 
                                onClick={(id)=> console.log(id)}/>
                            ))
                    }
                        </Wrapper>
                    )}
                    {!searchResults.length && (
                        <Wrapper>
                            {
                                    data && data.map((emloyee)=>(
                                        <PMMangeProjectCard key={emloyee.staffId} 
                                        id={emloyee.staffId}  
                                        title={emloyee.firstName} 
                                        email={emloyee.email} 
                                        phoneNo={emloyee.phoneNo} 
                                        imgSrc={emloyee.imgSrc} 
                                        lastNa={emloyee.lastName} 
                                        onClick={(id)=> console.log(id)}/>
                                    ))
                            }
                        </Wrapper>
                    )}
                </PageContentWrapper>
            </MangeProjectPage>
        </MangeProjectPagePMWrapper>
    );
};

export default MangeProjectPagePM;
