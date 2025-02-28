"use client";

import { useEffect, useState } from "react";

export default function PageCliente() {
    const [posts, setPosts] = useState<any[]>([]); 

    useEffect(() => {
        fetch('https://dummyjson.com/posts') 
            .then(res => res.json()) 
            .then(data => setPosts(data.posts)) 
            .catch(err => console.error("Erro:", err)); 
    }, []); // A requisição é feita uma vez, ao carregar o componente

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Página do Cliente</h1>
            <div className="space-y-4">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
