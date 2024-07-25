import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStockQty,
      itemId,
      givingWarehouseId,
      receivingWarehouseId,
      notes,
      referenceNumber,
    } = await request.json();

    // the giving Warehouse

    const givingWarehouse = await db.warehouse.findUnique({
      where: {
        id: givingWarehouseId,
      },
    });
    // Get Current Stock
    const currentGivingWarehouseStock = givingWarehouse.stockQty;

    if (parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)) 
    {
      const newStockForGivingWarehouse =
        parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty);
      // Update Stock
      const updatedGivingWarehouse = await db.warehouse.update({
        where: {
          id: givingWarehouseId,
        },
        data: {
          stockQty: newStockForGivingWarehouse,
        },
      });

      // Get the recieving warehouse
      const recievingWarehouse = await db.warehouse.findUnique({
        where: {
          id: receivingWarehouseId,
        },
      });
      // Get Current Stock
      const currentRecievingWarehouseStock = recievingWarehouse.stockQty;
      const newStockForRecievingWarehouse =
        parseInt(currentRecievingWarehouseStock) + parseInt(transferStockQty);
      // Update Stock
      const updatedRecievingWarehouse = await db.warehouse.update({
        where: {
          id: receivingWarehouseId,
        },
        data: {
          stockQty: newStockForRecievingWarehouse,
        },
      });

      const adjustment = await db.transferStockAdjustment.create({
        data: {
          itemId,
          referenceNumber,
          transferStockQty: parseInt(transferStockQty),
          givingWarehouseId,
          receivingWarehouseId,
          notes,
        },
      });

      console.log(adjustment);
      return NextResponse.json(adjustment);
    }else{
        return NextResponse.json(
        {
            data:null,
            message:"Giving warehouse has not enough stock"
        },
        {status:409});
    }
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
    const adjustments = await db.transferStockAdjustment.findMany({
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
    const deleteAdjustment = await db.transferStockAdjustment.delete({
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
