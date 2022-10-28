import React, { Component } from 'react'

class Preloader extends Component {
  preloader() {
    let preload = document.querySelector('.preloader')
    setTimeout(() => {
      preload.style.opacity = '0'
      setTimeout(() => {
        preload.style.display = 'none'
      }, 1000)
    }, 3000)
  }

  componentDidMount() {
    this.preloader()
  }

  render() {
    return (
      <div className="preloader">
        <div className="spinner_wrap">
          <div className="spinner" />
        </div>
      </div>
    )
  }
}

export default Preloader
