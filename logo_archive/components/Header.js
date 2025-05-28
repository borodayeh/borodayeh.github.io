export default function Header() {
    return `
        <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div class="container mx-auto px-6 py-5">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl tracking-tight font-light">ARCHIVE</h1>
                    <nav class="hidden md:flex space-x-8">
                        <a href="#" class="nav-link text-sm font-light">Logos</a>
                        <a href="#" class="nav-link text-sm font-light">History</a>
                        <a href="#" class="nav-link text-sm font-light">Collections</a>
                        <a href="#" class="nav-link text-sm font-light">About</a>
                    </nav>
                    <button class="md:hidden">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M3 6H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M3 18H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    `;
} 