import React, { useRef } from 'react'
import PMManageProjectHeader from './PMManageProjectHeader'
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
import PMMAngeProjectCardUpdate from './PMMAngeProjectCardUpdate';
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

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
    padding-left: 55px;
    padding-right: 55px;
    padding-top: 13px;
    height: 100vh;
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

const PMProjectPageSetting = () => {

    const searchElement = useRef(null);

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        // Handle search logic
        console.log('Search:', searchElement.current.value);
    };

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
                <Button>Add New Task</Button>
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
        </MangeProjectPage>
  )
}

export default PMProjectPageSetting