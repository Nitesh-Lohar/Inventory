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

export async function GET(request){
    try {
        const categories = await db.category.findMany({
            orderBy:{
                createdAt: 'desc', // 'asc' for ascending, 'desc' for descending
            }
        });
        return NextResponse.json(categories)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To fetch Categories"
        },{
            status:500
        }) 
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deleteCategory = await db.category.delete({
            where:{
                id
            }
        })
        console.log(deleteCategory);
        return NextResponse.json(deleteCategory);
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To fetch Category"
        },{
            status:500
        }) 
    }
}