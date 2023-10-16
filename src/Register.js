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

















import "./Register.css";
// import React, { useState } from 'react';
const Register=()=>{
    return(
        <form className="container">
        <div className="header">
            <h1>Registration Form</h1>
        </div>

        </form>
        

    );
}
export default Register;