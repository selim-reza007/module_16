import Header from "./components/header";

export default function NotFound() {

    return (
        <div className="w-full">
            <Header title={"Not found"} />
            <div className="h-72 max-w-6xl mx-auto flex items-center">
                <p className="text-4xl font-bold text-red-600 text-center w-full">The page is not available at this moment!</p>
            </div>
        </div>
    );
}