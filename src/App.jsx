
import React, { useState } from 'react'
// import FoodItems from './component/FoodItems';
import FoodItems from './component/FoodItems';
import ErrorMessage from './component/ErrorMessage';
import FoodName from './component/FoodName';
import './App.css';
import Container from './component/Container';
import FoodInput from './component/FoodInput';
function App() {
  // let foodItems = []
  // let foodItems = ["Vegitalbe", "Bread", "Daal", "Rice", "Fish", "salt", "Mutton"];

  // let [textTOShow, setTextState] = useState("Food item Enter by user");
  let [foodItems, setFoodItems] = useState(["Vegitalbe", "Bread", "Daal", "Rice", "Fish"])
  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      console.log("Food value entered is " + newFoodItem);
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems)
    }
    // setTextState(event.target.value)
    // console.log(textTOShow)
  }
  return (

    <React.Fragment>
      <Container>
        <FoodName />
        <FoodInput handleOn={handleOnChange} />
        {/* <p>{textTOShow}</p> */}
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>

    </React.Fragment>
  )

}
export default App;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import FootItems from "./Components/FoodItems";
// import ErrorMessage from "./Components/ErrorMessage";
// import "./App.css";
// import Container from "./Components/Container";
// import FoodInput from "./Components/FoodInput";

// function App() {
//   // let foodItems = [];
//   // let foodItems = ["sabzi", "Rooti", "Daal", "Vegitable", "Fish"];
//   let [foodItems, setFoodItems] = useState(["salat", "Rooti", "Daal"]);
//   // let textStateArr = useState("");
//   // let textTOShow = textStateArr[0];
//   // let setTextState = textStateArr[1];
//   let [textTOShow, setTextState] = useState();
//   // console.log(current value of textState: ${textTOShow});
//   // repaint whole component value
//   const onKeyDown = (event) => {
//     if (event.key === "Enter") {
//       let newFoodItem = event.target.value;
//       let newItems = [...foodItems, newFoodItem];
//       setFoodItems(newItems);
//       // console.log("you entered" + newFoodItem);
//     }
//     // setTextState(event.target.value);
//     // console.log(event.target.value);
//     // textTOShow = event.target.value;
//   };
//   return (
//     <>
//       <Container>
//         <h1 className="heading">Food Items</h1>
//         <FoodInput handleKeyDown={onKeyDown} />
//         {/* <p>{textTOShow}</p> */}
//         <FootItems items={foodItems} />
//         <ErrorMessage items={foodItems} />
//       </Container>
//     </>
//   );
// }

// export default App;