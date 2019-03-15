import React, { Component } from 'react';
import '../styles/Connexion.scss';
import firebase from '../firebase';

class Connexion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    onLogin() {
        console.log(this.state.email, this.state.password);
        this.setState({
            error: "",
            loading: true
        });

        const { email, password } = this.state;

        if(email !== "" || password !== "") {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({error: "", loading: false});
                    this.props.connect();
                })
                .catch(() => this.setState({ error: "Connexion Impossible actuellement.", loading: false}));
        }
        else {
            this.setState({error: "Veuillez remplir tout les champs.", loading: false});
        }
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value,
        });
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
                        {
                            this.state.error !== "" ?
                                <p className="error"><i className="fa fa-times-circle"> </i> {this.state.error}</p>
                                :
                                null
                        }
                        <div className="form">
                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                            <input type="password" name="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handlePassword}/>
                            {this.state.loading === true ?
                                <button disabled><div className="loader"> </div></button>
                                :
                                <button onClick={() => this.onLogin()}>Connexion</button>
                            }

                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px"}}>
                            <p style={{ color: "#103D5D"}}>Se créer un Compte</p>
                            <p style={{color: "#103D5D"}}>Mot de passe oublié ?</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

}

export default Connexion;