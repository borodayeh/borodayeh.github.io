export default function Footer() {
    return `
        <footer class="border-t border-gray-100 py-16">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h4 class="text-sm font-medium mb-4">ARCHIVE</h4>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            A comprehensive digital museum of brand identity design.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium mb-4">Explore</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">All Logos</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Collections</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Design Movements</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Timeline</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium mb-4">Resources</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Design Essays</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Case Studies</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Interview Archive</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Research Papers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium mb-4">Connect</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Contribute</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Contact</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Twitter</a></li>
                            <li><a href="#" class="text-gray-500 text-sm hover:text-black transition">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-6 md:mb-0">
                        <p class="text-sm text-gray-400">© 2023 Logo Archive. All rights reserved.</p>
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="text-sm text-gray-400 hover:text-black transition">Privacy</a>
                        <a href="#" class="text-sm text-gray-400 hover:text-black transition">Terms</a>
                        <a href="#" class="text-sm text-gray-400 hover:text-black transition">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
} 