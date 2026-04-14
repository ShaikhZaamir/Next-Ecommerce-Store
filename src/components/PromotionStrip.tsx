export default function PromotionStrip() {
    return (
        <section className="w-full border-gray-200 bg-white pt-8">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <div>
                        <p className="text-xl font-semibold text-black">10K+</p>
                        <p className="text-gray-600 text-sm">Happy Customers</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold text-black">50+</p>
                        <p className="text-gray-600 text-sm">Products</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold text-black">99%</p>
                        <p className="text-gray-600 text-sm">Satisfaction</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold text-black">24/7</p>
                        <p className="text-gray-600 text-sm">Support</p>
                    </div>

                </div>

            </div>
        </section>
    );
}