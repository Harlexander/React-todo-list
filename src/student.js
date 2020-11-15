import React from 'react';
import ReactDOM from 'react-dom';
import style from"./style.module.css";


class Student extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        elementid : [],
        status : Array(this.props.List.length).fill(false)
      }
    }

    remove = (event) => {
      const ask = window.confirm("I hope you have done this activity ??")
      if(ask){
         event.target.parentElement.remove()
      }
    }

    click = (index) => {
      const stat = this.state.status.slice()
      stat[index] = !stat[index]
      this.setState({
        status : stat
      })
    }
    render(){
      const {status} = this.state
      console.log(status)
      let listItem = this.props.List.map((list, index) => {
        return(
          <li key = {index} onClick = {() => {this.click(index)}} className = {this.state.status[index] ? style.checked : null}>
            <span className={style.close} onClick={this.remove}>x</span> {list}</li>
        )
      });
      return (
        <ul id="myUL">
          {listItem}
        </ul>
      ) 
    }
  }
export default Student
