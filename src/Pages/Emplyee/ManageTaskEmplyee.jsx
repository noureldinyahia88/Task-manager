import React, { useRef } from 'react';
import styled from 'styled-components';

import PMMangeProjectCard from '../../components/PM/PMMangeProjectCard';
import { IoSearch } from "react-icons/io5";
import SidebarEmlpoyee from '../../components/Employee/SidebarEmlpoyee';
import EmployeeHeader from '../../components/Employee/EmployeeHeader';
import EmplyeeManageTaskCard from '../../components/Employee/EmplyeeManageTaskCard';

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
    margin-bottom: 87px;
`;

const PageHeading2 = styled.h1`
    color: ${theme.sky900};
    font-weight: 600;
    font-size: 61px;
    margin-bottom: 87px;
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

const ManageTaskEmplyee = () => {

    const searchElement = useRef(null);

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        // Handle search logic
        console.log('Search:', searchElement.current.value);
    };

    return (
        <MangeProjectPagePMWrapper>
        <SidebarEmlpoyee />
        <MangeProjectPage>
            <HeaderPage>
                <PageHeading2>Manage Tasks</PageHeading2>
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
                <EmployeeHeader />
                
                <EmplyeeManageTaskCard />
                <EmplyeeManageTaskCard />
                <EmplyeeManageTaskCard />
                <EmplyeeManageTaskCard />
                <EmplyeeManageTaskCard />
            </PageContentWrapper>
        </MangeProjectPage>
    </MangeProjectPagePMWrapper>
)
}

export default ManageTaskEmplyee