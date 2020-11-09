import React from 'react';
import ReactDOM from 'react-dom';
import style from"./style.module.css";


class Student extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        checked : false
      }
    }

    remove = (event) => {
      let id = event.target.parentElement.remove()
    }

    checkList = (event) => {
      if (event.target) {
        let status = this.state.checked
     this.setState ({
       checked : !status
     })
      }
    }

    render(){
      console.log(this.state.checked)
      let listItem = this.props.List.map((list, index) => {
        return(
          <li key = {index} onClick = {this.checkList} className = {(this.state.checked) ? style.checked : "null"} ><span className={style.close} onClick={this.remove}>x</span> {list}</li>
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