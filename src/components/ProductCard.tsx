import { Heart } from "lucide-react";

type Product = {
    id: number;
    title: string;
    price: number;
    oldPrice?: number | null;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="rounded-xl overflow-hidden bg-gray-100">

            {/* Image Section */}
            <div className="relative rounded-lg bg-gradient-to-br from-gray-300 to-gray-500 h-56 flex items-center justify-center">

                {/* Placeholder Image */}
                <img src="/tshirt.jpg" alt={product.title} className="w-full h-full object-cover" />
            </div>

            {/* Info Card */}
            <div className="relative -mt-5 bg-white rounded-xl z-10 p-4 shadow-sm">

                {/* Title */}
                <h3 className="font-semibold text-gray-900">
                    {product.title}
                </h3>

                {/* Description (static for now) */}
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    Crossing hardwood comfort with off-court flair. 80s-inspired construction.
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4">

                    <div>
                        <p className="text-xs text-gray-400">PRICE</p>
                        <p className="font-bold text-lg">
                            ₹{product.price}
                        </p>
                    </div>

                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-black transition">
                        Add to cart
                    </button>

                </div>

            </div>
        </div>
    );
}