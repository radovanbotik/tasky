import React from "react";
import NavigationLink from "./NavigationLink";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ActionsDropdown = () => {
  return (
    <>
      <div>
        Actions
        <ChevronDownIcon className="h-4 w-4" />
      </div>
      <ul className="bg-base-100 p-2">
        <li>
          <NavigationLink path={"/tasks"}>All Assignments</NavigationLink>
        </li>
        <li>
          <NavigationLink path={"/tasks/create-task"}>
            Create New Assignment
          </NavigationLink>
        </li>
      </ul>
    </>
  );
};

export default ActionsDropdown;
