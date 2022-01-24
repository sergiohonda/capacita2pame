import styled from "styled-components";

export const Container = styled.div`
    padding-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 6vh;
`;

export const ContainerName = styled.h1`
    color: cornflowerblue;
    border-bottom: 1px solid yellowgreen;
`;

export const ContainerContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 2vh;
`;

export const MarketList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
`;

export const Input = styled.input`
    width: 20vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: goldenrod;
    font-size: large;
    padding-left: 10px;
    padding-right: 10px;
`;

export const QuantityInput = styled.div`
    display: flex;
    width: 20vw;
    gap: 2vw;
    align-items: center;
`;

export const Quantity = styled.p`
    font-weight: bold;
    color: goldenrod;
`;

export const QuantityButton = styled.button`
    background-color: cornflowerblue;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 3px;
    border-radius: 100%;
`;

export const ResetButton = styled.button`
    background-color: ${(props) =>
        props.disabled ? "crimson" : "cornflowerblue"};
    color: white;
    border: none;
    cursor: pointer;
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    font-size: large;
    font-weight: bold;
`;
