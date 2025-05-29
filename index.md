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
    <div class="relative z-10 container mx-auto px-4 md:px-6 ">
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Left side: Text content -->
            <div class="space-y-6 text-left">
                <div class="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-800/50 rounded-full px-4 py-1 text-blue-400 text-sm font-mono">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span>{{ site.version }} / LIVE DATA SYSTEM</span>
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
                    <a href="#mission" class="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md border border-gray-700 transition-all duration-300">
                        <i data-lucide="info" class="mr-2 h-5 w-5"></i>
                        <span>About Our Mission</span>
                    </a>
                </div>
                
                <!-- Stats with animated counters -->
                <div class="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800 m">
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
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg ">
        <div class="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg overflow-hidden mx-4">
            <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="text-xs text-gray-400 font-mono">opendata@gov:~</div>
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


<!-- Mission Section -->
<section id="mission" class="py-20 bg-black relative overflow-hidden">
    <!-- Animated background pattern -->
    <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
    </div>
    
    <!-- Circuit pattern overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('{{ '/images/circuit-png.png' | relative_url }}'); background-repeat: repeat; background-size: 400px 400px;"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center space-y-4 mb-16">
            <div class="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-800/30 rounded-full px-4 py-1 text-blue-400 text-sm font-mono mb-4">
                <span class="text-xs">CORE_VALUES.init()</span>
            </div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                Our <span class="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Mission</span>
            </h2>
            <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                Breaking down barriers to public information and creating a more transparent, accountable society through advanced technology.
            </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
            {% for mission in site.data.missions %}
            <div class="relative group">
                <!-- Card glow effect -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                
                <!-- Card content -->
                <div class="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-6 hover:border-blue-500/50 transition-all duration-300">
                    <!-- Animated icon background -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl"></div>
                        <div class="relative w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                            <i data-lucide="{{ mission.icon }}" class="h-10 w-10 text-blue-400"></i>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-white text-center">{{ mission.title }}</h3>
                    <p class="text-gray-400 text-center leading-relaxed">{{ mission.description }}</p>
                    
                    <!-- Tech detail -->
                    <div class="pt-4 border-t border-gray-800">
                        <div class="flex items-center justify-center space-x-2 text-xs text-gray-500 font-mono">
                            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        
        <!-- Mission statement terminal -->
        <div class="mt-16 max-w-4xl mx-auto">
            <div class="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg overflow-hidden">
                <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <span class="text-xs text-gray-400 font-mono">mission_statement.log</span>
                    <div class="flex space-x-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div class="p-6 font-mono text-sm space-y-2">
                    <div class="text-gray-500">[2024-01-01 00:00:00] Initializing transparency protocols...</div>
                    <div class="text-green-400">[2024-01-01 00:00:01] ✓ Public data access: ENABLED</div>
                    <div class="text-green-400">[2024-01-01 00:00:02] ✓ Citizen empowerment: ACTIVE</div>
                    <div class="text-green-400">[2024-01-01 00:00:03] ✓ Government accountability: MONITORING</div>
                    <div class="text-blue-400">[2024-01-01 00:00:04] > Mission status: OPERATIONAL</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Transparency Section -->
