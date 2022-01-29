import React from "react";
import { Container, Title } from "./styles";

interface HeaderProps {
    titlePage: string
}

export function Header({ titlePage }: HeaderProps) {
    return(
        <Container>
            <Title>{titlePage}</Title>
        </Container>
    )
}