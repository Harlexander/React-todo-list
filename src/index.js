import React from 'react';
import ReactDOM from 'react-dom';
import Student from"./student.js";
import style from"./style.module.css";

class Head extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoList : get("todos") || []
    }
  }

  remove = (event, index) => {
    const [todos, check]= [this.state.todoList, get("checked")];
    todos.splice(index, 1)
    check.splice(index, 1);
    set("todos", todos)
    set("checked", check)
    event.target.parentElement.remove();
  }

  collectData = (event) => {
    event.preventDefault();
    let items = event.target.event.value;
    let push;
    if(items !== ""){
        push = this.state.todoList.concat([items])
          this.setState({
            todoList : push
          })
    }else{
      alert("Please Insert Your Program")
    }
    set("todos", push)
    set("checked", Array(this.state.todoList.length + 1).fill(false))
  }


  render(){
   return (
    <>
    <Header onSubmit = {(event) => {this.collectData(event)}}/>
    <Student List = {this.state.todoList} 
      state = {this.state.status}
      onClick = {(event, index) => {this.remove(event, index)}}/>
    </>
    )
  }
}

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const get = (key) => {
  JSON.parse(localStorage.getItem(key))
}

class Header extends React.Component{
  render(){
    return ( 
      <div id="myDIV" className={style.header}>
      <h2 style={{margin:"5px"}}>My To Do List</h2>
      <form onSubmit = {(event) => this.props.onSubmit(event)}>
      <input type="text" className={style.head} id="event" placeholder="Title..." />
      <input type="submit" className={style.head} value="Add" className={style.addBtn} />
      </form>
    </div>
    )
  }
}

ReactDOM.render(
  <Head/>,
  document.getElementById('root')
);
