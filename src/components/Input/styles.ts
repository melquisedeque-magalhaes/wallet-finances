import styled from "styled-components/native";
import { TextInputProps } from 'react-native'

// interface Props extends TextInputProps {

// }

export const InputStyles = styled.TextInput<TextInputProps>`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-color: #666;
    border-radius: 10px;
    padding: 16px;
`