import React from 'react'
import {
    Link,
    // useRouteMatch,
    // useParams
  } from "react-router-dom";
  
import helpers from '../assets/js/Scripts';

class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            search: ''
        };
    }
    
    componentDidMount() {
        helpers.get_crypto_data(this, 0);

        let inter = setInterval(function(states) {
            helpers.get_crypto_data(states, 0);
        }, 2000, this)
    }

    render() {

        const { items } = this.state;
        
        return (
            <div className="wall">
                <div className="content">
                    {
                        items.slice(0,40).map(x => (
                            <div className="card" key={x.id} >
                                <div className="card-body">
                                    <h5 className="card-title">{helpers.ucwords(x.id).replace('-', '/')}</h5>
                                    <p className="card-text">
                                        <tt>Cambios: {x.changePercent24Hr}</tt>
                                        <li>Price: ${x.priceUsd}</li>
                                        <li>Symbol: {x.symbol}</li>
                                    </p>
                                    <Link to={`/crypto/`+x.id} className="btn btn-danger">Ir al dashboard</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Wall;