import { useState } from "react";
import Input from "./input";

function AddTask({onAddTaskSubmit}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return (
        <div className="space-y-3 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input 
                type="text"
                placeholder="Digite o titulo da tarefa"
                value={title}
                onChange={(e) =>  setTitle(e.target.value)}
            />
             <Input
                type="text" 
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(e) =>  setDescription(e.target.value)}
            />
            <button
              onClick={() => {
                if(title.trim() && description.trim()) {
                    onAddTaskSubmit(title, description); 
                    setTitle(""); 
                    setDescription(""); 
                }else{
                    alert("Por favor, preencha todos os campos!"); 
                }
              }}
            className="bg-slate-500 text-white p-2 rounded-md w-full hover:bg-slate-400 transition-colors duration-">
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;