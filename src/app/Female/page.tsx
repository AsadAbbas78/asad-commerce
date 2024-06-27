import {
  allProductFetherFromSanity,
  femaleProductsFromSanity,
} from "@/components/utils/apicalling";
import { allProductFetherFromSanityType } from "@/components/utils/type";
import ProductGrid from "@/components/views/ProductGrid";

const Female = async () => {

  const data = await femaleProductsFromSanity() as allProductFetherFromSanityType;
  
  return (
    <div>
      <ProductGrid productData={data.result} />
    </div>
  );
};

export default Female;