export interface Assignment {
  name: string;
  desc: string;
  date: string;
  active: boolean;
  id: string;
}
export interface User {
  email: string;
  id: string;
  password: string;
}

export interface GlobalState {
  pending: boolean;
  all_tasks: {
    name: string;
    id: string;
    desc: string;
    date: string;
    active: boolean;
  }[];
  user: {
    email: string;
    id: string;
    password: string;
  };
  alert: boolean;
  alert_message: string;
}

export interface NewTaskProps {
  name: string;
  desc: string;
  date: string;
  active: boolean;
}
