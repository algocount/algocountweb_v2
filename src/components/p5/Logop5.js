import React, { Component } from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"
import Logo3D from "./Logo3D"

export default class Logop5 extends Component {
  render() {
    return <ReactP5Wrapper sketch={Logo3D} />
  }
}
