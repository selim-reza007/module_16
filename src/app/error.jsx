"use client"

import Header from "./components/header";

export default function Error() {

    return (
        <div className="w-full">
            <Header title={"Error page"} />
            <div className="h-72 max-w-6xl mx-auto flex items-center">
                <p className="text-4xl font-bold text-red-600 text-center w-full">Something went wrong!</p>
            </div>
        </div>
    );
}