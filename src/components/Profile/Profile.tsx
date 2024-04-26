import { styled } from "styled-components";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <ProfileStyled>
            <div>
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <MyPosts/>
        </ProfileStyled>
    )
};

const ProfileStyled = styled.div`
    
    
    img {
        
        height: 300px;
    }
`