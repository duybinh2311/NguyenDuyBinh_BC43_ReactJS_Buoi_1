import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Item from './Item'
import Footer from './Footer'

export default class BaiTapThucHanhLayOut extends Component {
  renderItem = () => {}
  render() {
    return (
      <div>
        {/* Header */}
        <div className="bg-dark d-flex py-2">
          <div className="container">
            <Header />
          </div>
        </div>
        {/* Banner */}
        <div className="my-4">
          <div className="container">
            <Banner />
          </div>
        </div>
        {/* Item */}
        <div className="mb-4">
          <div className="container">
            <div className="row">
              {Array(4)
                .fill()
                .map((item, index) => {
                  return (
                    <div className="col" key={index}>
                      <Item />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-dark">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
