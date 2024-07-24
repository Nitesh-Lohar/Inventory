import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const supplier = await db.supplier.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed To fetch supplier",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title,phone,email,address,contactPerson,supplierCode,paymentTerms,taxID,notes } = await request.json();
    const supplier = await db.supplier.update({
      where: {
        id,
      },
      data: {
        title,phone,email,address,contactPerson,supplierCode,paymentTerms,taxID,notes
      },
    });
    console.log(supplier);
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed To Update Supplier",
      },
      {
        status: 500,
      }
    );
  } 
}
