import React from "react";
import { Tab } from "@headlessui/react";
import TabPanelItem from "./TabPanelItem";
import { classNames } from "../utility/classNames";

type Props = {
  category: [];
};

type TaskType = {
  id: number;
  name: string;
  desc: string;
  date: string;
  active: boolean;
};

const TabPanel = ({ category }: Props) => {
  return (
    <Tab.Panel
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      {category.map((task: TaskType) => (
        <TabPanelItem key={task.id} {...task} />
      ))}
    </Tab.Panel>
  );
};

export default TabPanel;
