import { useSearchParams } from "react-router-dom";

function TaskPrint(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return <>
    <div className="h-screen w-screen bg-slate-500 p-6  space-y-4">
        <div>
            <h1 className="text-3xl font-bold text-center text-white">
              Detalhes da tarefa
            </h1> 
        </div>
        <div className="bg-slate-200 p-4 rounded-md max-w-screen-sm mx-auto">
            <h1 className="text-slate-950 text-xl font-bold">titulo: {title}</h1>
            <h1 className="text-slate-950">Descrição: {description}</h1>
        </div>
    </div>
    
    </>
}
export default TaskPrint;