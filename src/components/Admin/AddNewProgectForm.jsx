import React from 'react'
import styled from 'styled-components'

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    gray500: '#6B7280',
    gray800: '#1F2937'
};
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const FormsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`
const FormWrapper = styled.div`
    
` 
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`
const Label = styled.label`
    font-weight: 500;
    font-size: 24px;
    color: ${theme.gray800};
    
`
const Input = styled.input`
    border: none;
    border-bottom:1px solid ${theme.gray500};
    background-color: transparent;
`
const AddNewProgectForm = () => {
  return (
    <Wrapper>
        <FormsWrapper>
            <FormWrapper>
                <InputWrapper>
                <Label>Title</Label>
                <Input placeholder='Enter your Title '  />
                </InputWrapper>

                <InputWrapper>
                <Label>Manager ID</Label>
                <Input placeholder='Enter your  User ID '  />
                </InputWrapper>
            </FormWrapper>

            <FormWrapper>
                <InputWrapper>
                <Label>Deadline</Label>
                <Input placeholder='....\....\....'  />
                </InputWrapper>

                <InputWrapper>
                <Label>Description</Label>
                <Input placeholder='Enter your Description'  />
                </InputWrapper>
            </FormWrapper>
        </FormsWrapper>
    </Wrapper>
  )
}

export default AddNewProgectForm