---
layout: default
title: "Home"
description: "Empowering communities through transparent access to public information"
---

<!-- Hero Section -->
<section id="home" class="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
    <!-- Digital grid background -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,25,25,0.8)_0%,rgba(0,0,0,1)_100%)]"></div>
    
    <!-- Animated grid lines -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute inset-0" style="background-image: linear-gradient(to right, rgba(30,64,175,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,64,175,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
        
        <!-- Horizontal scanning line -->
        <div id="scanning-line" class="absolute left-0 w-full h-[2px] bg-blue-400/50 blur-[2px]" style="top: 50%; box-shadow: 0 0 15px 2px rgba(59, 130, 246, 0.5);"></div>
    </div>
    
    <!-- Data stream animation -->
    <div class="absolute inset-0 overflow-hidden">
        <div id="data-stream-container" class="absolute inset-0 flex justify-between opacity-30">
            <!-- Data streams will be added by JavaScript -->
        </div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10 container mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Left side: Text content -->
            <div class="space-y-6 text-left">
                <div class="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-800/50 rounded-full px-4 py-1 text-blue-400 text-sm font-mono">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span>v1.0.2 / LIVE DATA SYSTEM</span>
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight">
                    <span class="block">Unlocking</span>
                    <span class="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">Government Data</span>
                    <span class="block mt-2">For Everyone</span>
                </h1>
                
                <p class="text-gray-400 text-lg md:text-xl max-w-xl">
                    Advanced analytics and visualization tools that transform public information into actionable insights.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#datasets" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-md transition-all duration-300 group">
                        <span>Explore Datasets</span>
                        <i data-lucide="arrow-right" class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                    <a href="#about" class="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md border border-gray-700 transition-all duration-300">
                        <i data-lucide="info" class="mr-2 h-5 w-5"></i>
                        <span>About Our Mission</span>
                    </a>
                </div>
                
                <!-- Stats with animated counters -->
                <div class="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-white" id="counter-datasets">0</div>
                        <div class="text-sm text-gray-500">Datasets</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-white" id="counter-apis">0</div>
                        <div class="text-sm text-gray-500">API Endpoints</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-white" id="counter-users">0</div>
                        <div class="text-sm text-gray-500">Active Users</div>
                    </div>
                </div>
            </div>
            
            <!-- Right side: Visual element -->
            <div class="hidden md:block relative">
                <!-- 3D data visualization sphere -->
                <div class="relative w-full aspect-square max-w-md mx-auto">
                    <!-- Glowing orb -->
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/20 via-blue-600/10 to-cyan-700/20 blur-xl"></div>
                    
                    <!-- Data visualization sphere -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="relative w-4/5 h-4/5">
                            <!-- Rotating rings -->
                            <div class="absolute inset-0 border border-blue-500/30 rounded-full animate-spin" style="animation-duration: 20s;"></div>
                            <div class="absolute inset-[10%] border border-cyan-500/20 rounded-full animate-spin" style="animation-duration: 15s; animation-direction: reverse;"></div>
                            <div class="absolute inset-[20%] border border-teal-500/20 rounded-full animate-spin" style="animation-duration: 25s;"></div>
                            
                            <!-- Data points -->
                            <div id="data-points-container" class="absolute inset-0">
                                <!-- Data points will be added by JavaScript -->
                            </div>
                            
                            <!-- Core -->
                            <div class="absolute inset-[40%] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-80 shadow-lg shadow-blue-500/50 animate-pulse" style="animation-duration: 3s;"></div>
                        </div>
                    </div>
                    
                    <!-- Floating data cards -->
                    <div class="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-lg shadow-blue-900/20 w-48 transform rotate-3 animate-float" style="animation-duration: 6s;">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="bar-chart-2" class="h-4 w-4 text-blue-400"></i>
                            <span class="text-xs font-semibold text-white">Budget Transparency</span>
                        </div>
                        <div class="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div class="h-full bg-blue-500 rounded-full" style="width: 78%;"></div>
                        </div>
                        <div class="mt-1 flex justify-between text-xs">
                            <span class="text-gray-500">2023</span>
                            <span class="text-blue-400">78%</span>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-lg shadow-blue-900/20 w-48 transform -rotate-6 animate-float" style="animation-duration: 7s; animation-delay: 1s;">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="file-text" class="h-4 w-4 text-teal-400"></i>
                            <span class="text-xs font-semibold text-white">Public Records</span>
                        </div>
                        <div class="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div class="h-full bg-teal-500 rounded-full" style="width: 92%;"></div>
                        </div>
                        <div class="mt-1 flex justify-between text-xs">
                            <span class="text-gray-500">Q2 2024</span>
                            <span class="text-teal-400">92%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Terminal-like element at the bottom -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg">
        <div class="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg overflow-hidden mx-4">
            <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="text-xs text-gray-400 font-mono">transparency@gov:~</div>
            </div>
            <div class="p-4 font-mono text-sm">
                <div class="flex items-start">
                    <span class="text-green-400 mr-2">$</span>
                    <div class="text-gray-300">
                        <span id="terminal-text"></span>
                        <span class="inline-block w-2 h-4 bg-blue-400 animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Animated counter function
    function animateCounter(elementId, targetValue) {
        const element = document.getElementById(elementId);
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        const startValue = 0;
        
        function updateCounter() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            
            if (elapsedTime < duration) {
                const progress = elapsedTime / duration;
                const currentValue = Math.floor(startValue + progress * (targetValue - startValue));
                element.textContent = currentValue.toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = targetValue.toLocaleString();
            }
        }
        
        updateCounter();
    }
    
    // Start counter animations with delay
    setTimeout(() => {
        animateCounter('counter-datasets', 50000);
        animateCounter('counter-apis', 320);
        animateCounter('counter-users', 12500);
    }, 500);
    
    // Scanning line animation
    const scanningLine = document.getElementById('scanning-line');
    let scanDirection = 1;
    let scanPosition = 50;
    
    function animateScanningLine() {
        scanPosition += 0.2 * scanDirection;
        
        if (scanPosition > 90) {
            scanDirection = -1;
        } else if (scanPosition < 10) {
            scanDirection = 1;
        }
        
        scanningLine.style.top = `${scanPosition}%`;
        requestAnimationFrame(animateScanningLine);
    }
    
    animateScanningLine();
    
    // Create data streams
    const dataStreamContainer = document.getElementById('data-stream-container');
    const streamCount = 10;
    
    for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement('div');
        stream.className = 'relative w-[1px] h-full bg-blue-900/30';
        
        const streamSpeed = 1 + Math.random() * 3;
        const streamDelay = Math.random() * 5;
        
        // Add data bits to each stream
        const bitCount = 5 + Math.floor(Math.random() * 10);
        for (let j = 0; j < bitCount; j++) {
            const bit = document.createElement('div');
            const bitSize = 1 + Math.floor(Math.random() * 3);
            const bitPosition = Math.random() * 100;
            const bitColor = Math.random() > 0.7 ? 'bg-blue-400' : 'bg-cyan-400';
            
            bit.className = `absolute w-${bitSize} h-${bitSize} ${bitColor} rounded-full animate-dataflow`;
            bit.style.top = `${bitPosition}%`;
            bit.style.animationDuration = `${streamSpeed}s`;
            bit.style.animationDelay = `${streamDelay + j * 0.2}s`;
            
            stream.appendChild(bit);
        }
        
        dataStreamContainer.appendChild(stream);
    }
    
    // Create data points for the sphere
    const dataPointsContainer = document.getElementById('data-points-container');
    const pointCount = 30;
    
    for (let i = 0; i < pointCount; i++) {
        const point = document.createElement('div');
        const size = 1 + Math.floor(Math.random() * 2);
        const distance = 30 + Math.random() * 40;
        const angle = Math.random() * 360;
        const verticalAngle = Math.random() * 360;
        
        const x = 50 + distance * Math.cos(angle * Math.PI / 180) * Math.sin(verticalAngle * Math.PI / 180);
        const y = 50 + distance * Math.sin(angle * Math.PI / 180) * Math.sin(verticalAngle * Math.PI / 180);
        const z = distance * Math.cos(verticalAngle * Math.PI / 180);
        
        const color = Math.random() > 0.5 ? 'bg-blue-400' : 'bg-cyan-400';
        const pulseSpeed = 1 + Math.random() * 4;
        
        point.className = `absolute w-${size} h-${size} ${color} rounded-full animate-pulse`;
        point.style.left = `${x}%`;
        point.style.top = `${y}%`;
        point.style.transform = `translateZ(${z}px)`;
        point.style.animationDuration = `${pulseSpeed}s`;
        
        dataPointsContainer.appendChild(point);
    }
    
    // Terminal typing animation
    const terminalText = document.getElementById('terminal-text');
    const commands = [
        'accessing public data...',
        'analyzing government spending...',
        'generating transparency report...',
        'connecting to open data APIs...',
        'visualizing budget allocations...'
    ];
    let currentCommand = 0;
    let charIndex = 0;
    
    function typeCommand() {
        const command = commands[currentCommand];
        
        if (charIndex < command.length) {
            terminalText.textContent += command.charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, 50 + Math.random() * 50);
        } else {
            setTimeout(resetCommand, 2000);
        }
    }
    
    function resetCommand() {
        terminalText.textContent = '';
        charIndex = 0;
        currentCommand = (currentCommand + 1) % commands.length;
        setTimeout(typeCommand, 500);
    }
    
    setTimeout(typeCommand, 1000);
    
    // Add custom animation for floating elements
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dataflow {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-dataflow {
            animation: dataflow linear infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
            50% { transform: translateY(-10px) rotate(var(--rotation, 0deg)); }
        }
        .animate-float {
            animation: float ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
});
</script>

