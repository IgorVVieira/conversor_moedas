import React, { useState } from 'react';

import './styles.css';

interface IConverterProps {
    moedaA: string;
    moedaB: string;
}

function Conversor(props: IConverterProps) {
    const [moedaA, setMoedaA] = useState('');
    const [moedaB, setMoedaB] = useState(0);
    const [simbolo, setSimbolo] = useState('');

    async function converter(): Promise<void> {
        let dePara = `${props.moedaA}_${props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${dePara}&compact=ultra&apiKey=59258cbfc3cf58697c5c`;

        const response = await fetch(url, {mode:'cors'});
        const json = await response.json();

        const cotacao = json[dePara];

        try {
            let newMoedaA = parseFloat(moedaA);

            let moedaBValor = (newMoedaA * cotacao);

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
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <input className="valor" type="number" value={moedaA} required onChange={(e) => setMoedaA((e.target.value))} />
            <input className="botao" type="button" value="Converter" onClick={converter} />
            <h2>Conversão: {simbolo} {moedaB.toFixed(2)}</h2>
        </div>
    );
}

export default Conversor;
