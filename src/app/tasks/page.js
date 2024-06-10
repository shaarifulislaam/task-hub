
import AddTask from '@/components/addTask/addTask';
import TodoList from '@/components/todoList/todoList';



const TasksPage = async () => {
    const response = await fetch("http://localhost:5000/tasks", {
    cache: "no-store",
  });
  const tasks = await response?.json();

   
    return (
      <div className="max-w-[70%] w-100 mx-auto ">
        <div className="flex flex-col my-5 gap-4 text-center">
          <h1 className="text-[36px] font-[600]">Todo List App</h1>
          <AddTask />
          <TodoList tasks={tasks} />
        </div>
      </div>
    );
};

export default TasksPage;