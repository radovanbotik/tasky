import React, { useContext, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useAppState } from "../context/AppState";
import { TabPanel, Loader, TabButton } from "../components";

const Tasks = () => {
  const { fetchAllTasks, all_tasks, pending } = useAppState();

  const completed_tasks = all_tasks.filter(task => !task.active);
  const active_tasks = all_tasks.filter(task => task.active);

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
    <div className="flex h-full justify-center">
      <div className="w-full max-w-xl  px-2 py-16 sm:px-0">
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
      </div>
    </div>
  );
};

export default Tasks;
