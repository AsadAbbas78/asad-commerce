import { allProductFetherFromSanity } from "@/components/utils/apicalling";
import LandingPage from "@/components/views/LandingPage";
import { allProductFetherFromSanityType } from "@/components/utils/type";
import { log } from "console";
import ProductGrid from "@/components/views/ProductGrid";
import Shopdetails from "@/components/views/Shopdetails";

export default async function Home() {
  let data = await allProductFetherFromSanity() as allProductFetherFromSanityType ;
  
  return (
  <main>

<LandingPage/>
<ProductGrid  productData={data.result.slice(0,3)}/>
<Shopdetails/>
    
  </main>
  );
}
