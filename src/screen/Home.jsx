import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import Carousel from "../components/Carousel";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodcat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const LoadData = async () => {
    let responce = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    responce = await responce.json();
    setFoodItem(responce[0]);
    setFoodcat(responce[1]);
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
       <div>
        <Carousel/>
       </div>
      <div className="container">
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem.length !== 0
                    ? foodItem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-mb-6 col-lg-3"
                            >
                              <Card
                                foodItem={filterItems}
                                options={filterItems.options[0]}
                              />
                            </div>
                          );
                        })
                    : ""}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
