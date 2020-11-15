import React from 'react';
import ReactDOM from 'react-dom';
import style from"./style.module.css";


class Student extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        status : JSON.parse(localStorage.getItem("checked")) || []
      }
    }
    click = (index) => {
      const stat = this.state.status.slice()
      stat[index] = !stat[index]
      this.setState({
        status : stat
      })
      localStorage.setItem("checked", JSON.stringify(stat))
    }

    render(){
      const {status} = this.state
      console.log(status)
      let listItem = this.props.List.map((list, index) => {
        return(
          <li key = {index} className = {this.state.status[index] ? style.checked : null}>
            <input type="checkbox" onClick = {() => {this.click(index)}}/>
            <span className={style.close} onClick={(event) => {this.props.onClick(event, index)}}>x</span> {list}</li>
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
