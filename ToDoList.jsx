import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListComp from "./ListComp";

const ToDoList=()=>{
    const [item,setItem]=useState("");
    const [newItem,setNewItem]=useState([]);

    const itemEvent=(event)=>{
        setItem(event.target.value);
    }
    const listOfItem=()=>{
        setNewItem((preValue)=>{
            return [...preValue,item]
        });
        setItem("");
    }

    return(<>
            <div className="main_div">
            
                <div className="center_div">
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItem}><AddCircleIcon/></Button>
                    <br/>
                    
                    <ol>
                        {newItem.map((val,index)=>{
                            return <ListComp key={index} text={val}/>;
                        })}
                    </ol>
                    <br/>
                </div>
            </div>
    </>

)}

export default ToDoList;
