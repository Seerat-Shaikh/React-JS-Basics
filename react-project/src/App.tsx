/*import ListGroup from "./components/ListGroup";

//------Handlers Functions-------
function App() {
  let items = ["New York", "London", "Paris", "Tokyo", "Europe"]

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading= "Cities" onSelectedItem={handleSelectedItem} />
    </div>
  );
}*/


//-------Alert -------

/*import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}*/


//---- Creating Button & Alert Box ----------
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

interface Props {
  children: string
}

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      {/*<Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button>*/}
      <Button color = "primary" onClick={() => setAlertVisibility(true)}>My Button</Button> {/*After returning optional color property*/}
    </div>
  )
}

export default App;
