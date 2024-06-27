import { allProductFetherFromSanity } from "@/components/utils/apicalling"
import { allProductFetherFromSanityType } from "@/components/utils/type"
import ProductGrid from "@/components/views/ProductGrid"

const Products =async () => {
let data = await allProductFetherFromSanity () as allProductFetherFromSanityType
  return (
    <div>
        <h1 className="text-3xl text-center text-gray-600 font-semibold">All Products</h1>
        <p className="text-center">Explore what we have</p>
        <ProductGrid  productData={data.result}/>
        
        </div>
  )
}

export default Products