import styled from "styled-components";

export const AppWrapper = styled.div`
    width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
    "h h"
    "n c"
    ;

    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    /* grid-gap: 10px; */
`