import React from "react";
import {
    Head,
    HeaderMenu,
    HeaderName,
    MenuItem,
    MenuItemSelected,
} from "./styles";
import { FaHome, FaAppleAlt } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { AiOutlineClear, AiFillTool } from "react-icons/ai";

export default function Header() {
    return (
        <Head>
            <HeaderName>CCExtra</HeaderName>
            <HeaderMenu>
                <MenuItem>
                    <FaHome />
                    Menu
                </MenuItem>
                <MenuItemSelected>
                    <FaAppleAlt />
                    Alimentos
                </MenuItemSelected>
                <MenuItem>
                    <MdLocalDrink />
                    Bebidas
                </MenuItem>
                <MenuItem>
                    <AiOutlineClear />
                    Limpeza
                </MenuItem>
                <MenuItem>
                    <AiFillTool />
                    Casa
                </MenuItem>
            </HeaderMenu>
        </Head>
    );
}
