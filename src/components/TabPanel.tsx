import React from "react";
import { Tab } from "@headlessui/react";
import TabPanelItem from "./TabPanelItem";

type Props = {
  category: [];
};

type TaskProps = {
  task: [];
};

const TabPanel = ({ category }: Props) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Tab.Panel
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      {category.map(task => (
        <TabPanelItem key={task.id} {...task} />
      ))}
    </Tab.Panel>
  );
};

export default TabPanel;