<section id="transparency" class="py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-12 lg:grid-cols-2 items-center">
            <div class="space-y-8">
                <div class="inline-flex items-center space-x-2 bg-cyan-900/20 border border-cyan-800/30 rounded-full px-4 py-1 text-cyan-400 text-sm font-mono">
                    <span class="text-xs">TRANSPARENCY_ENGINE v2.0</span>
                </div>
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                    Giving you <span class="relative">
                        <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-lg opacity-75"></span>
                        <span class="relative bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">transparency</span>
                    </span> in your government.
                </h2>
                
                <!-- Real-time metrics -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
                        <div class="text-2xl font-bold text-cyan-400 font-mono">98.7%</div>
                        <div class="text-xs text-gray-500 uppercase tracking-wider">Data Accuracy</div>
                        <div class="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style="width: 98.7%;"></div>
                        </div>
                    </div>
                    <div class="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
                        <div class="text-2xl font-bold text-green-400 font-mono">24/7</div>
                        <div class="text-xs text-gray-500 uppercase tracking-wider">Uptime</div>
                        <div class="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style="width: 100%;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="relative">
                <!-- 3D visualization container -->
                <div class="relative w-full max-w-lg mx-auto">
                    <!-- Holographic effect background -->
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-teal-900/20 blur-2xl"></div>
                    
                    <!-- Main visualization -->
                    <div class="relative aspect-square">
                        <!-- Rotating cube frame -->
                        <div class="absolute inset-0 border-2 border-blue-500/30 rounded-lg animate-spin" style="animation-duration: 20s; transform-style: preserve-3d;"></div>
                        <div class="absolute inset-[10%] border-2 border-cyan-500/20 rounded-lg animate-spin" style="animation-duration: 15s; animation-direction: reverse; transform-style: preserve-3d;"></div>
                        
                        <!-- Central data core -->
                        <div class="absolute inset-[30%] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-lg opacity-80 animate-pulse" style="animation-duration: 2s;">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <i data-lucide="eye" class="h-16 w-16 text-white/80"></i>
                            </div>
                        </div>
                        
                        <!-- Floating data nodes -->
                        <div class="absolute top-[10%] left-[10%] w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                        <div class="absolute top-[20%] right-[15%] w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
                        <div class="absolute bottom-[25%] left-[20%] w-5 h-5 bg-teal-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                        <div class="absolute bottom-[10%] right-[10%] w-4 h-4 bg-green-400 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
                        
                        <!-- Connection lines -->
                        <svg class="absolute inset-0 w-full h-full" style="transform: rotateX(20deg) rotateY(45deg);">
                            <line x1="10%" y1="10%" x2="50%" y2="50%" stroke="rgba(59, 130, 246, 0.3)" stroke-width="1" stroke-dasharray="2,2">
                                <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" />
                            </line>
                            <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1" stroke-dasharray="2,2">
                                <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" />
                            </line>
                            <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="rgba(20, 184, 166, 0.3)" stroke-width="1" stroke-dasharray="2,2">
                                <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" />
                            </line>
                            <line x1="90%" y1="90%" x2="50%" y2="50%" stroke="rgba(34, 197, 94, 0.3)" stroke-width="1" stroke-dasharray="2,2">
                                <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" />
                            </line>
                        </svg>
                    </div>
                    
                    <!-- Info cards -->
                    <div class="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-xl transform rotate-3">
                        <div class="flex items-center space-x-2 mb-2">
                            <i data-lucide="shield-check" class="h-4 w-4 text-green-400"></i>
                            <span class="text-xs font-semibold text-white">Security Status</span>
                        </div>
                        <div class="text-xs text-green-400 font-mono">ENCRYPTED</div>
                    </div>
                    
                    <div class="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-xl transform -rotate-3">
                        <div class="flex items-center space-x-2 mb-2">
                            <i data-lucide="activity" class="h-4 w-4 text-blue-400"></i>
                            <span class="text-xs font-semibold text-white">Live Feed</span>
                        </div>
                        <div class="text-xs text-blue-400 font-mono">STREAMING</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Datasets Section -->
