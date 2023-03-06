import React, { useContext, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { TabPanel, Loader, TabButton } from "../components";
import { ApplicationContext } from "../context/ApplicationContext";
import { Assignment } from "../types/types";

const Tasks = () => {
  const { globalState, fetchAllTasks } = useContext(ApplicationContext);
  const { all_tasks, pending } = globalState;

  const completed_tasks = all_tasks.filter(
    (assignment: Assignment) => !assignment.active
  );
  const active_tasks = all_tasks.filter(
    (assignment: Assignment) => assignment.active
  );

  useEffect(() => {
    fetchAllTasks();
  }, []);

  useEffect(() => {
    document.title = "All Assignments";
  }, []);

  if (pending) {
    return <Loader>Your content is getting ready.</Loader>;
  }
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <TabButton>All assignments</TabButton>
        <TabButton>Completed assignments</TabButton>
        <TabButton>Active assignments</TabButton>
      </Tab.List>
      <Tab.Panels>
        <TabPanel category={all_tasks} />
        <TabPanel category={completed_tasks} />
        <TabPanel category={active_tasks} />
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tasks;
