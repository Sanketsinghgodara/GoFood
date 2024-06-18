import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: cred.name,
        email: cred.email,
        password: cred.password,
        address: cred.address,
      }),
    });

    const json = await response.json(); // Corrected this line

    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      navigate("/login");
    }
  };

  const onChange = (event) => {
    setCred({ ...cred, [event.target.name]: event.target.value });
  };

  return (
    <div className="container ">
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/eco-background-design_1271-98.jpg?t=st=1708716082~exp=1708719682~hmac=a0128cbf38d8ee82ed885b40bc33acba02bc4e14b870568329fab5e54fd50e5a&w=740')",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          name="name"
                          value={cred.name}
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="email"
                          value={cred.email}
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          name="password"
                          value={cred.password}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Address
                        </label>
                        <input
                          type="address"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="address"
                          value={cred.address}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <Link to="#!" className="text-body">
                            <u>Terms of service</u>
                          </Link>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Submit
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link
                          to="/login"
                          className="fw-bold text-body text-danger"
                        >
                          Login here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
