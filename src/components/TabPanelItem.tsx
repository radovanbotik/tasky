import React from "react";
import Switch from "./Switch";
import DeleteButton from "./DeleteButton";
import { useAppState } from "../context/AppState";

interface Props {
  name: string;
  id: number;
  desc: string;
  date: string;
  active: boolean;
}

const TabPanelItem = ({ name, id, desc, date, active }: Props) => {
  const { deleteTask } = useAppState();

  return (
    <div className="relative rounded-md p-3 hover:bg-gray-100" key={id}>
      <h3 className="text-sm font-medium leading-5">{name}</h3>
      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li>{id}</li>
        <li>&middot;</li>
        <li>Task: {desc}</li>
        <li>&middot;</li>
        <li>Scheduled for: {date}</li>
      </ul>
      <div className="flex justify-between">
        <Switch enabled={active} id={id} />
        <DeleteButton id={id} deleteTask={deleteTask}>
          Delete
        </DeleteButton>
      </div>
    </div>
  );
};

export default TabPanelItem;
