import styled from "@emotion/styled";

export const FindBox = styled.div`
display: flex;
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