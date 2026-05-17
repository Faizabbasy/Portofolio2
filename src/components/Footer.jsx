export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-10 px-5">
            <div className="max-w-6xl mx-auto text-center">
                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © {currentYear} Faiz.dev. All rights reserved.
                </p>
                
                {/* Social Links (opsional) */}
                <div className="flex justify-center gap-4 mt-3">
                    <a 
                        href="#" 
                        className="text-gray-500 hover:text-blue-400 transition text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <span className="text-gray-600">•</span>
                    <a 
                        href="#" 
                        className="text-gray-500 hover:text-pink-400 transition text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <span className="text-gray-600">•</span>
                    <a 
                        href="#" 
                        className="text-gray-500 hover:text-green-400 transition text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>

                {/* Credit */}
                <p className="text-gray-600 text-xs mt-4">
                    Built with  React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}