<!-- Mission Section
<section id="mission" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center space-y-4 mb-16">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Breaking down barriers to public information and creating a more transparent, accountable society.
            </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
            {% for mission in site.data.missions %}
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center space-y-4">
                <div class="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto">
                    <i data-lucide="{{ mission.icon }}" class="h-8 w-8 text-primary-500"></i>
                </div>
                <h3 class="text-xl font-semibold">{{ mission.title }}</h3>
                <p class="text-gray-600">{{ mission.description }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</section> -->

<!-- Featured Datasets Section
<section id="datasets" class="py-20">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center space-y-4 mb-16">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Datasets</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most popular and impactful public datasets.
            </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {% for dataset in site.data.datasets %}
            <div class="bg-white border rounded-lg hover:shadow-lg transition-shadow cursor-pointer group p-6 space-y-4">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-medium bg-primary-50 text-primary-500 px-2 py-1 rounded-full">
                        {{ dataset.category }}
                    </span>
                    <span class="text-xs text-gray-500">{{ dataset.updated }}</span>
                </div>
                <h3 class="text-lg font-semibold group-hover:text-primary-500 transition-colors">
                    {{ dataset.title }}
                </h3>
                <p class="text-sm text-gray-600">{{ dataset.description }}</p>
                <a href="{{ dataset.url | default: '#' }}" class="w-full bg-gray-50 group-hover:bg-primary-500 group-hover:text-white transition-colors px-4 py-2 rounded-md text-sm font-medium inline-flex items-center justify-center">
                    Explore Dataset 
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
</section> -->

<!-- Newsletter CTA Section -->
<!-- <section class="py-20 bg-primary-500 text-white">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center space-y-6">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Movement</h2>
            <p class="text-lg opacity-90 max-w-2xl mx-auto">
                Be part of the change. Subscribe to our newsletter and stay updated on the latest public data releases
                and transparency initiatives.
            </p>
            <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="#" method="POST">
                <input type="email" name="email" placeholder="Enter your email" required
                       class="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white">
                <button type="submit" class="bg-white text-primary-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                </button>
            </form>
            <p class="text-sm opacity-75">Join {{ site.stats.subscribers | default: "10,000+" }} advocates for government transparency</p>
        </div>
    </div>
</section> -->

<!-- Transparency Section -->
<section id="transparency" class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-12 lg:grid-cols-2 items-center">
            <div class="space-y-8 flex items-center justify-center">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-center">
                    Giving you <span class="bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text text-transparent animate-gradient">transparency</span> in your government.
                </h2>
            </div>
            <div class="relative flex justify-center lg:justify-end">
                <div class="relative w-full max-w-md">
                    <div class="absolute -top-10 -left-10 w-40 h-40 bg-blue-900/30 rounded-full opacity-50 filter blur-xl"></div>
                    <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-900/30 rounded-full opacity-50 filter blur-xl"></div>
                    <div class="relative z-10">
                        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Background elements -->
                            <circle cx="200" cy="150" r="120" fill="url(#paint0_radial)" opacity="0.2"/>
                            
                            <!-- Document -->
                            <rect x="120" y="70" width="160" height="200" rx="8" fill="#1F2937" stroke="#3B82F6" stroke-width="2"/>
                            <rect x="140" y="100" width="120" height="6" rx="3" fill="#374151"/>
                            <rect x="140" y="120" width="100" height="6" rx="3" fill="#374151"/>
                            <rect x="140" y="140" width="110" height="6" rx="3" fill="#374151"/>
                            <rect x="140" y="160" width="90" height="6" rx="3" fill="#374151"/>
                            <rect x="140" y="180" width="120" height="6" rx="3" fill="#374151"/>
                            <rect x="140" y="200" width="80" height="6" rx="3" fill="#374151"/>
                            <rect x="140" y="220" width="100" height="6" rx="3" fill="#374151"/>
                            
                            <!-- Magnifying glass -->
                            <circle cx="240" cy="120" r="40" fill="#1F2937" stroke="#3B82F6" stroke-width="3" opacity="0.7"/>
                            <circle cx="240" cy="120" r="30" fill="rgba(59, 130, 246, 0.2)"/>
                            <rect x="270" y="150" width="40" height="8" rx="4" transform="rotate(-45 270 150)" fill="#3B82F6"/>
                            
                            <!-- Lock open -->
                            <rect x="160" y="40" width="40" height="30" rx="6" fill="#10B981" opacity="0.8"/>
                            <path d="M170 40V30C170 24.4772 174.477 20 180 20V20C185.523 20 190 24.4772 190 30V40" stroke="#10B981" stroke-width="4" stroke-linecap="round"/>
                            <circle cx="180" cy="55" r="6" fill="white"/>
                            
                            <!-- Data flow lines -->
                            <path d="M120 240C100 240 80 220 80 200C80 180 100 160 120 160" stroke="#3B82F6" stroke-width="2" stroke-dasharray="4 4"/>
                            <path d="M280 240C300 240 320 220 320 200C320 180 300 160 280 160" stroke="#3B82F6" stroke-width="2" stroke-dasharray="4 4"/>
                            
                            <!-- Gradients -->
                            <defs>
                                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) rotate(90) scale(120)">
                                    <stop stop-color="#3B82F6"/>
                                    <stop offset="1" stop-color="#3B82F6" stop-opacity="0"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- What We Offer Section -->
