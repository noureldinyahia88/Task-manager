import React, { useState } from 'react'
import styled from 'styled-components'
import AdminSidebar from '../../components/Admin/AdminSidebar'

import ManageAdminHeaderpage from '../../components/Admin/ManageAdminHeaderpage';
import ManageAdminCard from '../../components/Admin/ManageAdminCard';
import { IoMdSearch } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";

import { useForm } from 'react-hook-form';

import { MdModeEditOutline } from "react-icons/md";
import placeHoderImage from '../../img/placeholder.png';
import { fetchAdmins } from '../../components/Uitily/http/AdminApi/ManageAdminsApi';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



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

const Form = styled.form`
    padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    background-color: #F9FAFB;
    width: 1130px;
    border-radius: 40px;
    gap: 20px;
    position: relative;
`
const FormHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 70px;
`

const AdminImage = styled.img`
    border-radius: 50%;
`


const InputFormWrapperParent = styled.div`
        display: flex;
    justify-content: center;
    gap: inherit;
    width: 100%;
`
const InputformWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 90px;
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
    /* background-color: #D1D5DB; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const EditBtnWrapper = styled.div`
    position: relative;
    background-color: #F3F4F6;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    right: 24px;
    bottom: -42px;
    padding: 4px;
    display: grid;
    place-items: center;
    cursor: pointer;
`
const EditBtn = styled.input`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: transparent;
    position: absolute;
    left: -10px;
    opacity: 0;
    
`

const OptionsWrapperParent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    width: 50%;
`
const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;

`
const RatioInput = styled.input`
    width: 24px;
    height: 24px;

    border: 1px solid ${theme.gray500};

    &:focus{
        outline: none;
    }
`
const LabelForRatio = styled.label`
    color: ${theme.gray500};
    font-size: 16px;
    margin-top: 6px;
    margin-left: 10px;
`

// *******************uploud btn****************
const UploudImage = styled.div`
        width: 617px;
    height: 230px;
    background-color: #F9FAFB;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 0;
    margin: 0 auto;
    right: 0;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    padding: 5px;
`
const BoxHeader = styled.div`
    border-bottom: 1px solid #000000;
`
const HeaderH2 = styled.h2`
    font-size: 49px;
    color: #1F2937;
    font-weight: 600;
    margin: 15px;
`
const UpoudBtnWrapper = styled.div``
const BoxP = styled.p`
    color: #9CA3AF;
    font-size: 24px;
    font-weight: 500;
