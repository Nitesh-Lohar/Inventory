import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, phone, email, address,contactPerson, supplierCode,taxID,paymentTerms,notes } = await request.json();

        console.log("Incoming data:", { name, phone, email, address,contactPerson, supplierCode,taxID,paymentTerms,notes });

        const supplier = await db.supplier.create({
            data: {
                name,
                phone,
                email,
                address,
                contactPerson,
                supplierCode,
                taxID,
                paymentTerms,
                notes
            },
        });

        console.log("Created Supplier:", supplier);
        return NextResponse.json(supplier);
    } catch (error) {
        console.error("Error details:", error);
        console.error("Error name:", error.name);
        console.error("Error cause:", error.cause);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error("Prisma error code:", error.code);
        }
        return NextResponse.json({
            error: error.message,
            message: "Failed To Create Supplier"
        }, {
            status: 500
        });
    }

    
    // {
    //     console.error("Error details:", error);
    //     return NextResponse.json({
    //         error: error.message,
    //         message: "Failed To Create Supplier"
    //     }, {
    //         status: 500
    //     });
    // }
}