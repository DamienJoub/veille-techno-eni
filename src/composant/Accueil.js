import React, { Component } from 'react';
import '../styles/Accueil.scss';
import firebase from '../firebase';

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            currentItem: "",
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        const itemsRef = firebase.database().ref('item');
        itemsRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    user: items[item].user
                });
            }
            this.setState({
                items: newState
            });
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('item');
        const item = {
            title: this.state.currentItem,
            user: this.state.username
        };
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/item/${itemId}`);
        itemRef.remove();
    }

    render() {
        return (
            <div className="app">
                <header>
                    <div className="wrapper">
                        <h1>Bienvenue à ZooLand<i className="fa fa-paw"> </i></h1>
                    </div>
                </header>
                <div className="container">
                    <section className="add-item">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                            <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                            <button>Add Item</button>
                        </form>
                    </section>
                    <section className="display-item">
                        <div className="wrapper">
                            <ul>
                                {this.state.items.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <h3>{item.title}</h3>
                                            <p>brought by: {item.user}</p>
                                            <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Accueil;