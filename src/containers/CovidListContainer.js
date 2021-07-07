import React,{ Component } from 'react';
import axios from 'axios';
import List from '../components/List';

class CovidListContainer extends  Component {

    state ={
        CovidData: []
    }

    componentDidMount() {
        axios.get('https://covid-19.dataflowkit.com/v1/mexico')
        .then(rest =>{
            const CovidData = rest.data;
            console.log(CovidData);

            this.setState({
                CovidData 
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {

        const CovidData = this.state;
        return(
            <List covidata={CovidData} />

        )
    
    }
}

export default CovidListContainer;