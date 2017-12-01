import React, { Component } from 'react';
import './App.css';
import d20 from './d20.png'
import styled from 'styled-components'

const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
  margin-top: 150px;
`

const Title = styled.h1`
  text-align: center;
  font-family: 'Berkshire Swash', cursive;
  color: #fff;
`

const Button = styled.button`
  font-family: 'Berkshire Swash', cursive;
  font-size: 1em;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  background: none;
  outline: none;
  padding: 10px 20px;
  color: #fff;
  background: #C3A379;
  border: solid 2px #fff;
  &:hover{
    cursor: pointer;
  }
  &:active{
    background: #303030;
  }
`

const Results = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`
const Number = styled.div`
  font-family: 'Berkshire Swash', cursive;
  color: #fff;
  font-size: 40px;
`
class App extends Component {
  constructor(){
    super()
    this.state = {
      results: [],
      spin: 'nospin'
    }
  }

  rollStats = () => {

    this.setState({ spin: 'spin'})
    setTimeout(() => this.setState({ spin: 'nospin'}), 400)



    let numbers = []
    for (var y = 0; y < 6; y++) {
      // Push a new number to results array 6x
      let number = []
      for (var i = 1; i < 5; i++) {
        number.push(Math.floor(Math.random() * 6) + 1)
      }
      let min = Math.min.apply(Math, number)
      for (var x = 0; x < number.length; x++){
        if (min === number[x]) {
          number.splice(x, 1)
          break
        }
      }
      const sum = (a, b) => a + b
      number = number.reduce(sum)
      numbers.push(number)
    }
    this.setState({ results: numbers })
  }

  renderStats = () => {
    let stats = this.state.results.map((number, i) => {
      return (
        <Number>{number}</Number>
      )
    })
    return stats
  }

  render() {
    return (
      <div className="App">
        <Logo src={d20} alt="" className={this.state.spin}/>
        <Title>Roll your ability scores!</Title>
        <Button onClick={this.rollStats}>Roll!</Button>
        <Results>
          {this.renderStats()}
        </Results>
      </div>
    );
  }
}

export default App;
