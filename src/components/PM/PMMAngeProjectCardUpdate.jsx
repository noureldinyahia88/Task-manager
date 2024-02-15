import React, { useState } from 'react'
import styled from 'styled-components'
import manger from '../../img/manger.png'
import adminImg from '../../img/adminpng.png'
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

const ButtonSetting = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.fontColor};
    font-weight: 600;
    font-size: 20px;
    background-color: #0EA5E9;
    width: 104px;
    height: 40px;
    border-radius: 0 10px 10px 10px;
    padding: 12px;
    display: flex;
    align-items: center;
`

const MangeProjectHeader = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.white};
    border-radius: 10px;
    padding: 10px;
    margin-top:30px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: "Roboto Condensed", sans-serif;
    

    &:hover{
        background-color: ${theme.blue700};
        color: ${theme.white};
        ${ButtonSetting} {
            color: ${theme.white};
        }
    }

`
const HeaderTitle = styled.h3`
    font-weight: blod;
    font-size: 13px;
    color: ${theme.gray700};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
const MangeWrapper = styled.div`
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
/* **************Update Form****************** */
const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.white};
    width: 1130px;
    height: 685px;
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
    border-bottom: 2px solid  ${theme.inputColor};
    background-color: transparent;
    font-size: 20px;
    color: ${theme.gray500};
    padding: 7px;

    &:focus {
        outline: none;
    }
`
const StyledDatePicker = styled(DatePicker)`
    border: none;
    border-bottom: 2px solid  ${theme.inputColor};
    background-color: transparent;
    font-size: 20px;
    color: ${theme.gray500};
    padding: 7px;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

const FormWrapperBtns = styled.div`
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

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    position: relative;
`
const Span = styled.span`
    color: #EF4444;
    font-weight: 600;
    font-size: 16px;
`

// ********ConFarimation Box Setting**************

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
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    z-index: 100;
`
// ConFarimationBox Cancel
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
    bottom: 33px;
    right: 31px;
    z-index: 200;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &.show{
        display: flex;
    }
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


const PMMAngeProjectCardUpdate = ({id, title, email, phoneNo, imgSrc, lastNa, onClick}) => {

    //React Hook Form

    const { register, handleSubmit, formState: { errors } } = useForm();


    const [choose, setChoose] = useState(false) 
    const [showUpdateForm, setUpdateFrom] = useState(false)
    const [cancel, setCancel] = useState(false)


    const handleClick = () => {
        // setProjectId(id)
        setChoose(!choose)
        // onClick(id);
    }

    const confarimationHandleCancel = () => {
        setCancel(!cancel)
    }

// clicked projectCard ID state
    // const [projectId, setProjectId] = useState()
    // const handleClick = () => {
    //     setProjectId(id)
    //     setChoose(!choose)
    //     onClick(id);
    // }

    const handleclickUpdateForm = () => {
        setUpdateFrom(!showUpdateForm)
        setChoose(false)
    }

    // const [cancel, setCancel] = useState(false)
    // const confarimationHandleCancel = () => {
    //     setCancel(!cancel)
    // }


    // update admin
    // const { mutate: updateMutate  } = useMutation({
    //     mutationFn: updateAdmin,
    // })

    function handleSubmitUpdate(formData) {
        // updateMutate({id: projectId, 
        //     firstName: formData.fristName,
        //     email: formData.email,
        //     password: formData.pass,
        //     lastName: formData.lastName
        // })
        setUpdateFrom(!showUpdateForm)
        setChoose(false)
    }

        // *******
// post data
const [post, setPost] = useState({
    title: '',
    description: '',
    id: '',
    deadLine: '',
});

const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
};

const handlePost = async (event) => {
    event.preventDefault();
    console.log(post);
    try {
        const response = await axios.post(
            'http://3.126.203.127:8084/managers',
            post,
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
    handleclickUpdateForm()
    
};

    return (
        <MangeProjectHeader>
        <HeaderTitle>#{id}</HeaderTitle>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderTitle>lorem ipsum...</HeaderTitle>
        <HeaderTitle><img src={manger} alt="" /> managerName</HeaderTitle>
        <HeaderTitle>Done</HeaderTitle>
        <HeaderTitle>9 \ 5 \ 2023</HeaderTitle>
    
        <MangeWrapper>
            <ButtonSetting onClick={handleclickUpdateForm}>Update</ButtonSetting>
        </MangeWrapper>


        <OverlayDiv2 className={showUpdateForm ? 'show': ''}>
        <Form onSubmit={handleSubmit(handlePost)}>

        <FormHeading2>Update Task</FormHeading2>

        <InputFormWrapperParent>
        <InputformWrapper>
        <InputWrapper>
        <Label htmlFor="">Title</Label>
        <Input type="text" placeholder='First Task' name='title' id='title' {...register('title', { required: 'title is required' })} onChange={handleInput}  value={post.title} />
        <Span>{errors.title?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="">Description</Label>
        <Input type="text" placeholder='This is the first task' name='description' id='description' {...register('description', { required: 'description is required' })} onChange={handleInput} value={post.description} />
        <Span>{errors.description?.message}</Span>
        </InputWrapper>
        
        </InputformWrapper>

        <InputformWrapper>
        
        <InputWrapper>
        <Label htmlFor="">employee ID</Label>
        <Input type='number' placeholder='123' name='ID' id='ID' {...register('id', { required: 'ID is required' })} onChange={handleInput} value={post.id} />
        <Span>{errors.id?.message}</Span>
        </InputWrapper>

        <InputWrapper>
        <Label htmlFor="deadLine">DeadLine</Label>
    <StyledDatePicker
    selected={post.deadLine ? new Date(post.deadLine) : null}
    onChange={(date) => handleInput({ target: { name: 'deadLine', value: date } })}
    dateFormat="MM/dd/yyyy"
    placeholderText="8/12/2023"
    name="deadLine"
    id="deadLine"
    {...register('deadLine', { required: 'DeadLine is required' })}
    />
    {/* <AiFillEyeInvisible style={{ position: 'absolute', right: 0, bottom: 17, color:'#6B7280' }} /> */}
    <Span>{errors.deadLine?.message}</Span>
        </InputWrapper>

        </InputformWrapper>
        </InputFormWrapperParent>

        <FormWrapperBtns>
            <ButtonSky100  type="submit" >Finish</ButtonSky100>
            <ButtonSky100 type="reset" onClick={confarimationHandleCancel}>Cancel</ButtonSky100>
        </FormWrapperBtns>

        {/* confirm cancel */}
        <ConFarimationBox className={cancel? "show":""}>
        <Header2confirmation>Are you sure you want cancel Update</Header2confirmation>
        <ConfimationBtnsWrapper>
            <ButtonSky100 type="reset" onClick={handleclickUpdateForm}>Yes</ButtonSky100>
            <ButtonSky100 type="reset"  onClick={confarimationHandleCancel}>No</ButtonSky100>
        </ConfimationBtnsWrapper>
        </ConFarimationBox>
        {/* End Of confirm cancel */}
        </Form>
        </OverlayDiv2>
    </MangeProjectHeader>
)
}

export default PMMAngeProjectCardUpdate