import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='bg-body-secondary py-5 px-3'>
        <h1 className='fw-light'>A Warm Welcome!</h1>
        <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nobis commodi molestiae? Doloremque corporis nam sunt voluptas explicabo nihil vero consectetur, possimus placeat. Doloremque officiis ab quia debitis, illo at rerum quisquam dolorem error mollitia obcaecati earum fugit autem enim aliquam, fuga corporis commodi recusandae adipisci, quos provident eius iste.</p>
        <button className='btn btn-primary'>Call to action!</button>
      </div>
    )
  }
}
