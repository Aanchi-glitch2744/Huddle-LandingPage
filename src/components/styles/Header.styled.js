import styled from "styled-components";

export const StyledHeader = styled.header`
 background-color: ${({theme}) => theme.colors.header};
 padding: 40px 0;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
      }
`
export const Logo = styled.img`
    @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
`
export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
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