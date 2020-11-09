import React from 'react';
import ReactDOM from 'react-dom';
import Student from"./student.js";
import style from"./style.module.css";

class Head extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoList : []
    }
  }

  collectData = (event) => {
    event.preventDefault();

    let items = event.target.event.value;

    let push = this.state.todoList.concat([items])
    this.setState({
      todoList : push
    })
  }

  render(){
    console.log(this.state.todoList)
   return (
    <div>
      <div id="myDIV" className={style.header}>
      <h2 style={{margin:"5px"}}>My To Do List</h2>
      <form onSubmit = {this.collectData}>
      <input type="text" id="event" placeholder="Title..." />
      <input type="submit" value="Add" className={style.addBtn} />
      </form>
    </div>
      <Student List = {this.state.todoList}/>
    </div>
  
    )
  }
}

ReactDOM.render(
  <Head/>,
  document.getElementById('root')
);