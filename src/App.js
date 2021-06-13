import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const store =()=>{
  return JSON.parse(localStorage.getItem("additems"));
  }
  const [input, setinput] = useState('')
  const [items, setitems] = useState(store())
  // add todo
  let addTodos = () => {
    if(input){

      setitems([...items, input])
      setinput("")
    }else{
     alert("cant add empty item")
    }
  }
  // delete todo  
  let deleteItems = (id) => {
    const updateItems = items.filter((ele, ind) => {
      return (
        id !== ind
      )
    });
    setitems(updateItems)
  }
  // all crear todo 
  const clearAll = () => {
    setitems([])
  }
  useEffect(() => {
   localStorage.setItem("additems",JSON.stringify(items));
  }, [items])
  return (
    <div className="main-div">
      <div className="child-div">

        <div className="addItems">
          <input type="text" placeholder="Add your todos" value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <i className="fa fa-plus add-btn" title="Add Item" onClick={addTodos}></i>
        </div>
        <div className="showItems">

          {
            items.map((ele, ind) => {

              return (
                <div className="eachItem" key={ind}>
                  <h3>{ele}</h3>
                  <i className="fa fa-trash-o add-btn" title="Delete Item" onClick={() => deleteItems(ind)}></i>
                </div>

              )

            })
          }
        </div>

        <div className="showItems">

          <button className="btn effect04" data-sm-link-text = "Remove All" onClick={clearAll}>Clear All</button>
        </div>


      </div>
    </div>
  );
}

export default App;
