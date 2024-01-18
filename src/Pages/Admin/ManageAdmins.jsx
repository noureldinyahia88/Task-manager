import React from 'react'
import styled from 'styled-components'
import AdminSidebar from '../../components/Admin/AdminSidebar'

import ManageAdminHeaderpage from '../../components/Admin/ManageAdminHeaderpage';
import ManageAdminCard from '../../components/Admin/ManageAdminCard';
import { IoMdSearch } from "react-icons/io";


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

const ManageAdminsWrapper = styled.div`
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
const WrapperChild = styled.div`
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

const ManageAdmins = () => {
    return (
    <ManageAdminsWrapper>
        <AdminSidebar />
        <MangeProjectPage>
            <Header2>Manage Admins</Header2>

            <Wrapper >
                
                <ManageProjectsInputs>
                <Button className='blueBtn'>Add New Admin</Button>
                    <FormWrapper>
                    <InputSearch type="text" className="mangeProjectSearch" placeholder='Search by ID or e-mail' />
                    <SearchBtn className="searchButton"><IoMdSearch style={{'fontSize':'20px'}} /></SearchBtn>
                    </FormWrapper>
                </ManageProjectsInputs>

            <ManageAdminHeaderpage />

            <ManageAdminCard />
            <ManageAdminCard />
            <ManageAdminCard />
            <ManageAdminCard />
            <ManageAdminCard />

            
            </Wrapper>
        </MangeProjectPage>
    </ManageAdminsWrapper>
)
}

export default ManageAdmins