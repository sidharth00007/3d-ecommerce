import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";

const stripe = require("stripe")(
    "sk_test_51OBHJMSISi1OTtQbHg5RaIuyMjN9xpd5WzQCdT5MNyLRP5ITIbPYsai25taIZjkBnOZp25TDaIm21qqyD2OczLaX000AQ96z8f"
);

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        const isAuthUser = await AuthUser(req);
        if (isAuthUser) {
            const res = await req.json();

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"] , 
                line_items: res,
                mode: "payment",
                success_url: "https://3d-ecommerce-git-master-sidharth00007.vercel.app/checkout" + "?status=success",
                cancel_url: "https://3d-ecommerce-git-master-sidharth00007.vercel.app/checkout" + "?status=cancel",
            });

            return NextResponse.json({
                success: true,
                id: session.id,
            });
        } else {
            return NextResponse.json({
                success: true,
                message: "You are not authenticated",
            });
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            status: 500,
            success: false,
            message: "Something went wrong ! Please try again",
        });
    }
}
