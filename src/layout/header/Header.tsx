import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/06/896/500/TESLA-LOGO.jpg?ve=1&tl=1" alt="" />
        </StyledHeader>
    )
};


const StyledHeader = styled.div`
    grid-area: h;
    background-color: green;

    img {
       width:20px ;
    }
`