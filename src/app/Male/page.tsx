import {
  allProductFetherFromSanity,
  maleProductsFromSanity,
} from "@/components/utils/apicalling";
import { allProductFetherFromSanityType } from "@/components/utils/type";
import ProductGrid from "@/components/views/ProductGrid";

const Male = async () => {
  const data = await maleProductsFromSanity() as allProductFetherFromSanityType;
  
  return (
    <div>
      <ProductGrid productData={data.result} />
    </div>
  );
};

export default Male;
