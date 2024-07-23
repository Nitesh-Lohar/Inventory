import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {transferStockQty,recievingBranchId,notes}=await request.json();
        const adjustment={transferStockQty,recievingBranchId,notes};
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