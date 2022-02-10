import { Picker } from '@react-native-community/picker'

import { InputSelectItem } from './styles'

interface InputSelectProps {
    setValue: (values: string) => void
    value: string
}

export function InputSelect({ setValue, value }: InputSelectProps) {
    return (
        <Picker
            itemStyle={InputSelectItem}
            selectedValue={value}
            onValueChange={(value: string) => setValue(value)}
        >
            <Picker.Item color="#6d5ffd" label="Selecione um investimento" value="" />
            <Picker.Item label="Fundos Imobiliarios" value="FII" />
            <Picker.Item label="Ações" value="Acoes" />
            <Picker.Item label="Caixa" value="Caixa" />
            <Picker.Item label="Ações Internacionais" value="Internacional" />
        </Picker>
    )
}
