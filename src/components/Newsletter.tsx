"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-10 bg-black">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-white/10 rounded-full p-4">
                        <Mail className="w-10 h-10 text-white" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Get Exclusive Deals
                </h2>

                {/* Description */}
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter and get 20% off your first order plus early access to sales.
                </p>

                {/* Form */}
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">

                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-4 text-lg bg-white text-black outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition"
                    >
                        Subscribe
                    </button>

                </form>

                {/* Footer text */}
                <p className="text-white/60 text-sm mt-4">
                    No spam, unsubscribe anytime
                </p>

            </div>
        </section>
    );
}