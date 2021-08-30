import './App.css';
import React, { Component } from 'react';
import products from "./data/products.json";

class App extends Component {
  state = {
    products: products,
    sortBy: "popularity"
  }

  deleteItem = (productId) => {
    this.setState({ products: this.state.products.filter(product => product.id !== productId) })
  }

  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
  
        {
          this.state.products && this.state.products.length > 0
            ? (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {this.state.products.map(product => (
                  <div className="col" key={product.id}>
                    <div className="card">
                      <img src={product.img} className="card-img-top" alt={product.name} />
                      <div className="card-body">
                        <h5 className={`card-title ${product.rating >= 8 ? "text-success" : ""}`}>{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <button onClick={() => this.deleteItem(product.id)} type="button" className="btn btn-danger">Delete item</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No products available</p>
            )
        }

        {
          this.state.products && this.state.products.length > 2
            && (<p>there are a lot products</p>)
        }
      </div>
    )
  }
}

// condition1 = 0 // falsy
// condition2 = true
// condition3 = "pepe"

// condition1 && condition2 && condition3

export default App;