<section id="datasets" class="py-20 bg-black relative overflow-hidden">
    <!-- Matrix-style background -->
    <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px); background-size: 100% 4px;"></div>
    </div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center space-y-4 mb-16">
            <div class="inline-flex items-center space-x-2 bg-green-900/20 border border-green-800/30 rounded-full px-4 py-1 text-green-400 text-sm font-mono mb-4">
                <span class="text-xs">DATASETS.query(featured=true)</span>
            </div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                Featured <span class="bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">Datasets</span>
            </h2>
            <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore our most popular and impactful public datasets with real-time updates.
            </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {% for dataset in site.data.datasets %}
            <div class="group relative">
                <!-- Hover glow effect -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-75 transition duration-500 blur-sm"></div>
                
                <!-- Card -->
                <div class="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
                    <!-- Header with category -->
                    <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between">
                        <span class="text-xs font-medium bg-green-900/30 text-green-400 px-3 py-1 rounded-full border border-green-800/50">
                            {{ dataset.category }}
                        </span>
                        <div class="flex items-center space-x-2 text-xs text-gray-500">
                            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>{{ dataset.updated }}</span>
                        </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="p-6 space-y-4">
                        <h3 class="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                            {{ dataset.title }}
                        </h3>
                        <p class="text-sm text-gray-400 leading-relaxed">{{ dataset.description }}</p>
                        
                        <!-- Data preview -->
                        <div class="bg-gray-800/50 rounded-lg p-3 font-mono text-xs space-y-1">
                            <div class="text-gray-500"># Sample query</div>
                            <div class="text-green-400">SELECT * FROM {{ dataset.title | downcase | replace: ' ', '_' }}</div>
                            <div class="text-gray-500">LIMIT 100;</div>
                        </div>
                        
                        <!-- Action button -->
                        <a href="{{ dataset.url | default: '#' }}" class="block w-full bg-gray-800 group-hover:bg-green-900/30 border border-gray-700 group-hover:border-green-500/50 text-center py-3 rounded-lg text-sm font-medium text-gray-300 group-hover:text-green-400 transition-all duration-300">
                            <span class="flex items-center justify-center">
                                Access Dataset
                                <i data-lucide="database" class="ml-2 h-4 w-4"></i>
                            </span>
                        </a>
                    </div>
                    
                    <!-- Loading bar animation -->
                    <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-800">
                        <div class="h-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse" style="width: {{ forloop.index | times: 15 | plus: 40 }}%;"></div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        
        <!-- View all datasets link -->
        <div class="mt-12 text-center">
            <a href="#" class="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                <span class="font-mono text-sm">view --all datasets</span>
                <i data-lucide="terminal" class="h-4 w-4 group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>
    </div>
</section>

