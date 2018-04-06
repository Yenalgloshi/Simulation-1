import React, { Component } from 'react';
import Product from '../product/Product';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: '',
            img: ''
        }

    }



  render() {
    return (
      <div>
          <Product />
      </div> 
    )
  }
}

export default Dashboard;