import styled from "styled-components";

export const StyledHeader = styled.header`
 background-color: ${({theme}) => theme.colors.header};
 padding: 40px 0;




`



//Method one
// background-color: #ebfbff;
// padding: 40px 0;

// h1{
//     color: red;
//  }

//  &:hover {
//     background-color: black;

//To use props method 1
// background-color: ${(props) => props.bg};

//To use props method 2
//background-color: ${({bg}) => bg}; ->using destruction of props