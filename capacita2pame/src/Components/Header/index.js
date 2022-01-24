import React from "react";
import { Head, HeaderMenu, HeaderName, MenuItem } from "./styles";
import { FaHome, FaAppleAlt } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { AiOutlineClear, AiFillTool } from "react-icons/ai";

export default function Header() {
    const itensMenu = [
        { nome: "Menu", icone: <FaHome /> },
        { nome: "Alimentos", icone: <FaAppleAlt /> },
        { nome: "Bebidas", icone: <MdLocalDrink /> },
        { nome: "Limpeza", icone: <AiOutlineClear /> },
        { nome: "Casa", icone: <AiFillTool /> },
    ];

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ));

    return (
        <Head>
            <HeaderName>CCExtra</HeaderName>
            <HeaderMenu>{renderList}</HeaderMenu>
        </Head>
    );
}
