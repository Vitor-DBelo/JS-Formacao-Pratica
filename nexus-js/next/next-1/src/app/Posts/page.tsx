// "use client"; // Se for um Client Component, descomente

interface DataProps {
    id: number;
    title: string;
    body: string;
    reactions: {
        likes: number;
        dislikes: number;
    };
    view: number;
    userId: number;
}

interface ResponseData {
    posts: DataProps[];
}

// Server Component
export default async function Posts() {
    try {
        const response = await fetch("https://dummyjson.com/posts");

        if (!response.ok) {
            throw new Error("Erro ao buscar os posts");
        }
        const data: ResponseData = await response.json();
        console.log(data);   
        return (
            <div className="bg-gray-100 p-6 rounded-lg">
                {data.posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        );
       
    } catch (error) {
        console.error("Erro:", error);
        return <h1>Erro ao carregar os posts.</h1>;
    }

}
