import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props) {
        console.log(`Child constructor ${props.number}`)
        super(props)
    }
        componentDidMount() {
        console.log(`Child Comp Did Mount ${this.props.number}`)
    }
  render() {
    console.log(`Child render ${this.props.number}`)
    return (
      <div> 
        {this.props.message}
      </div>
    )
  }
}
