import { allProductFetherFromSanity } from "@/components/utils/apicalling";
import LandingPage from "@/components/views/LandingPage";
import { log } from "console";

export default async function Home() {
  let data = await allProductFetherFromSanity();
  console.log("data:" , data);
  
  return (
  <main>

<LandingPage/>
    
  </main>
  );
}
