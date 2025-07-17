import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";
import CELPIPPricing from "../_components/test-series-packages/CELPIPPricing";
import IeltsPricing from "../_components/test-series-packages/IeltsPricing";
import PTEPricing from "../_components/test-series-packages/PTEPricing";
import TOEFLEOETPricing from "../_components/test-series-packages/TOEFLOETPricing";

export default function TestSeriesPackagesPage() 
{
    return(
<>
         <Navigation />
         < IeltsPricing/>
         <PTEPricing/>
         <TOEFLEOETPricing/>
         <CELPIPPricing/>
         <Footer/>
         </>

    )
}