import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      phone,
      email,
      address,
      contactPerson,
      supplierCode,
      taxID,
      paymentTerms,
      notes,
    } = await request.json();


    const supplier = await db.supplier.create({
      data: {
        title,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        taxID,
        paymentTerms,
        notes,
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
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed To Create Supplier",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const suppliers = await db.supplier.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
    });
    return NextResponse.json(suppliers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed To fetch Brands",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request){
  try {
      const id=request.nextUrl.searchParams.get("id");
      const deleteSupplier = await db.supplier.delete({
          where:{
              id
          }
      })
      return NextResponse.json(deleteSupplier);
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({
          error,
          message: "Failed to delete Item"
      },{
          status:500
      }) 
  }
}
