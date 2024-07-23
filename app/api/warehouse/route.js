// import db from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(request){
//     try {
//         const {title,location,type,description}=await request.json();
//         // const warehouse={title,location,type, description};

//         const warehouse= await db.warehouse.create({
//             data:{
//                 title,
//                 location,
//                 description,
//                 warehouseType:type
//             },
//         });


//         console.log(warehouse)
//         return NextResponse.json(warehouse)
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({
//             error,
//             message: "Failed To New Warehouse"
//         },{
//             status:500
//         })
        
//     }
// }


import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, location, type, description } = await request.json();

        console.log("Incoming data:", { title, location, type, description });

        // Validate required fields
        if (!title || !type) {
            return NextResponse.json({
                error: "Missing required fields",
                message: "Title and type are required"
            }, { status: 400 });
        }

        const warehouse = await db.warehouse.create({
            data: {
                title,
                location: location || null,
                warehouseType: type,
                description: description || null
            },
        });

        console.log("Created warehouse:", warehouse);
        return NextResponse.json(warehouse);
    } catch (error) {
        console.error("Error details:", error);
        return NextResponse.json({
            error: error.message,
            message: "Failed To Create New Warehouse"
        }, {
            status: 500
        });
    }
}