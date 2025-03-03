import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){

    const authenticated = false;

    if(req.nextUrl.pathname.startsWith('/contatos') && !authenticated){
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}