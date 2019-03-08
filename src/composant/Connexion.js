import React, { Component } from 'react';
import '../styles/Connexion.scss';

class Connexion extends Component {

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <header>
                    <div className="wrapper">
                        <h1>Bienvenue à ZooLand<i className="fa fa-paw"> </i></h1>
                    </div>
                </header>
                <div className="connexion">
                    <section className="add-item">
                        <form>
                            <input type="text" name="email" placeholder="Email"/>
                            <input type="password" name="password" placeholder="Mot de passe" />
                            <button>Connexion</button>
                        </form>
                    </section>
                </div>
            </div>
        );
    }

}

export default Connexion;