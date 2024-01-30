import React, { useRef } from 'react'
import PMMangeProjectCard from './PMMangeProjectCard'
import PMManageProjectHeader from './PMManageProjectHeader'
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
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
const PMManageProjectMangeSetting = () => {
    const searchElement = useRef(null);

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        // Handle search logic
        console.log('Search:', searchElement.current.value);
    };

    return (
        <MangeProjectPage>
            <HeaderPage>
                <PageHeading2>Manage Project</PageHeading2>
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
            </HeaderPage>
            <PageContentWrapper>
                <PMManageProjectHeader />
                
                <PMMangeProjectCard />
                <PMMangeProjectCard />
                <PMMangeProjectCard />
                <PMMangeProjectCard />
                <PMMangeProjectCard />
            </PageContentWrapper>
        </MangeProjectPage>
)
}

export default PMManageProjectMangeSetting