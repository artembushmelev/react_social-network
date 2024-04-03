import { styled } from "styled-components";

export const Profile = () => {
    return (
        <ProfileStyled>
            <div>
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div>
            <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div>
               <div>My post</div> 
                <div>New Post</div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 1</div>
            </div>

        </ProfileStyled>
    )
};

const ProfileStyled = styled.div`
    grid-area: c;
    background-color: cornflowerblue;
    img {
        
        height: 300px;
    }
`