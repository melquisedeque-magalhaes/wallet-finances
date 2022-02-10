import React, { ReactNode } from "react";
import { LabelStyles } from "./styles";

interface LabelProps {
    children: ReactNode;
}

export function Label({ children }: LabelProps) {
    return(
        <LabelStyles>{children}</LabelStyles>
    )
}