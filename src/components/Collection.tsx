import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import ProductCard from "@/components/ProductCard";

export default function Collection() {
    const products = [
        {
            id: 1,
            title: "Title",
            price: 1999,
            oldPrice: 2499,
        },
        {
            id: 2,
            title: "Title",
            price: 2999,
            oldPrice: null,
        },
        {
            id: 3,
            title: "Title",
            price: 1499,
            oldPrice: 1999,
        },
        {
            id: 4,
            title: "Title",
            price: 999,
            oldPrice: null,
        },
    ];

    return (
        <section className="w-full py-12 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-semibold text-black">
                        Latest Collection
                    </h2>

                    <Link href="/products" className="text-sm underline">
                        View All
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="text-center mt-12">
                    <Link href="/products">
                        <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition">
                            View All Products
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}