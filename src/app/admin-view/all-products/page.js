import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";





export default async function AdminAllroducts() {

    const allAdminProducts = await getAllAdminProducts()
    return (
        <CommonListing data={allAdminProducts && allAdminProducts.data} />
    )
}