<!-- What We Offer Section -->
<section class="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
    <!-- Animated particles -->
    <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center space-y-4 mb-16">
            <div class="inline-flex items-center space-x-2 bg-purple-900/20 border border-purple-800/30 rounded-full px-4 py-1 text-purple-400 text-sm font-mono mb-4">
                <span class="text-xs">SERVICES.list() // 4 items</span>
            </div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    What We Offer
                </span>
            </h2>
            <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                Comprehensive tools and resources powered by cutting-edge technology to democratize public information.
            </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="group relative">
                <!-- 3D effect background -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                
                <!-- Card content -->
                <div class="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-6 hover:border-blue-500/50 transition-all duration-300 transform group-hover:-translate-y-2">
                    <!-- Icon with hologram effect -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                        <div class="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                            <i data-lucide="file-text" class="h-8 w-8 text-white"></i>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-blue-400 text-center">Official Gazettes</h3>
                    <p class="text-gray-400 text-sm text-center leading-relaxed">
                        AI-powered search through government gazettes with advanced filtering.
                    </p>
                    
                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full border border-blue-800/50">NLP</span>
                        <span class="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full border border-blue-800/50">OCR</span>
                        <span class="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full border border-blue-800/50">ML</span>
                    </div>
                </div>
            </div>
            
            <div class="group relative">
                <!-- 3D effect background -->
                <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
                
                <!-- Card content -->
                <div class="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-6 hover:border-green-500/50 transition-all duration-300 transform group-hover:-translate-y-2">
                    <!-- Icon with hologram effect -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                        <div class="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform">
                            <i data-lucide="trending-up" class="h-8 w-8 text-white"></i>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-green-400 text-center">Data Analytics</h3>
                    <p class="text-gray-400 text-sm text-center leading-relaxed">
                        Real-time visualization of government policies and spending patterns.
                    </p>
                    
                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full border border-green-800/50">D3.js</span>
                        <span class="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full border border-green-800/50">Chart.js</span>
                        <span class="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full border border-green-800/50">WebGL</span>
                    </div>
                </div>
            </div>
            
            <div class="group relative">
                <!-- 3D effect background -->
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                
                <!-- Card content -->
                <div class="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-6 hover:border-purple-500/50 transition-all duration-300 transform group-hover:-translate-y-2">
                    <!-- Icon with hologram effect -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                        <div class="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
                            <i data-lucide="users" class="h-8 w-8 text-white"></i>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-purple-400 text-center">Citizen Portal</h3>
                    <p class="text-gray-400 text-sm text-center leading-relaxed">
                        User-friendly interface designed for accessibility and ease of use.
                    </p>
                    
                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-full border border-purple-800/50">React</span>
                        <span class="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-full border border-purple-800/50">A11y</span>
                        <span class="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-full border border-purple-800/50">PWA</span>
                    </div>
                </div>
            </div>
            
            <div class="group relative">
                <!-- 3D effect background -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
                
                <!-- Card content -->
                <div class="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-6 hover:border-amber-500/50 transition-all duration-300 transform group-hover:-translate-y-2">
                    <!-- Icon with hologram effect -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-amber-500/20 blur-xl rounded-full"></div>
                        <div class="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform">
                            <i data-lucide="megaphone" class="h-8 w-8 text-white"></i>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-amber-400 text-center">Advocacy Tools</h3>
                    <p class="text-gray-400 text-sm text-center leading-relaxed">
                        Empowering citizens with tools to drive transparency reforms.
                    </p>
                    
                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2 justify-center">
                        <span class="text-xs bg-amber-900/30 text-amber-400 px-2 py-1 rounded-full border border-amber-800/50">API</span>
                        <span class="text-xs bg-amber-900/30 text-amber-400 px-2 py-1 rounded-full border border-amber-800/50">SDK</span>
                        <span class="text-xs bg-amber-900/30 text-amber-400 px-2 py-1 rounded-full border border-amber-800/50">GraphQL</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- API preview terminal -->
        <div class="mt-16 max-w-3xl mx-auto">
            <div class="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg overflow-hidden">
                <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <span class="text-xs text-gray-400 font-mono">api.opendata.lk</span>
                    <span class="text-xs text-green-400 font-mono">200 OK</span>
                </div>
                <div class="p-4 font-mono text-xs space-y-1">
                    <div class="text-gray-500">// Example API request</div>
                    <div class="text-blue-400">GET /api/v2/datasets/budget-2024</div>
                    <div class="text-gray-500">Authorization: Bearer YOUR_API_KEY</div>
                    <div class="mt-2 text-green-400">{"status": "success", "data": {...}}</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- GitHub Contribution CTA Section -->
