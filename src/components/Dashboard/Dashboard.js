import React, { Component } from 'react';
import Product from './component/Product';

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
          {product}
      </div> 
    )
  }
}

export default Dashboard;