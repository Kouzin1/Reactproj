import { render } from "react-dom";
//import Pet from "./Pet"
import SearchParams from "./SearchParams";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
    <h1>Adopt Me!</h1>
    <SearchParams /> 
    {/* <Pet name = "Luna" animal = "Dog" breed = "Havanese"/>
    <Pet name = "Pepper" animal = "Bird" breed = "Cockatiel"/>
    <Pet name = "Beam" animal = "Dog" breed = "Wheaten Terrier"/> */}
  </div>
  )
}
render(<App />, document.getElementById("root"));
