import React, { useEffect } from "react";
import { Footer, RegisterForm, Form, Intro } from "../components";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../context/AppState";
import { Modal } from "../components/";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, member } = useAppState();

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
            <h2 className="mb-2 text-center text-2xl font-semibold">
              {member ? "Register" : "Login"}
            </h2>
            <RegisterForm />
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default LandingPage;
