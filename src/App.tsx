import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as SonnerToaster } from "sonner";
import Home from "./app/page";
import { TooltipProvider } from "@radix-ui/react-tooltip";
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <div className="min-h-screen bg-white text-black">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/home" element={<Home />} />

                        </Routes>
                    </BrowserRouter>
                </div>
            </TooltipProvider>
        </QueryClientProvider>
    )
}

export default App