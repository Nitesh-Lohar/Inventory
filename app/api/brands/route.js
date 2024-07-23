import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title}=await request.json();
        const brand= await db.brand.create({
            data:{
                title
            },
        });
        console.log(brand)
        return NextResponse.json(brand)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To Create Brand"
        },{
            status:500
        })
        
    }
}

export async function GET(request){
    try {
        const brands = await db.brand.findMany({
            orderBy:{
                createdAt: 'desc', // 'asc' for ascending, 'desc' for descending
            }
        });
        return NextResponse.json(brands)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To fetch Brands"
        },{
            status:500
        }) 
    }
}