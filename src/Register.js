// import "./Register.css";
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

















import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [inputData, setInputData] = useState({ name: "", email: "", password: "" });

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    }
    else{
        alert ("Register Successfully")
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="text" name="name" placeholder="Enter Name" value={inputData.name} onChange={handleData} />
      <input type="text" name="email" placeholder="Enter Email" value={inputData.email} onChange={handleData} />
      <input type="text" name="password" placeholder="Enter password" value={inputData.password} onChange={handleData} />

      <button type="submit" className="button">
        Register
      </button>
      <div>or</div>
      <div className="button">Login</div>
    </form>
  );
};

export default Register;
