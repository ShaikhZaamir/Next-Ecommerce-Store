export default function Footer() {
    return (
        <footer className="w-full bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

                {/* Brand */}
                <div>
                    <h3 className="font-semibold text-gray-900">StoreApp</h3>
                    <p className="mt-2 text-gray-600">
                        Premium products for modern living.
                    </p>
                </div>

                {/* Shop */}
                <div>
                    <h4 className="font-medium text-gray-900">Shop</h4>
                    <ul className="mt-3 space-y-2 text-gray-600">
                        <li>All Products</li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-medium text-gray-900">Company</h4>
                    <ul className="mt-3 space-y-2 text-gray-600">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-medium text-gray-900">Support</h4>
                    <ul className="mt-3 space-y-2 text-gray-600">
                        <li>FAQs</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="text-center text-xs text-gray-500 pb-6">
                © {new Date().getFullYear()} StoreApp. All rights reserved.
            </div>
        </footer>
    );
}