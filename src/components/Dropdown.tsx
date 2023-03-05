import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  DocumentIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/solid";
import {
  DocumentIcon as DocumentIconOutline,
  FolderOpenIcon as FolderOpenIconOutline,
} from "@heroicons/react/24/outline";

const Dropdown = () => {
  const routes = [
    {
      id: 1,
      name: "New Task",
      path: "/tasks/create-task",
      open: <DocumentIcon className="h-6 w-6" />,
      closed: <DocumentIconOutline className="h-6 w-6" />,
    },
    {
      id: 2,
      name: "All Tasks",
      path: "/tasks",
      open: <FolderOpenIcon className="h-6 w-6" />,
      closed: <FolderOpenIconOutline className="h-6 w-6" />,
    },
  ];

  //   const menuItem = routes.map(route => (
  //     <div className="px-1 py-1 " key={route.id}>
  //       <Menu.Item
  //         as={Link}
  //         to={route.path}
  //         className="ui-notactive:text-black group flex w-full items-center rounded-md px-2 py-2 text-sm ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white"
  //       >
  //         {route.name}
  //       </Menu.Item>
  //     </div>
  //   ));

  const menuItem = routes.map(route => (
    <div className="px-1 py-1 " key={route.id}>
      <Menu.Item>
        {({ active }) => (
          <Link
            to={route.path}
            className={`${
              active ? "bg-violet-500 text-white" : "text-gray-900"
            } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
          >
            {active ? route.open : route.closed}
            {route.name}
          </Link>
        )}
      </Menu.Item>
    </div>
  ));

  return (
    // <div className="fixed top-16 w-56 text-right">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Options
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items>{menuItem}</Menu.Items>
      </Transition>
    </Menu>
    // </div>
  );
};

export default Dropdown;
