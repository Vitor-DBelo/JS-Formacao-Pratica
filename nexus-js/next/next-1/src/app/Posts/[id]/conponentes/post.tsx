import { DataProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch(`https://dummyjson.com/posts/${id}`);

     const data: DataProps = await response.json();

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
            <h3 className="text-gray-600">👁️ {data.view} visualizações</h3>
            <p className="text-gray-700 mt-2">{data.body}</p>
        </div>
    );
}
