import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

function Home() {
  const [data, setData] = useState({ meals: [] });

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((res) => {
        setData({ meals: res.categories });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <div className="row">
        {data?.meals?.map((item) => (
          <div className="col" key={item.idCategory}>
            <Link to={`/meal/${item.idCategory}`} state={{ meal: item }}>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
            </Link>
            
            
          </div>
          
          
          
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
