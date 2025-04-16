function RenderMeal(data) {
  console.log(data);
  // let i = 1;
  function createLi(i) {
    return (
      <li>
        {data.data[`strMeasure${i}`]} {data.data[`strIngredient${i}`]}
      </li>
    );
  }
  function renderList() {
    const list = [];
    for (let i = 0; i < 20; i++) {
      if (data.data[`strIngredient${i + 1}`] === "") break;
      list.push(createLi(i + 1));
    }
    console.log(list);
    return list;
  }
  return (
    <div>
      <img src={data.data.strMealThumb}></img>
      <p>Dish Name: {data.data.strMeal}</p>
      <p>Dish ID: {data.data.idMeal}</p>
      <p>Origin: {data.data.strArea}</p>
      <span>Ingredients:</span>
      <ul>{renderList()}</ul>
      <p>
        Instruction to cook:
        <br />
        {data.data.strInstructions}
      </p>
      <p>
        Click to learn more:{" "}
        <a href={data.data.strSource} target="_blank">
          More about the dish
        </a>
      </p>
    </div>
  );
}

export default RenderMeal;
