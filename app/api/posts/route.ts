import { NextResponse } from "next/server"

const posts = [
    {title: "1234", id:1},
    {title: "wqewerwerfwer", id:2},
    {title: "54334534", id:3}
]

export const GET = async(req: Request) => {
    const {searchParams} = new URL(req.url)

    const query =  searchParams.get('query')

    console.log(query);
    
    


    return NextResponse.json(posts)
}

export const POST  = async (req: Request) => {
    const data = await req.json()

    return NextResponse.json(data)
}