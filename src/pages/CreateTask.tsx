import React, { useEffect } from "react";
import { Form, Template } from "../components/AssignmentForm/";

const CreateTask = () => {
  useEffect(() => {
    document.title = "New Assignment";
  }, []);

  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content max-w-xl flex-col">
        <Template />
        {/* <div className="card w-full max-w-xl flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input-bordered input"
              />
              <label className="label">
                <a href="#" className="link-hover label-text-alt link">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Login</button>
            </div>
          </div>
        </div> */}
        <Form />
      </div>
    </div>
  );
};

export default CreateTask;
