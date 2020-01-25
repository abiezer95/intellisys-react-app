import React from 'react';
import Header from '../components/Header';
import '../assets/css/crypto.scss';

class Crypto extends React.Component {
    render() {
        return (
            <div>
                <div className="Container">
                    <Header />
                </div>
                <div className="wallpaper-info">
                    <tt>Resumen</tt>
                </div>
                <div className="crypto">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">Fluid jumbotron</h1>
                            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crypto;
