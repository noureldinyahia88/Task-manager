import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import adminImg from '../../img/adminpng.png'

import { useForm } from 'react-hook-form';
import { MdModeEditOutline } from "react-icons/md";
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import SidebarEmlpoyee from '../../components/Employee/SidebarEmlpoyee';
import SidebarPM from '../../components/PM/SidebarPM';



const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    sky900: '#0C4A6E',
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
const MyAcountPageWarpper = styled.div`
    width: 100%;
    background-color: ${theme.blue400};
    border-radius: 30px;
    padding: 20px 60px 20px 60px;
`
const MangeProjectPage = styled.div`
    margin-bottom: 50px;
`
const Header2 = styled.h2`
    font-weight: 600;
    color: #0c4a6e;
    font-size: 60px;
    margin: 0;
`


const ManageProjectsInputs = styled.div`
    
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
`

const Form = styled.form`
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    gap: 20px;
    position: relative;
`
const FormHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.inputColor};
    padding-bottom: 15px;
    /* gap: 20px; */
    margin-bottom: 70px;
`
const AdminImage = styled.img`
    border-radius: 50%;
`
const AdminheaderDeatials = styled.div`
    color: ${theme.sky900Color};
`

const FormHeading2 = styled.h2`
    font-weight: 400;
    color: ${theme.sky900};
    font-size: 49px;
    margin: 0;
    width: 1130px;
`
const AdminId = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: ${theme.sky900};
    margin: 0;
`

const InputFormWrapperParent = styled.div`
    display: flex;
    justify-content: center;
    gap: inherit;
    width: 100%;
    margin-bottom: 60px;
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

const FormWrapperBtns = styled.div`
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: flex;
    gap: 10px;
`
// ******************* update form *********************
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

const FormUpdate = styled.form`
    padding: 40px;
    max-width: 1130px;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    gap: 20px;
    position: fixed;
    background-color: ${theme.white};
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

const Span = styled.span`
    color: red;

`
const ImageWrapper = styled.div`
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
    right: 34px;
    bottom: -18px;
    display: grid;
    place-items: center;
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


const MyAccountEmployee = () => {

    const [name, setName] = useState()
    const [imgeProfile, setImageProifile] = useState()
    const [sub, setSub] = useState()

    useEffect(() => {
    setName(jwtDecode(localStorage.getItem('token')).name)
    setImageProifile(jwtDecode(localStorage.getItem('token')).image)
    setSub(jwtDecode(localStorage.getItem('token')).sub)
    }, [name,imgeProfile,sub])

    //React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();
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
    

    const [post, setPost] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNo: '',
        // img:null,
    });
    

    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };
    const handleInputImage = (event) => {
        setPost({ ...post, [event.target.name]: event.target.files[0] });
    };

    const handlePost = async (event, id) => {
        event.preventDefault();
        // Create a FormData object
  const formData = new FormData();

  // Append the file to the FormData object
//   formData.append('img', post.img);

  // Append the rest of the data to the FormData object
  formData.append('firstName', post.firstName);
  formData.append('lastName', post.lastName);
  formData.append('email', post.email);
  formData.append('password', post.password);
  formData.append('phoneNo', post.phoneNo);

  try {
    const response = await axios.put(
      `http://3.126.203.127:8084/managers/${id}`,
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

//   setProjectId(staffId);
//   onClick(sub);

  console.log(post);
    };

    return (
        <ManageAdminsWrapper>
        <SidebarEmlpoyee />
        <MyAcountPageWarpper>
        <MangeProjectPage>
            <Header2>My Profile</Header2>
        </MangeProjectPage>

        <Form  onSubmit={(e) => handlePost(e, sub)}>

        <FormHeadingWrapper>
                <ImageWrapper>
                    <AdminImage src={adminImg} alt=''/>
                    <EditBtnWrapper>
                        <EditBtn type="file" name="img"  id="img" {...register('img', { required: 'photo is required' })} onChange={handleInputImage} /><MdModeEditOutline style={{'font-size': '16px'}} />
                    </EditBtnWrapper>
                </ImageWrapper>

                <AdminheaderDeatials>
            <FormHeading2>{name}</FormHeading2>
            <AdminId>ID: #{sub}</AdminId>
                </AdminheaderDeatials>
            </FormHeadingWrapper>

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
        <Label htmlFor="">Password</Label>
        <Input type="text" placeholder='Enter your new password' id='password' name='password' {...register('password', { required: 'password is required' })} onChange={handleInput}  value={post.password} />
        <Span>{errors.password?.message}</Span>
        </InputWrapper>

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

        </InputformWrapper>

        </InputFormWrapperParent>
                <ManageProjectsInputs>
                <Button className='blueBtn' type="button" onClick={handleSubmit((e) => handlePost(e, sub))}>Save</Button>
                </ManageProjectsInputs>
        </Form>
        </MyAcountPageWarpper>
    
    </ManageAdminsWrapper>
)
}

export default MyAccountEmployee