import { useState } from "react";
import Axios from "axios";
import RenderMeal from "./RenderMeal";

function App() {
  const [dish, setDish] = useState("");
  const [dataFetched, setdataFetched] = useState(0);
  const [data, setData] = useState({});
  const getDishData = async function (e) {
    e.preventDefault();
    const data = await Axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
    );
    setData(data);
    console.log(data);
    if (data.data.meals === null) setdataFetched(1);
    else setdataFetched(2);
    setDish("");
  };
  return (
    <div className="App">
      <h1>LOL</h1>
      <form onSubmit={(e) => getDishData(e)}>
        <input
          type="text"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <button>Search</button>
      </form>
      {/* <div>{dataFetched}</div> */}
      <div>{dataFetched === 1 && <div>No data found entered dish</div>}</div>
      <div>{dataFetched === 2 && <RenderMeal data={data.data.meals[0]} />}</div>
    </div>
  );
}

export default App;
