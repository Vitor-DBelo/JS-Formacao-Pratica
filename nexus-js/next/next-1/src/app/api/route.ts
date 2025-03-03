import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name: 'Sopa de Tucano',
        instagram: '@tucanogourmet',
        youtube: 'Receitas Exóticas'
    });
}