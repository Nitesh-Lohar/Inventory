import { NextResponse } from "next/server";


import db from "@/lib/db";
// const prisma = new PrismaClient();


export async function POST(request){
    try {
        const {title, description}=await request.json();

        // const category={title, description};

        const category= await db.category.create({
            data:{
                title : title,
                description: description
            },
        });

        console.log(category)
        return NextResponse.json(category)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To Create Category"
        },{
            status:500
        })
        
    }
}

