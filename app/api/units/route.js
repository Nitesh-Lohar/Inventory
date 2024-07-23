import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title, abbreviation}=await request.json();
        // const unit={title, abbreviation};

        const unit= await db.unit.create({
            data:{
                title,
                abbreviation
            },
        });

        console.log(unit)
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To Create Unit"
        },{
            status:500
        })
        
    }
}

export async function GET(request){
    try {
        const units = await db.unit.findMany({
            orderBy:{
                createdAt: 'desc', // 'asc' for ascending, 'desc' for descending
            }
        });
        return NextResponse.json(units)
        
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