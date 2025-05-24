import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Produk() {
    return (
        <div>
             <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                       <h1 className="text-2xl font-bold">Admin Produk</h1>
                    </div>
                </div>

        </div>
    );
}

// Importing the layout for the page
Produk.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;
