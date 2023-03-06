import React, { useContext } from "react";
import { Switch as Toggle } from "@headlessui/react";
import { ApplicationContext } from "../context/ApplicationContext";

type PropTypes = {
  id: string;
  enabled: boolean;
};

const Switch = ({ enabled, id }: PropTypes) => {
  const { toggleStatus } = useContext(ApplicationContext);

  return (
    <Toggle
      checked={enabled}
      onChange={() => toggleStatus(id, enabled)}
      className={`${enabled ? "bg-teal-900" : "bg-rose-700"}
    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-9" : "translate-x-0"}
      pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Toggle>
  );
};

export default Switch;
