export interface Task {
  id: number;
  task: string;
  desc: string;
  completed: boolean;
  active: boolean;
  status: string;
}

export interface TaskState {
  all_tasks: Task[];
  completed_tasks: Task[];
  active_tasks: Task[];
  task_count: number;
  pending: false;
  sort: string;
  categories: {};
}
