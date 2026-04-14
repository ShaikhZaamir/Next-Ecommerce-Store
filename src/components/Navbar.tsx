"use client";

import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-black">
                        StoreApp
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-medium hover:text-gray-600">
                            Home
                        </Link>
                        <Link href="/store" className="font-medium hover:text-gray-600">
                            Store
                        </Link>
                        <Link href="/aboutus" className="font-medium hover:text-gray-600">
                            About Us
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">

                        {/* Cart */}
                        <button className="relative">
                            <ShoppingCart className="w-5 h-5" />
                        </button>

                        {/* User */}
                        <button className="hidden md:flex">
                            <User className="w-5 h-5" />
                        </button>

                        {/* Mobile menu */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 space-y-4">

                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>

                        <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                            Products
                        </Link>

                        <button
                            onClick={() => {
                                document
                                    .getElementById("collection")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                setIsMenuOpen(false);
                            }}
                            className="text-left"
                        >
                            Categories
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}