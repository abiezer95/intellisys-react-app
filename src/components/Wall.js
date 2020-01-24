import React from 'react'


class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    componentDidMount() {
        fetch('https://financialmodelingprep.com/api/v3/forex/').then((response) => response.json())
        .then((result) => {
            this.setState({
                items: result.forexList
            });
        })
    }

    render() {        

        const { items } = this.state;
        console.log(this.state);
        
        return (
            <div className="wall">
                <div className="wallpaper-info">
                    <tt>Resumen</tt>
                </div>
                <div className="content">
                    {
                        items.slice(0,30).map(x => (
                            <div className="card" key={x.ticker} >
                                <div className="card-body">
                                    <h5 className="card-title">{x.ticker} - <tt>+0.515151</tt></h5>
                                    <p className="card-text">Precio: 1.10251</p>
                                    <p className="card-text">Apertura: 1.10534</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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