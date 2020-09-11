import React, { Component } from 'react';

import './styles.css';

class Conversor extends Component {

    state = {
        moedaA_valor: 0,
        moedaB_valor: 0,
        simbolo: ''
    }

    converter = () => {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=59258cbfc3cf58697c5c`;

        fetch(url)
            .then(res => {

                return res.json();
            })
            .then(json => {
                let cotacao = json[de_para];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2);
                this.setState({ moedaB_valor });
            });

        this.simbolo();
    }

    simbolo = () => {
        let simbolo = '';
        let { moedaB } = this.props;

        if (moedaB === 'BRL') {
            simbolo = 'R$';
        }
        else if (moedaB === 'USD') {
            simbolo = '$';
        }
        else if (moedaB === 'CAD') {
            simbolo = 'C$';
        }
        else if (moedaB === 'EUR') {
            simbolo = '€';
        }
        this.setState({ simbolo })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input className="valor" type="number" onChange={(event) => {
                    { this.setState({ moedaA_valor: event.target.value }) }
                }} />
                <input className="botao" type="button" value="Converter" onClick={this.converter} />
                <h2>Valor convertido: {this.state.simbolo} {this.state.moedaB_valor}</h2>
            </div>
        );
    }
}

export default Conversor;