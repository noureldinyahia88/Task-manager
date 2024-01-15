import React from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminMangeProjectHeader from '../../components/Admin/AdminMangeProjectHeader'
import AdminProjectCard from '../../components/Admin/AdminProjectCard'
import styled from 'styled-components'
import AdminProjectSummery from '../../components/Admin/AdminProjectSummery'
import AddNewProgectForm from '../../components/Admin/AddNewProgectForm'

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    blue400: '#38BDF8',
    blue700: '#1D4ED8'
};

const MangeProjectWrapper = styled.div`
    display: flex;

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
//     AddNewProgectForm = styled.div`
//     display: none;
// `
const ManageProjects = () => {
    return (
    <MangeProjectWrapper>
        <AdminSidebar />
        <MangeProjectPage>
            <Header2>Manage Projects</Header2>

            <Wrapper>
                <AdminProjectSummery />
            <WrapperChild>
                <ManageProjectsInputs>
                    <FormWrapper>
                    <InputSearch type="text" className="mangeProjectSearch" placeholder='Search by ID or Title' />
                    <SearchBtn className="searchButton">Go</SearchBtn>
                    </FormWrapper>

                    <BtnsWrapper>
                        <Button>Generate Reports</Button>
                        <Button className='blueBtn' >Add New Projects</Button>
                    </BtnsWrapper>
                </ManageProjectsInputs>
            </WrapperChild>

            <AdminMangeProjectHeader />

            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />

            <AddNewProgectForm  />
            </Wrapper>
        </MangeProjectPage>
    </MangeProjectWrapper>
)
}

export default ManageProjects