import Categories from "@/app/(back-end)/dashboard/inventory/categories/page";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    const item = await db.item.create({
      data: {
        title: itemData.title,
        categoryId: itemData.categoryId,
        sku: itemData.sku,
        barcode: itemData.barcode,
        quantity: parseInt(itemData.qty),
        unitId: itemData.unitId,
        brandId: itemData.brandId,
        supplierId: itemData.supplierId,
        buyingPrice: parseFloat(itemData.buyingPrice),
        sellingPrice: parseFloat(itemData.sellingPrice),
        reOrderPoint: parseInt(itemData.reOrderPoint),
        warehouseId: itemData.warehouseId,
        imageUrl: itemData.imageUrl,
        weight: parseFloat(itemData.weight),
        dimensions: itemData.dimensions,
        taxRate: parseFloat(itemData.taxRate),
        description: itemData.description,
        notes: itemData.notes,
      },
    });
    console.log(item)
    return NextResponse.json(item);

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed To New Item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request){
  try {
      const items = await db.item.findMany({
          orderBy:{
              createdAt: 'desc', // 'asc' for ascending, 'desc' for descending
          },
          include:{
            category:true, //returns all FIELDS for categories
            supplier:true, //returns all supplioers FIELDS
          }
      });
      return NextResponse.json(items)
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({
          error,
          message: "Failed To fetch Items"
      },{
          status:500
      }) 
  }
}


export async function DELETE(request){
  try {
      const id=request.nextUrl.searchParams.get("id");
      const deleteItem = await db.item.delete({
          where:{
              id
          }
      })
      return NextResponse.json(deleteItem);
      
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
