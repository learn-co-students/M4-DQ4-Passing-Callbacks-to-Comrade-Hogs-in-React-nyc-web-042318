import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
    console.log('throwing a fit now')
    this.props.alterEnvironment("inhospitable")
    setTimeout(this.relax, 2000)
  }

  relax = () => {
    console.log('Galaxy is relaxing')
    const newState = {panicked: false}
    this.setState(newState, this.props.penRelaxes)
  }


  exclaim = () => {
    console.log('why')
    this.setState({
      panicked: true
    }, () => {
      console.log('calling back now')
      this.squeelAudio.play()
      this.exclaimAudio.play()
    })
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
