import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      addStockQty,
      referenceNumber,
      receivingWarehouseId,
      notes,
      itemId,
      supplierId
    } = await request.json();

    // Get the item
    const itemToUpdate = await db.item.findUnique({
      where: {
        id: itemId,
      },
    });

    const currentItemQty = itemToUpdate.quantity;
    const newQty = parseInt(currentItemQty) + parseInt(addStockQty);

    // Modify the item
    const updatedItem = await db.item.update({
      where: {
        id: itemId,
      },
      data: {
        quantity: newQty,
      },
    });
// Get The Warehouse
    const warehouse=await db.warehouse.findUnique({
      where:{
        id:receivingWarehouseId
      }
    })

    // current stock
    const currentWarehouseStock=warehouse.stockQty
    const newStockQty = parseInt(currentWarehouseStock) + parseInt(addStockQty)

    // updated stock
    const updatedWarehouse=await db.warehouse.update({
      where:{
        id:receivingWarehouseId
      },
      data:{
        stockQty:newStockQty
      }
    })

    console.log(updatedItem)

    const adjustment = await db.addStockAdjustment.create({
      data: {
        itemId,
        referenceNumber,
        addStockQty: parseInt(addStockQty),
        receivingWarehouseId,
        notes,
        supplierId
      },
    });

    // Affect  the item add

    // Affect  the item warehouse

    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed To New Adjustment",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const adjustments = await db.addStockAdjustment.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
    });
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed To fetch adjustments",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deleteAdjustment = await db.addStockAdjustment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteAdjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to delete Adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
