import {
    allProductFetherFromSanity,
    kidsProductsFromSanity,
  } from "@/components/utils/apicalling";
  import { allProductFetherFromSanityType } from "@/components/utils/type";
  import ProductGrid from "@/components/views/ProductGrid";
  
  const  Kids= async () => {
    const data = await kidsProductsFromSanity() as allProductFetherFromSanityType;
    
    return (
      <div>
        <ProductGrid productData={data.result} />
      </div>
    );
  };
  
  export default Kids;