import react, { useState } from "react";
import ToDoList from "./ToDoList";

const App=()=>{

    const [inputList, setInputList]=useState("");
    const [items,setItems]=useState([]);

    const itemEvent=(event)=>{
      setInputList(event.target.value);
    }
    const listOfItem=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList];
        });
        setInputList("");
        }
        const deleteItems=(id)=>{
            console.log("deleted");
            setItems((oldItems)=>{
                return oldItems.filter((arrElem,index)=>{
                    return index !==id;
                })
            })
        }

    return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDO List</h1>
            <br/>
            <input type="text" placeholder="Add a Items" 
                onChange={itemEvent} value={inputList}
            />
            <button onClick={listOfItem}> + </button>
            <ol>
                {/* <li>{inputList}</li> */}
                {items.map((itemval,index)=>{
                   return <ToDoList 
                   key={index} 
                   id={index}
                   text={itemval}
                    onSelect={deleteItems}
                   />
                })}
            </ol>
        </div>
    </div>    
    </>

)}

export default App;