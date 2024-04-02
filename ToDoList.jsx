// import React from "react";
// import "./index.css";

// const ToDoList=(props)=>{
//     const deleteItem=()=>{
        
//     }
//     return (
//     <>
//     <div className="todo_style">
//     <i className="fa fa-times" aria-hidden="true" 
//         onClick={()=>{
//             props.onSelect(props.id);
//         }}
//     />
//         <li>{props.text}</li>
//         </div>
//     </>
//     )}

// export default ToDoList;




// import React, { useState } from "react";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import Button from '@mui/material/Button';

// import Tooltip from '@mui/material/Tooltip';

// const ToDoList=()=>{
//     const[num,setNum]=useState(0);
    
//     const incNum=()=>{
//         setNum(num+1);
//     }
//     const decNum=()=>{
//         if(num>0){
//         setNum(num-1);
//         }else{
//             alert("Sorry, Zero Limit Reached");
//             setNum(0);
//         }
//     }

//     return(
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1>{num}</h1>
//                     <div className="btn_div">
//                     <Tooltip title="Add">
//                         <Button onClick={incNum}><AddCircleIcon/></Button>
//                         </Tooltip>
//                         <Tooltip title="Delete">
//                         <Button onClick={decNum}><RemoveCircleIcon/> </Button>
//                         </Tooltip>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ToDoList;





// import React from "react";
// import Clock from 'react-digital-clock';

// const ToDoList=()=>{
//     <Clock />;
// };

// export default ToDoList;



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