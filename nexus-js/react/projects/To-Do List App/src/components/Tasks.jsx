import { ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
  const nav = useNavigate();
 
  
  function onSeeDetailsClick(task){
    const query = new URLSearchParams();
    query.set("title",task.title);
    query.set("description",task.description);
    nav(`/print?${query.toString()}`)
  }

  return (
    <div>
      <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            {/* Botão para alternar status */}
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.title}
            </button>

            {/* Botão com ChevronRight */}
            <button 
              onClick={() => {
                onSeeDetailsClick(task)
              }}
              className="bg-slate-400 p-2 rounded-md text-white hover:scale-110 transition-transform duration-200"
            >
              <ChevronRight />
            </button>

            {/* Botão com TrashIcon */}
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-red-400 p-2 rounded-md text-white hover:scale-110 transition-transform duration-200"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