<section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center space-y-4 mb-16">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                <span class="bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                    What We Offer
                </span>
            </h2>
            <p class="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive tools and resources to help you access, understand, and act on public information.
            </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-blue-400 rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                    <i data-lucide="file-text" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="text-xl font-semibold text-blue-400">Access to Official Gazettes</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                    Browse and search through government gazettes by date, category, or keyword.
                </p>
            </div>
            
            <div class="bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-green-400 rounded-lg shadow-lg hover:shadow-green-400/20 transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
                    <i data-lucide="trending-up" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="text-xl font-semibold text-green-400">Data-Driven Insights</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                    Visualize and understand how government policies change over time.
                </p>
            </div>
            
            <div class="bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-purple-400 rounded-lg shadow-lg hover:shadow-purple-400/20 transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                    <i data-lucide="users" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="text-xl font-semibold text-purple-400">Citizen-Centered Design</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                    Our platform is designed with simplicity and clarity at its core.
                </p>
            </div>
            
            <div class="bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-amber-400 rounded-lg shadow-lg hover:shadow-amber-400/20 transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-110">
                    <i data-lucide="megaphone" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="text-xl font-semibold text-amber-400">Advocacy for Transparency</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                    We support initiatives and reforms that make government more accountable.
                </p>
            </div>
        </div>
    </div>
