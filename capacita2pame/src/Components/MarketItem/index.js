import React from "react";
import { ActualItem, Item } from "./styles";

export default function MarketItem({ item }) {
    return (
        <ActualItem>
            <Item>Nome: {item.nome}</Item>
            <Item>Preço: R${item.preco}</Item>
            <Item>Quantidade: {item.quantidade} unidade(s)</Item>
        </ActualItem>
    );
}
