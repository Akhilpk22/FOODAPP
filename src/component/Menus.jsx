import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import "./Menus.css";
import axios from "axios";

function Menus() {
  const [datas, setData] = useState([]);
  const fetchAPi = async () => {
    const result = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    setData(result.data);
  };
  useEffect(() => {
    fetchAPi();
  }, []);
  console.log(datas.meals);
  return (
    <>
      <div className=" ">
     
        <div className="cards ">
          
            {datas.meals &&
              datas.meals.map((meal) => (
                <div className="card-4">
                <Card key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <Card.Body>
                    <Card.Title style={{fontSize:"18px"}} className="text-center">{meal.strMeal}</Card.Title>
                    {/* Add any additional information you want to display */}
                    <Card.Text>{/* Additional information */}</Card.Text>
                  </Card.Body>
                </Card>
                </div>
              ))}
         
        </div>
    
      </div>
    </>
  );
}

export default Menus;
