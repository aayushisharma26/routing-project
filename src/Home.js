// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Footer from "./component/Footer";
// import Header from "./component/Header";

// function Home() {
//   const [data, setData] = useState([]); 

//   const fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(data, "data");
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <div className="row">
//         {data.map((item) => (
//           <div className="col" key={item.id}>
//             <img src={item.image} alt={item.title} />
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Home;
















// import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Footer from "./component/Footer";
// import Header from "./component/Header";

// function Home() {
//   const [data, setData] = useState({ meals: [] });

//   const fetchData = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <Outlet />
//       <div className="row">
//         {data.meals.map((item) => (
//           <div className="col" key={item.idMeal}>
//             <Link to={`/meal/${item.idMeal}`}>
//               <img src={item.strMealThumb} alt={item.strMeal} />
//             </Link>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;




// final project
// import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Footer from "./component/Footer";
// import Header from "./component/Header";

// function Home() {
//   const [data, setData] = useState({ meals: [] });

//   const fetchData = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <Outlet />
//       <div className="row">
//         {data.meals.map((item) => (
//           <div className="col" key={item.idMeal}>
//             {/* Wrap the image with Link */}
//             <Link to={`/meal/${item.idMeal}`}>
//               <img src={item.strMealThumb} alt={item.strMeal} />
//             </Link>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;
















import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

function Home() {
  const [data, setData] = useState({ meals: [] });

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
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
        {data.meals.map((item) => (
          <div className="col" key={item.idMeal}>
            {/* Wrap the image with Link */}
            <Link to={`/meal/${item.idMeal}`}>
              <img src={item.strMealThumb} alt={item.strMeal} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;


