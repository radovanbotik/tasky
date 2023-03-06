import React, { useContext, useEffect } from "react";
import { RegisterForm, Intro } from "../components";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/";
import { ApplicationContext } from "../context/ApplicationContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { globalState } = useContext(ApplicationContext);
  // const { user } = globalState;
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      navigate("/tasks");
    }
  }, [user]);

  return (
    <div className="flex min-h-screen items-center bg-base-200">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  grid-cols-1 rounded-xl  bg-base-100 md:grid-cols-2">
          <div className="">
            <Intro />
          </div>
          <div className="py-24 px-10">
            <RegisterForm />
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default LandingPage;
