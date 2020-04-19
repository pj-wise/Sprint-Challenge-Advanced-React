import React, { Component } from 'react';
import axios from 'axios';
import DataCard from './components/DataCard';
import DarkButton from './components/DarkButton';
import './App.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log('AXIOS ERROR:', err);
      });
  }

  render() {
    return (
      <div className='App'>
        <DarkButton />
        {this.state.data.map((data) => {
          return <DataCard key={data.id} data={data} />;
        })}
      </div>
    );
  }
}
