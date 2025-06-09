import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as SonnerToaster } from "sonner";
import LanguageLandingPage from "~/app/_components/Hero";
import { TooltipProvider } from "@radix-ui/react-tooltip";
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <div className="min-h-screen bg-white text-black">
                    <BrowserRouter>
                        <Routes>
                            <Link href="/home" children={<LanguageLandingPage />} />

                        </Routes>
                    </BrowserRouter>
                </div>
            </TooltipProvider>
        </QueryClientProvider>
    )
}

export default App