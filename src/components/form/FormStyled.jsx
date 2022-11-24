import styled from "@emotion/styled";

export const FormBox = styled.div`
padding: 16px;
width: 480px;
`;

export const ButtonAdd = styled.button`
min-width: 200px;
height: 40px;
font-size: 24px;
background-color:  #c77575;
color: #ffffff;
border: none;
border-radius: 4px;
&:hover,
&:focus {
    background-color: grey;
}
`;

export const LabelBox = styled.label`
font-size: 36px;
`;

export const InputBox = styled.input`
margin-left: 10px;
font-size: 34px;
outline: transparent;
border-radius: 4px;
&:focus,
&:hover {
    border-color: rgb(33, 150, 243);
}
`;