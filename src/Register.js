import "./Register.css";
// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';

// const Register = () => {
//   const data = { name: "", email: "", password: "" };
//   const [inputData, setInputData] = useState(data);

//   function handleData(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log(inputData);
//   }

//   return (
//     <div className="auth-form-container">
//       <h2>Register</h2>
//       <Form className="register-form">
//         <label htmlFor="name">Full name</label>
//         <input
//           value={inputData.name}
//           onChange={handleData}
//           name="name"
//           placeholder="Full Name"
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           value={inputData.email}
//           onChange={handleData}
//           name="email"
//           placeholder="Email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           value={inputData.password}
//           onChange={handleData}
//           name="password"
//           placeholder="Password"
//         />
//         <button type="submit" className="button">
//            Register
//          </button>
//       </Form>
//     </div>
//   );
// };

// export default Register;

















// import React, { useState } from "react";
// import "./Register.css";

// const Register = () => {
//   const [inputData, setInputData] = useState({ name: "", email: "", password: "" });

//   const handleData = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log(inputData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputData.name || !inputData.email || !inputData.password) {
//       alert("All fields are mandatory");
//     }
//     else{
//         alert ("Register Successfully")
//     }
//   };

//   return (
//     <form className="register" onSubmit={handleSubmit}>
//       <h1>Register</h1>
//       <input type="text" name="name" placeholder="Enter Name" value={inputData.name} onChange={handleData} />
//       <input type="text" name="email" placeholder="Enter Email" value={inputData.email} onChange={handleData} />
//       <input type="text" name="password" placeholder="Enter password" value={inputData.password} onChange={handleData} />

//       <button type="submit" className="button">
//         Register
//       </button>
//       <div>or</div>
//       <div className="button">Login</div>
//     </form>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import "./Register.css";
// import axios from "axios";

// const Register = () => {
//   const [inputData, setInputData] = useState({ name: "", email: "", password: "" });

//   const handleData = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log("inputData", inputData);
//   };

//   const register = () => {
//     const { name, email, password } = inputData;

//     if (name && email && password) {
//       axios.post("http://localhost:9000/registerpost", inputData)
//         .then((res) => {
//           console.log(res);
//           alert("done.");
//         })
//         .catch((err) => {
//           console.error(err);
//           alert("wrong");
//         });
//     } else {
//       alert("Invalid input. Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter Name"
//         value={inputData.name}
//         onChange={handleData}
//       />
//       <input
//         type="text"
//         name="email"
//         placeholder="Enter Email"
//         value={inputData.email}
//         onChange={handleData}
//       />
//       <input
//         type="text"
//         name="password"
//         placeholder="Enter password"
//         value={inputData.password}
//         onChange={handleData}
//       />

//       <div className="button" onClick={register}>
//         Register
//       </div>
//       <div>or</div>
//       <div className="button">Login</div>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';

function MyComponent() {
  const [inputData, setInputData] = useState({ name: '', email: '' });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/registerpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response:', data);
        setInputData(data)
        alert("register is successfull")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={inputData.name}
        onChange={(e) => handleData(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={inputData.email}
        onChange={(e) => handleData(e.target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter password"
        value={inputData.password}
        onChange={(e) => handleData(e.target.value)}
      />

      <div className="button" onClick={handleSubmit}>
        Register
      </div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
  







  // return (
  //   <div className="register">
  //     <h1>Register</h1>
  //     <input
  //       type="text"
  //       name="name"
  //       placeholder="Enter Name"
  //       value={inputData.name}
  //       onChange={handleData}
  //     />
  //     <input
  //       type="text"
  //       name="email"
  //       placeholder="Enter Email"
  //       value={inputData.email}
  //       onChange={handleData}
  //     />
  //     <input
  //       type="text"
  //       name="password"
  //       placeholder="Enter password"
  //       value={inputData.password}
  //       onChange={handleData}
  //     />

  //     <div className="button" onClick={handleSubmit}>
  //       Register
  //     </div>
  //     <div>or</div>
  //     <div className="button">Login</div>
  //   </div>

  // );
}

export default MyComponent;
