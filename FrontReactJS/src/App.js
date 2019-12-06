import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import DetailsPost from './pages/DetailsPost';
import Header from './components/Header';
import Footer from './components/Footer';
import AddPost from './pages/AddPost';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import AddChamp from './pages/AddChamp';
import Stats from './pages/Stats';
import {UsersTop} from './pages/UsersTop';
import ModifyPost from './pages/ModifyPost';

class App extends Component{

    render(){
        return (       
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/posts/:id" exact component={DetailsPost} />
                <Route path="/ajouter-un-joueur" exact component={AddPost} />
                <Route path="/connexion" exact component={Connexion} />
                <Route path="/inscription" exact component={Inscription} />
                <Route path="/ajouter-un-championnat" exact component={AddChamp} />
                <Route path="/users-top" exact component={UsersTop} />
                <Route path="/classement-et-statistiques" exact component={Stats} />
                <Route path="/modifier-un-joueur/:id" exact component={ModifyPost} />
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
