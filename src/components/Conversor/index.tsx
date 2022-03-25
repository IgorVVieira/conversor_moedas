import React, { useState } from 'react';
import styled from 'styled-components';

import api from '../../services/api';

import Button from '../Button';

interface IConverterProps {
    moedaA: string;
    moedaB: string;
}

const StyledConversor = styled.div`
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    background: #44475a;
    color: aliceblue;
    border-radius: 10px;
`;

const StyledInput = styled.input`
    background: #6272a4;
    color: aliceblue;
    border-radius: 12px;
    padding: 5px;`
    ;

function Conversor(props: IConverterProps) {
    const [moedaA, setMoedaA] = useState('');
    const [moedaB, setMoedaB] = useState(0);
    const [simbolo, setSimbolo] = useState('');

    async function converter(): Promise<void> {
        let dePara = `${props.moedaA}_${props.moedaB}`;

        const response = await api.get(`/convert?q=${dePara}&compact=ultra&apiKey=59258cbfc3cf58697c5c`)

        try {
            let newMoedaA = parseFloat(moedaA);

            let moedaBValor = (newMoedaA * response.data[dePara]);

            if (!verificaSinal(moedaBValor)) {
            }
            else {
                setMoedaB(moedaBValor);
            }

            getSimbolo();
        } catch (error) {
            console.log(error)
        }
    }

    function getSimbolo(): void {
        let simbolo = '';

        if (props.moedaB === 'BRL') {
            simbolo = 'R$';
        }
        else if (props.moedaB === 'USD') {
            simbolo = '$';
        }
        else if (props.moedaB === 'CAD') {
            simbolo = 'C$';
        }
        else if (props.moedaB === 'EUR') {
            simbolo = '€';
        }
        setSimbolo(simbolo);
    }

    function verificaSinal(valor: number): boolean {
        if (valor < 0) {
            alert(`Não é possível converter valor negativo!`);
            return false;
        }
        return true;
    }

    return (
        <StyledConversor>
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <StyledInput type='number' value={moedaA} required onChange={(e) => setMoedaA((e.target.value))} />
            <Button text='Converter' acao={converter} />
            <h2>Conversão: {simbolo} {moedaB.toFixed(2)}</h2>
        </StyledConversor>
    );
}

export default Conversor;
