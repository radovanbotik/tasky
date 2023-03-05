import React, { ReactNode } from "react";
import { Tab } from "@headlessui/react";

type Props = {
  children: ReactNode;
};

const TabButton = ({ children }: Props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Tab
      className={({ selected }) =>
        classNames(
          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
          selected
            ? "bg-white shadow"
            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
        )
      }
    >
      {children}
    </Tab>
  );
};

export default TabButton;
