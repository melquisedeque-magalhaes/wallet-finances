import React from "react"
import { Ionicons } from '@expo/vector-icons';
import { Button } from "./styles"

interface ButtonAddProps {
    setModalVisible: (state: boolean) => void
}

export function ButtonAdd({ setModalVisible }: ButtonAddProps) {
    return (
        <Button onPress={() => setModalVisible(true)}>      
            <Ionicons name="add" size={40} color="#ffffff" />    
        </Button>
    )
}