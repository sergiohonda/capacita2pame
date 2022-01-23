import styled from "styled-components";

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 4%;
    padding-bottom: 2%;
    background-color: royalblue;
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: antiquewhite;
`;

export const HeaderMenu = styled.div`
    display: flex;
    gap: 5vh;
    padding-right: 3%;
`;

export const MenuItem = styled.h3`
    height: 5vh;
    cursor: pointer;
    &:hover {
        color: springgreen;
        border-bottom: 2px solid silver;
    }
`;

export const MenuItemSelected = styled.h3`
    height: 5vh;
    cursor: pointer;
    color: springgreen;
    border-bottom: 2px solid silver;
`;
