import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () =>{
    
        return(
          <div className="App">
                <header className="App-header">
                <img  src={process.env.PUBLIC_URL + '/images/covid-19.png'} width='400' alt='covid' />
                    <h1>COVID</h1>
                    <Link to='/covid'>Ver Listado de Paises Covid</Link>

                </header>
           </div>
        )
    
}

export default Home;