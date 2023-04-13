import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="card">
        <img
          src="https://source.unsplash.com/featured/500x325"
          alt=""
          className="w-100"
        />
        <div className="card-body text-center py-3">
          <h4>Cart title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi recusandae animi veritatis omnis neque.
          </p>
        </div>
        <div className="card-footer text-center py-3">
          <button className="btn btn-primary">Find Out More</button>
        </div>
      </div>
    )
  }
}
