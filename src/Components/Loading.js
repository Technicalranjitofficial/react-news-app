import React, { Component } from 'react'
import load from './loading.gif'
export class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load}  alt="loading" />
      </div>
    )
  }
}

export default Loading
