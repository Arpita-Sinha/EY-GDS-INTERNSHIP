import React from "react";

function Register() {
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            UserName
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="Enter your username"
          />
        </div>
        <div classNameName="mb-3">
          <label for="exampleInputEmail1" classNameName="form-label">
            Email address
          </label>
          <input
            type="email"
            classNameName="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" classNameName="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div classNameName="mb-3">
          <label for="exampleInputPassword1" classNameName="form-label">
            Password
          </label>
          <input
            type="password"
            classNameName="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div classNameName="mb-3 form-check">
          <input
            type="checkbox"
            classNameName="form-check-input"
            id="exampleCheck1"
          />
          <label classNameName="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" classNameName="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Register;
