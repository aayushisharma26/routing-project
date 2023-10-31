
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";

// function Home() {
//   const [data, setData] = useState([]); // Initialize data as an empty array

//   const fetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res); // Set the response directly without wrapping in an array
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
//       <Outlet />
//       <div className="home-page">
//         <h1>Get Data</h1>
//         <div>
//           {data.length > 0 ? (
//             data.map((item) => (
//               <div key={item.id}>
//                 <p>ID: {item.id}</p>
//                 <p>Title: {item.title}</p>
//                 <img className="image-container" src={item.image} alt="Cat" />

//               </div>
//             ))
//           ) : (
//             <p>No data available.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;




import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";


function Home() {
  const [data, setData] = useState([]); // Initialize data as an empty array

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res); // Set the response directly without wrapping in an array
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data");

  return (
    <>
      <Header/>
      <Outlet />
      {/* <div className="home-page"> */}
        {/* <div className="row"> */}
          {data.map((item) => (
            <div className="col" key={item.id}>
              {/* <p>ID: {item.id}</p> */}
              {/* <p>Title: {item.title}</p> */}
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        {/* </div> */}
      {/* </div> */}
      <Footer/>
    </>
  );
}

export default Home;
