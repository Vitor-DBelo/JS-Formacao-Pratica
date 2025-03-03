// "use client"; // Se for um Client Component, descomente

import Link from "next/link";

export interface DataProps {
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
        const response = await fetch("https://dummyjson.com/posts", {
            cache: 'force-cache',
            next: {
                revalidate: 60,
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar os posts");
        }

        const data: ResponseData = await response.json();

   

        return (
            <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Lista de Posts</h1>
                
                {data.posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="text-gray-600 mt-2">{post.body}</p>

                        
                        <Link 
                            href={`/Posts/${post.id}`} 
                            className="inline-block mt-3 text-blue-600 hover:underline font-semibold"
                        >
                            ➜ Veja os detalhes
                        </Link>
                    </div>
                ))}
            </div>
        );
       
    } catch (error) {
        console.error("Erro:", error);
        return <h1 className="text-red-500 text-center mt-4">Erro ao carregar os posts.</h1>;
    }
}