<section class="py-20 bg-black relative overflow-hidden">
    <!-- Matrix rain effect background -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
        <div id="matrix-rain" class="absolute inset-0"></div>
    </div>
    
    <!-- Hexagon pattern -->
    <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 0l25.98 15v30L30 60 4.02 45V15z" fill="none" stroke="%2306b6d4" stroke-width="0.5"/%3E%3C/svg%3E'); background-size: 60px 60px;"></div>
    </div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center space-y-8">
            <!-- Animated GitHub Icon -->
            <div class="flex justify-center">
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-50"></div>
                    <div class="relative w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                        <i data-lucide="github" class="h-12 w-12 text-white"></i>
                    </div>
                    <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-bounce flex items-center justify-center border-2 border-black">
                        <span class="text-sm font-bold text-black">+</span>
                    </div>
                </div>
            </div>
            
            <div class="space-y-4">
                <div class="inline-flex items-center space-x-2 bg-green-900/20 border border-green-800/30 rounded-full px-4 py-1 text-green-400 text-sm font-mono mb-4">
                    <span class="text-xs">OPEN_SOURCE = true</span>
                </div>
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    <span class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
                        Join Our Open Source Mission
                    </span>
                </h2>
                <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                    Help us build the future of government transparency. Contribute code, improve data pipelines, 
                    or enhance our visualization tools. Every commit makes democracy more accessible.
                </p>
            </div>
            
            <!-- Contribution Stats Dashboard -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>
                    <div class="relative bg-gray-900 backdrop-blur rounded-xl p-6 border border-gray-800">
                        <div class="text-3xl font-bold text-green-400 font-mono animate-pulse">{{ site.github.contributors | default: "127" }}</div>
                        <div class="text-sm text-gray-400 mt-2">Contributors</div>
                        <div class="absolute top-2 right-2">
                            <i data-lucide="users" class="h-4 w-4 text-green-500/50"></i>
                        </div>
                    </div>
                </div>
                
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>
                    <div class="relative bg-gray-900 backdrop-blur rounded-xl p-6 border border-gray-800">
                        <div class="text-3xl font-bold text-blue-400 font-mono animate-pulse">{{ site.github.repositories | default: "23" }}</div>
                        <div class="text-sm text-gray-400 mt-2">Repositories</div>
                        <div class="absolute top-2 right-2">
                            <i data-lucide="folder-git-2" class="h-4 w-4 text-blue-500/50"></i>
                        </div>
                    </div>
                </div>
                
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>
                    <div class="relative bg-gray-900 backdrop-blur rounded-xl p-6 border border-gray-800">
                        <div class="text-3xl font-bold text-purple-400 font-mono animate-pulse">{{ site.github.commits | default: "2.1K" }}</div>
                        <div class="text-sm text-gray-400 mt-2">Commits</div>
                        <div class="absolute top-2 right-2">
                            <i data-lucide="git-commit" class="h-4 w-4 text-purple-500/50"></i>
                        </div>
                    </div>
                </div>
                
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>
                    <div class="relative bg-gray-900 backdrop-blur rounded-xl p-6 border border-gray-800">
                        <div class="text-3xl font-bold text-yellow-400 font-mono animate-pulse">{{ site.github.stars | default: "892" }}</div>
                        <div class="text-sm text-gray-400 mt-2">Stars</div>
                        <div class="absolute top-2 right-2">
                            <i data-lucide="star" class="h-4 w-4 text-yellow-500/50"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tech Stack -->
            <div class="flex justify-center items-center flex-wrap gap-4 py-8">
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-green-500/50 transition-all">
                      <i data-lucide="code" class="h-5 w-5 text-green-400"></i>
                      <span class="text-sm text-gray-300">Python</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all">
                      <i data-lucide="database" class="h-5 w-5 text-blue-400"></i>
                      <span class="text-sm text-gray-300">PostgreSQL</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-emerald-500/50 transition-all">
                      <i data-lucide="share-2" class="h-5 w-5 text-emerald-400"></i>
                      <span class="text-sm text-gray-300">Neo4j</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-green-500/50 transition-all">
                      <i data-lucide="leaf" class="h-5 w-5 text-green-400"></i>
                      <span class="text-sm text-gray-300">MongoDB</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-cyan-500/50 transition-all">
                      <i data-lucide="atom" class="h-5 w-5 text-cyan-400"></i>
                      <span class="text-sm text-gray-300">React</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all">
                      <i data-lucide="container" class="h-5 w-5 text-blue-400"></i>
                      <span class="text-sm text-gray-300">Docker</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-cyan-500/50 transition-all">
                      <i data-lucide="zap" class="h-5 w-5 text-cyan-400"></i>
                      <span class="text-sm text-gray-300">Go</span>
                  </div>
              </div>
              
              <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  <div class="relative flex items-center space-x-2 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-full border border-gray-700 group-hover:border-orange-500/50 transition-all">
                      <i data-lucide="dance" class="h-5 w-5 text-orange-400"></i>
                      <span class="text-sm text-gray-300">Ballerina</span>
                  </div>
              </div>
          </div>
            
            <!-- Call to Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="{{ site.github.main_repo | default: 'https://github.com/dataforall' }}" 
                   class="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center">
                    <span class="relative z-10 flex items-center">
                        <i data-lucide="git-fork" class="mr-2 h-5 w-5"></i>
                        Fork & Contribute
                        <i data-lucide="external-link" class="ml-2 h-4 w-4"></i>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a href="{{ site.github.issues | default: 'https://github.com/dataforall/issues' }}" 
                   class="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <span class="relative z-10 flex items-center">
                        <i data-lucide="bug" class="mr-2 h-5 w-5 text-blue-400"></i>
                        Report Issues
                    </span>
                    <div class="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a href="{{ site.github.docs | default: 'https://docs.dataforall.org' }}" 
                   class="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold border-2 border-purple-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <span class="relative z-10 flex items-center">
                        <i data-lucide="book-open" class="mr-2 h-5 w-5 text-purple-400"></i>
                        Documentation
                    </span>
                    <div class="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
            </div>
            
            <!-- Enhanced Terminal -->
            <div class="max-w-3xl mx-auto mt-12">
                <div class="bg-gray-900/90 backdrop-blur rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                    <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-xs text-gray-400 font-mono">~/opendata</span>
                            <span class="text-xs text-green-400">main</span>
                        </div>
                    </div>
                    <div class="p-6 font-mono text-sm space-y-2">
                        <div class="flex items-start">
                            <span class="text-green-400 mr-2">❯</span>
                            <div class="flex-1">
                                <span class="text-green-400">git clone https://github.com/dataforall/main.git</span>
                            </div>
                        </div>
                        <div class="text-gray-500">Cloning into 'dataforall'...</div>
                        <div class="flex items-start">
                            <span class="text-green-400 mr-2">❯</span>
                            <div class="flex-1">
                                <span class="text-yellow-400">cd dataforall && npm install</span>
                            </div>
                        </div>
                        <div class="text-gray-500">Installing dependencies...</div>
                        <div class="flex items-start">
                            <span class="text-green-400 mr-2">❯</span>
                            <div class="flex-1">
                                <span class="text-purple-400">git checkout -b feature/transparency-enhancement</span>
                            </div>
                        </div>
                        <div class="text-blue-400"># Ready to contribute! 🚀</div>
                        <div class="flex items-start">
                            <span class="text-green-400 mr-2 animate-pulse">❯</span>
                            <span class="w-2 h-5 bg-green-400 animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <p class="text-sm text-gray-500 max-w-xl mx-auto mt-8">
                Join <span class="text-green-400 font-semibold">{{ site.github.contributors | default: "127" }}+</span> developers 
                building tools for government transparency. From data engineers to frontend developers, 
                there's a place for every skill level.
            </p>
        </div>
    </div>
    
    <script>
    // Matrix rain effect
    document.addEventListener('DOMContentLoaded', function() {
        const matrixRain = document.getElementById('matrix-rain');
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'absolute text-green-400 font-mono text-xs';
            column.style.left = `${i * 20}px`;
            column.style.top = `${Math.random() * -100}%`;
            column.style.animationDuration = `${10 + Math.random() * 20}s`;
            column.style.animationDelay = `${Math.random() * 10}s`;
            column.innerHTML = Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('<br>');
            column.style.animation = 'matrixFall linear infinite';
            matrixRain.appendChild(column);
        }
    });
    </script>
    
    <style>
    @keyframes matrixFall {
        to {
            transform: translateY(200vh);
        }
    }
    </style>
</section>
