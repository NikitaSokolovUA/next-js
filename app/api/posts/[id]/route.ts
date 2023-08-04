import { NextResponse } from "next/server"
import {headers, cookies} from 'next/headers'
import {redirect} from 'next/navigation'

export const DELETE = async(req: Request, {params}: {params: {id: string}})=> {
    const id = params.id

    const headersLists =  headers()

    const type =  headersLists.get("Content-Type")


    const cookiesList =  cookies()
    const cooka =  cookiesList.get('Cookie_1')?.value

    // redirect("/blog")  redirect to blog

    return NextResponse.json({id, type, cooka})
}