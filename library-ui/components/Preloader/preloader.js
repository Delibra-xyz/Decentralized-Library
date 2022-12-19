import React, { Component } from 'react'
import Script from 'next/script'

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
        <lottie-player
          src="https://assets9.lottiefiles.com/private_files/lf30_afru6l2d.json"
          background="#3C195C"
          speed="1"
          width={300}
          height={300}
          loop
          autoplay
        ></lottie-player>
      </div>
    )
  }
}

;<Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>

export default Preloader
