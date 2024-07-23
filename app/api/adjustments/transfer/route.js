import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {
            transferStockQty,
            itemId,
            givingWarehouseId,
            receivingWarehouseId,
            notes,
            referenceNumber
        }=await request.json();

        const adjustment=await db.transferStockAdjustment.create({
            data:{
            itemId,
            referenceNumber,
            transferStockQty:parseInt(transferStockQty),
            givingWarehouseId,
            receivingWarehouseId,
            notes
            }
        });
        
        console.log(adjustment)
        return NextResponse.json(adjustment)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed To New Adjustment"
        },{
            status:500
        })
        
    }
}