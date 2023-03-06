import React from "react";
import { Tab } from "@headlessui/react";
import TabPanelItem from "./TabPanelItem";
import { classNames } from "../utility/classNames";
import { Assignment } from "../types/types";

const TabPanel = ({ category }: { category: Assignment[] }) => {
  return (
    <Tab.Panel
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      {category.map((task: Assignment) => (
        <TabPanelItem key={task.name} {...task} />
      ))}
    </Tab.Panel>
  );
};

export default TabPanel;
