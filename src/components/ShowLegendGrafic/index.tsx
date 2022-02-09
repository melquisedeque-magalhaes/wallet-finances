import { useEffect } from 'react'

import { useFinances } from '../../hooks/useFinances'
import { ColorLegend, Container, ContentLegend, PorcentLegend, TextLegend } from './styles'

export function ShowLegendGrafig() {
    const { FII, acoes, caixa, internacional, investimentTotal } = useFinances()

    return (
        <Container>
            <ContentLegend>
                <ColorLegend color="#FF1943" />
                <TextLegend>Fundos Imobiliarios</TextLegend>
                <PorcentLegend>{Math.ceil((FII * 100) / investimentTotal)}%</PorcentLegend>
            </ContentLegend>

            <ContentLegend>
                <ColorLegend color="#FFB800" />
                <TextLegend>Ações Brasileiras</TextLegend>
                <PorcentLegend>{Math.ceil((acoes * 100) / investimentTotal)}%</PorcentLegend>
            </ContentLegend>

            <ContentLegend>
                <ColorLegend color="#1767FF" />
                <TextLegend>Caixa</TextLegend>
                <PorcentLegend>{Math.ceil((caixa * 100) / investimentTotal)}%</PorcentLegend>
            </ContentLegend>

            <ContentLegend>
                <ColorLegend color="#6E5FFD" />
                <TextLegend>Ações Internacionais</TextLegend>
                <PorcentLegend>
                    {Math.ceil((internacional * 100) / investimentTotal)}%
                </PorcentLegend>
            </ContentLegend>
        </Container>
    )
}