`

const ManageAdmins = () => {
    //React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    //End of React Hook Form



    const [showUpdateForm, setUpdateFrom] = useState(false)
    const [cancel, setCancel] = useState(false)

    const handleclickUpdateForm = () => {
        setUpdateFrom(!showUpdateForm)
        setCancel(false)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 1000);
    }

    // for confirmation function
    
    const confarimationHandleCancel = () => {
        setCancel(!cancel)
    }

    const { data, isLoading, isError, error  }  = useQuery({
        queryKey: ['admins'],
        queryFn: () => fetchAdmins(),
        staleTime: 5000,
    })

    console.log(data)

    // *********************search*****************
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Implement your search logic here
        const filteredResults = data.filter(
            (project) =>
                String(project.staffId) === searchInput ||
                project.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                project.email.toLowerCase().includes(searchInput.toLowerCase())
        );
    
        setSearchResults(filteredResults);
    };

    const handleInputSearch = (event) => {
        setSearchInput(event.target.value);
    };

    
    // ****************update**********
    const [post, setPost] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNo: '',
        global: '',
        img:null,
    });

    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };
    const handleInputImage = (event) => {
        setPost({ ...post, [event.target.name]: event.target.files[0] });
    };
    const handleAdminTypeChange = (event) => {
        const { name, value } = event.target;
    
    // Update global property based on adminType value
    const globalValue = value === 'global' ? 'true' : 'false';

    setPost((prevPost) => ({
        ...prevPost,
        [name]: value,
        global: globalValue,
    }));

    };

    const handlePost = async (e) => {
        // e.preventDefault();
        // Create a FormData object
        const formData = new FormData();

        // Append the file to the FormData object
        formData.append('img', post.img);

        // Append the rest of the data to the FormData object
        formData.append('firstName', post.firstName);
        formData.append('lastName', post.lastName);
        formData.append('email', post.email);
        formData.append('password', post.password);
        formData.append('global', post.global);
        formData.append('phoneNo', post.phoneNo);

        try {
            const response = await axios.post(
            `http://3.126.203.127:8084/admins`,
            formData,
            {
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
                },
            }
            );

            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
            console.log(post);
            handleclickUpdateForm()
};


    

    return (
    <ManageAdminsWrapper>
        <AdminSidebar />
        <MangeProjectPage>
            <Header2>Manage Admins</Header2>

            <Wrapper >
                
                <ManageProjectsInputs>
                <Button className='blueBtn' onClick={handleclickUpdateForm}>Add New Admin</Button>
                    <FormWrapper>
                    <InputSearch type="text" className="mangeProjectSearch" placeholder='Search by ID or e-mail' value={searchInput} onChange={handleInputSearch} />
                    <SearchBtn onClick={handleSearch} type="submit" className="searchButton"><IoMdSearch style={{'fontSize':'20px'}} /></SearchBtn>
                    </FormWrapper>
                </ManageProjectsInputs>

            <ManageAdminHeaderpage />


{searchResults.length > 0 && (
                <Wrapper>
                    {searchResults.map((project) => (
                        <ManageAdminCard
                        key={project.staffId}
                        id={project.staffId}
                        staffId={project.staffId}
                        firstName={project.firstName}
                        email={project.email}
                        startDate={project.startDate}
                        phoneNo={project.phoneNo}
                        imgSrc={project.imgSrc}
                        onClick={(projectId) => console.log(projectId)}
                    />
                    ))}
                </Wrapper>
            )}
                    
                     {/* Display all data if no search or if search results are empty */}
            {!searchResults.length && (
                <Wrapper>
                    {isLoading && <h2>Loading...</h2>}
                    {isError && <h2>Error: {error.info?.message || 'Failed to fetch Projects.'}</h2>}
                    {data &&
                        data.map((project) => (
                            <ManageAdminCard
                            key={project.staffId}
                            id={project.staffId}
                            staffId={project.staffId}
                            firstName={project.firstName}
                            email={project.email}
                            startDate={project.startDate}
                            phoneNo={project.phoneNo}
                            imgSrc={project.imgSrc}
                            onClick={(projectId) => console.log(projectId)}
                        />
                        ))}
                </Wrapper>
            )}
            
            </Wrapper>
        </MangeProjectPage>

        <OverlayDiv2 className={showUpdateForm ? 'show': ''}>
        <Form onSubmit={handlePost}>

        <InputFormWrapperParent>
        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">First Name</Label>
        <Input type="text" placeholder='Enter your first name' name='firstName' id='firstName' {...register('firstName', { required: 'First name is required' })} onChange={handleInput}  value={post.firstName} />
        <Span>{errors.firstName?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">E-mail Address </Label>
        <Input type="text" placeholder='Enter your e-mail' id='email' name='email'  {...register('email', { required: 'email is required' })} onChange={handleInput} value={post.email} />
        <Span>{errors.email?.message}</Span>
        </InputWrapper>
        
        <InputWrapper>
        <Label htmlFor="">New Password</Label>
        <Input type="text" placeholder='Enter your new password' id='password' name='password' {...register('password', { required: 'password is required' })} onChange={handleInput}  value={post.password}/>
        <AiFillEyeInvisible style={{ position: 'absolute', right: 0, bottom: 17, color:'#6B7280' }} />
        <Span>{errors.password?.message}</Span>
        </InputWrapper>
        <FormHeadingWrapper>

        <OptionsWrapperParent>
        <Label>Select Admin Type</Label>

        <OptionsWrapper>
          <RatioInput
            type="radio"
            {...register('adminType', { required: 'Admin Type is required' })}
            value="global"
            checked={post.adminType  === 'global'}
            onChange={handleAdminTypeChange}
          />
          <LabelForRatio htmlFor="global">Global</LabelForRatio>
        </OptionsWrapper>

        <OptionsWrapper>
          <RatioInput
            type="radio"
            {...register('adminType', { required: 'Admin Type is required' })}
            value="local"
            checked={post.adminType  === 'local'}
            onChange={handleAdminTypeChange}
          />
          <LabelForRatio htmlFor="local">Local</LabelForRatio>
        </OptionsWrapper>


        <Span>{errors.adminType?.message}</Span>
      </OptionsWrapperParent>


                <ImageWrapper>
                <AdminImage src={placeHoderImage} alt=''/>
                    <EditBtnWrapper>
                        <EditBtn type="file" name="img"  id="img" {...register('img', { required: 'photo is required' })} onChange={handleInputImage}   /><MdModeEditOutline style={{'font-size': '16px'}} />
                    </EditBtnWrapper>
                </ImageWrapper>

                {/* <UploudImage>
                    <BoxHeader><HeaderH2>Update profile Photo</HeaderH2></BoxHeader>
                    <UpoudBtnWrapper>
                        <BoxP>JPG or PNG no larger than 5 MB</BoxP>
                        <Input
  type="file"
  name="img"
  id="img"
  {...register('img', { required: 'photo is required' })}
  onChange={handleInputImage}
  style={{
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '4px',
    marginTop: '8px',
    width: '200px',  // Adjust the width as needed
  }}
/>
                    </UpoudBtnWrapper>
                </UploudImage> */}
            </FormHeadingWrapper>
        </InputformWrapper>

        <InputformWrapper>

        <InputWrapper>
        <Label htmlFor="">Last Name</Label>
        <Input type="text" placeholder='Enter your last name' id='lastName' name='lastName'{...register('lastName', { required: 'Last name is required' })} onChange={handleInput}  value={post.lastName} />
        <Span>{errors.lastName?.message}</Span>
        </InputWrapper>
        
        <InputWrapper>
        <Label htmlFor="">Phone Number</Label>
        <Input type="text" placeholder='Enter Phone Number' id='phoneNo' name='phoneNo' {...register('phoneNo', { required: 'phone Number is required' })} onChange={handleInput}  value={post.phoneNo} />
        <Span>{errors.phoneNo?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">Confirm New Password</Label>
        <Input type="text" placeholder='Confirm your new password' id='confirmPassUser' name='confirmPassUser' {...register("confirmPassUser")}/>
        <AiFillEyeInvisible style={{ position: 'absolute', right: 0, bottom: 17, color:'#6B7280' }} />
        <Span>{errors.password?.message}</Span>
        </InputWrapper>

        </InputformWrapper>
        </InputFormWrapperParent>

        <FormWrapperBtns>
            <ButtonSky100 type="reset" onClick={confarimationHandleCancel}>Cancel</ButtonSky100>
            <ButtonSky400 type="button"  onClick={handleSubmit(handlePost)}>Save</ButtonSky400>
        </FormWrapperBtns>

        <ConFarimationBox className={cancel? "show":""}>
        <Header2confirmation>Are you sure you want cancel Update</Header2confirmation>
        <ConfimationBtnsWrapper>
            <ButtonSky400  onClick={confarimationHandleCancel}>No</ButtonSky400>
            <ButtonSky100 type="reset" onClick={handleclickUpdateForm}>Yes</ButtonSky100>
        </ConfimationBtnsWrapper>
        </ConFarimationBox>
        </Form>
        </OverlayDiv2>

    </ManageAdminsWrapper>
)
}

export default ManageAdmins