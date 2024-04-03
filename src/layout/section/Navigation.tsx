import { styled } from "styled-components";



export const Navigation = () => {
    return (
        <NavigationStyled>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </NavigationStyled>
    )
};

const NavigationStyled = styled.div`
    grid-area: n;
    background-color: burlywood;
    
`

// const