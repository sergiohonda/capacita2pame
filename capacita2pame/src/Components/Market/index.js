import React, { useEffect, useState } from "react";
import {
    Container,
    ContainerName,
    ContainerContent,
    MarketList,
    Input,
    QuantityInput,
    Quantity,
    Button,
    ResetButton,
} from "./styles";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import MarketItem from "../MarketItem";

export default function Market() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [actualItem, setActualItem] = useState({});

    function Increment() {
        setQuantity(quantity + 1);
    }

    function Decrement() {
        if (quantity === 0) {
            console.log("Não é possível decrementar mais a função");
        } else {
            setQuantity(quantity - 1);
        }
    }

    function Reset() {
        setName("");
        setPrice("");
        setQuantity(0);
        setActualItem({});
    }

    useEffect(() => {
        setActualItem({
            nome: name,
            preco: price,
            quantidade: quantity,
        });
    }, [name, price, quantity]);

    return (
        <Container>
            <ContainerName>Mercado</ContainerName>
            <ContainerContent>
                <MarketList>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                    />
                    <Input
                        placeholder="Preço"
                        value={price}
                        onChange={(event) => setPrice(event.currentTarget.value)}
                    />
                    <QuantityInput>
                        <Quantity>{quantity} unidade(s)</Quantity>
                        <Button onClick={Increment}>
                            <AiOutlinePlusCircle size="30px" />
                        </Button>
                        <Button onClick={Decrement}>
                            <AiOutlineMinusCircle size="30px" />
                        </Button>
                    </QuantityInput>
                    <ResetButton onClick={Reset}>Reset</ResetButton>
                </MarketList>
                <MarketItem item={actualItem} />
            </ContainerContent>
        </Container>
    );
}
