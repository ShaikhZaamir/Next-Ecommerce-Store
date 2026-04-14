export default function Hero() {
    return (
        <section className="w-full h-[70vh] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                    Elevate Your Style
                </h1>

                <p className="mt-4 max-w-xl text-gray-600 text-lg">
                    Discover premium collections crafted for modern living.
                </p>

                <button className="mt-6 px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition">
                    Shop Now
                </button>
            </div>
        </section>
    );
}