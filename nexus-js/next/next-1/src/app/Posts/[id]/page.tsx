import { Suspense } from "react";
import { PostInfo } from "../[id]/conponentes/post";

export default async function hendlePostId({
    params
}: {
    params: { id: string };
}) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">Detalhes do post: {params.id}</h1>
            <Suspense fallback={'caregando...'}>
                <PostInfo id={params.id} />
            </Suspense>
        </div>
    );
}
