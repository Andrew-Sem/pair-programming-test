import {ThemeProvider} from "./components/theme-provider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BooksList} from "@/components/books-list.tsx";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <div className={"container flex flex-col my-8"}>
                    <BooksList/>
                </div>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
