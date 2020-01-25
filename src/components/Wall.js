import React from 'react'
import {
    Link,
    // useRouteMatch,
    // useParams
  } from "react-router-dom";

class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    componentDidMount() {
        get_crypto_data(this);

        let inter = setInterval(function(states) {
            get_crypto_data(states);
        }, 3000, this)
    }

    render() {        

        const { items } = this.state;
        console.log(this.state);
        
        return (
            <div className="wall">
                <div className="content">
                    {
                        items.slice(0,40).map(x => (
                            <div className="card" key={x.id} >
                                <div className="card-body">
                                    <h5 className="card-title">{ucwords(x.id).replace('-', '/')}</h5>
                                    <p className="card-text">
                                        <tt>Cambios: {x.changePercent24Hr}</tt>
                                        <li>Price: ${x.priceUsd}</li>
                                    </p>
                                    <Link to="/crypto" className="btn btn-danger">Ir al dashboard</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

function get_crypto_data(states){
    fetch('https://api.coincap.io/v2/assets/').then((response) => response.json())
    .then((result) => {
        states.setState({
            items: result.data
        });
    })
}


function ucwords(oracion){
    return oracion.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1){
       return $1.toUpperCase(); 
    });
}

export default Wall;