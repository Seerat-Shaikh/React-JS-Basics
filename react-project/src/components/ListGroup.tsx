//import { Fragment } from "react";
//import { MouseEvent } from "react";
import { useState } from "react";

//---- Props -------
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}


function ListGroup({items, heading, onSelectedItem}: Props) {

  // Telling react to change this state overtime
  const [selectedIndex, setSelectedIndex] = useState(-1); //[state, statefunction] -1 beacuse array starts from 0 if we write 0 so 1st list will be always in active state

  // Extracting using const variable
  //const message = items.length === 0 ? <p>No item found</p> : null

  // Extracting using const function
  // If you have to pass different arguments use this method
  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }*/

  // Type Annotation Event Handler
 // const handleClick = (event: MouseEvent) => console.log(event); //if we write event. then we see all properties in suggestion box

  return (
    <>
      {/*Shortcut of Replacing Fragment with this symbol you don't nee dto import thi*/}
      {/*<Fragment> /* Relacing div with Fragment so that it doesnot appear separate component in DOM */}
      <h1>{heading}</h1>
      {/*items.length === 0 ? <p>No item found</p> : null*/}{" "}
      {/*works as if else*/}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/*if condition is true return p tag if condition is false nothing will rendered on screen*/}
      {/*---Returning function & const variables-----*/}
      {/*message*/}
      {/*getMessage()*/}
      {/*it will give error if we didn't wrap it in div container bcz react doesnot more than one objects*/}
      <ul className="list-group">
        {/*<li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>*/}

        {/*We cannot use for loop in react so we using map function which will return values one by one. {} use this to render data dynamically like {item}*/}
        {items.map((items, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={items}
            onClick={() => {setSelectedIndex(index); onSelectedItem(items);}}
          >
            {items}
          </li>
        ))}
      </ul>
      {/*</Fragment>*/}
    </>
  );
}


export default ListGroup;