</section>






<!-- GitHub Contribution CTA Section -->
<section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">

   
    <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center space-y-8">
            <!-- Animated GitHub Icon -->
            <div class="flex justify-center">
                <div class="relative">
                    <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                        <i data-lucide="github" class="h-10 w-10 text-white"></i>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    <span class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                        Join Our Open Source Mission
                    </span>
                </h2>
                <p class="text-lg opacity-90 max-w-3xl mx-auto">
                    Help us build the future of government transparency. Contribute code, improve data pipelines, 
                    or enhance our visualization tools. Every commit makes democracy more accessible.
                </p>
            </div>
            <!-- Contribution Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div class="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700 hover:border-green-400 transition-colors contribution-card">
                    <div class="text-2xl font-bold text-green-400 animate-pulse">{% if site.github and site.github.contributors %}
  {{ site.github.contributors }}
{% else %}
  127
{% endif %}
</div>
                    <div class="text-sm text-gray-300">Contributors</div>
                </div>
                <div class="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700 hover:border-blue-400 transition-colors contribution-card">
                    <div class="text-2xl font-bold text-blue-400 animate-pulse">{{ site.github.repositories | default: "23" }}</div>
                    <div class="text-sm text-gray-300">Repositories</div>
                </div>
                <div class="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700 hover:border-purple-400 transition-colors contribution-card">
                    <div class="text-2xl font-bold text-purple-400 animate-pulse">{{ site.github.commits | default: "2.1K" }}</div>
                    <div class="text-sm text-gray-300">Commits</div>
                </div>
                <div class="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700 hover:border-yellow-400 transition-colors contribution-card">
                    <div class="text-2xl font-bold text-yellow-400 animate-pulse">{{ site.github.stars | default: "892" }}</div>
                    <div class="text-sm text-gray-300">Stars</div>
                </div>
            </div>
            <!-- Tech Stack Icons -->
            <div class="flex justify-center items-center space-x-6 py-6 flex-wrap gap-4">
                <div class="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-600 hover:border-green-400 transition-colors">
                    <i data-lucide="code" class="h-5 w-5 text-green-400"></i>
                    <span class="text-sm">Python</span>
                </div>
                <div class="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-400 transition-colors">
                    <i data-lucide="database" class="h-5 w-5 text-blue-400"></i>
                    <span class="text-sm">PostgreSQL</span>
                </div>
                <div class="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-600 hover:border-purple-400 transition-colors">
                    <i data-lucide="bar-chart" class="h-5 w-5 text-purple-400"></i>
                    <span class="text-sm">D3.js</span>
                </div>
                <div class="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-600 hover:border-yellow-400 transition-colors">
                    <i data-lucide="cloud" class="h-5 w-5 text-yellow-400"></i>
                    <span class="text-sm">Docker</span>
                </div>
            </div>
            <!-- Call to Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="{{ site.github.main_repo | default: 'https://github.com/dataforall' }}" 
                   class="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                    <i data-lucide="git-fork" class="mr-2 h-5 w-5"></i>
                    Fork & Contribute
                    <i data-lucide="external-link" class="ml-2 h-4 w-4"></i>
                </a>
                <a href="{{ site.github.issues | default: 'https://github.com/dataforall/issues' }}" 
                   class="group border-2 border-gray-600 hover:border-blue-400 text-white hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <i data-lucide="bug" class="mr-2 h-5 w-5"></i>
                    Report Issues
                </a>
                <a href="{{ site.github.docs | default: 'https://docs.dataforall.org' }}" 
                   class="group border-2 border-gray-600 hover:border-purple-400 text-white hover:bg-purple-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <i data-lucide="book-open" class="mr-2 h-5 w-5"></i>
                    Documentation
                </a>
            </div>
            <!-- Terminal-like contribution guide -->
            <div class="max-w-2xl mx-auto mt-8">
                <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                    <div class="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span class="text-sm text-gray-400 ml-4">~/contribute-to-dataforall</span>
                    </div>
                    <div class="p-4 font-mono text-sm space-y-1">
                        <div class="text-green-400">$ git clone https://github.com/dataforall/main.git</div>
                        <div class="text-gray-400">$ cd dataforall && npm install</div>
                        <div class="text-blue-400">$ git checkout -b feature/your-awesome-idea</div>
                        <div class="text-purple-400"># Make your changes and commit</div>
                        <div class="text-yellow-400">$ git push origin feature/your-awesome-idea</div>
                        <div class="text-green-400 animate-pulse"># Create pull request and change the world! 🚀</div>
                    </div>
                </div>
            </div>
            <p class="text-sm opacity-75 max-w-xl mx-auto">
                Join <span class="text-green-400 font-semibold">{{ site.github.contributors | default: "127" }}+</span> developers 
                building tools for government transparency. From data engineers to frontend developers, 
                there's a place for every skill level.
            </p>
        </div>
    </div>
</section>

