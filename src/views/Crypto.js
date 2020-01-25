import React from 'react';
import Header from '../components/Header';
import '../assets/css/crypto.scss';
import helpers from '../assets/js/Scripts';

class Crypto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    componentDidMount() {
        helpers.get_crypto_data(this, this.props.match.params.id);

        let inter = setInterval(function(states, url) {
            helpers.get_crypto_data(states, url);
        }, 2000, this, this.props.match.params.id)
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <div className="Container">
                    <Header />
                </div>

                <div className="wallpaper-info">
                    <div className="content">
                        <h3>{items.name}</h3>
                        <ul>
                            <li>Ranking: <tt>{items.rank}°</tt></li>
                            <li>Precio: ${String(items.priceUsd).substr(0, 8)} USD Aprox.</li>
                            <li>Cambios: {items.changePercent24Hr}</li>
                            <li>Simbolo: {items.symbol}</li>
                        </ul>
                        
                        <p className="paragraph">
                            Una criptomoneda, criptodivisa (del inglés cryptocurrency) o criptoactivo es un medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones, controlar la creación de unidades adicionales y verificar la transferencia de activos.1​2​3​ Las criptomonedas son un tipo de divisa alternativa y de moneda digital. 
                        </p>
                    </div>

                    
                </div>

                <div className="crypto">
                    <iframe src="https://es.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>
                </div>
                
            </div>
        )
    }
}

export default Crypto;
