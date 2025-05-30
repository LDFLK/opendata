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
                    <span>{{ site.version }}  OPEN DATA SYSTEM</span>
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight">
                    <span class="block">Connecting</span>
                    <span class="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">Public Data</span>
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
                
               <!-- Key Features -->
<div class="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800">
    <div class="text-center group">
        <div class="flex justify-center mb-2">
            <i data-lucide="book-check" class="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"></i>
        </div>
        <div class="text-sm font-medium text-white">Vrified</div>
        <div class="text-xs text-gray-500">Open & Auditable</div>
    </div>
    <div class="text-center group">
        <div class="flex justify-center mb-2">
            <i data-lucide="zap" class="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"></i>
        </div>
        <div class="text-sm font-medium text-white">Fast</div>
        <div class="text-xs text-gray-500">Real-time processing</div>
    </div>
    <div class="text-center group">
        <div class="flex justify-center mb-2">
            <i data-lucide="globe" class="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors duration-300"></i>
        </div>
        <div class="text-sm font-medium text-white">Open</div>
        <div class="text-xs text-gray-500">Public accessibility</div>
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
                            
                            <!-- SVG for node connections -->
                            <svg id="node-connections" class="absolute inset-0 w-full h-full" style="z-index: 1;">
                                <!-- Connection lines will be added by JavaScript -->
                            </svg>
                            
                            <!-- Data points -->
                            <div id="data-points-container" class="absolute inset-0" style="z-index: 2;">
                                <!-- Data points will be added by JavaScript -->
                            </div>
                            
                            <!-- Core -->
                            <div class="absolute inset-[40%] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-80 shadow-lg shadow-blue-500/50 animate-pulse" style="animation-duration: 3s; z-index: 3;"></div>
                        </div>
                    </div>
                    

                    <!-- Floating data cards -->
<div class="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-lg shadow-blue-900/20 w-48 transform rotate-3 animate-float" style="animation-duration: 6s;">
    <div class="flex items-center space-x-2">
        <i data-lucide="database" class="h-4 w-4 text-blue-400"></i>
        <span class="text-xs font-semibold text-white">Data Collection</span>
    </div>
    
  
    <!-- Mini feature indicators -->
    <div class="mt-2 flex items-center justify-between text-xs">
        <div class="flex items-center space-x-1">
            <i data-lucide="book-check" class="h-3 w-3 text-green-400"></i>
            <span class="text-green-400">Verified</span>
        </div>
        <div class="flex items-center space-x-1">
            <i data-lucide="globe" class="h-3 w-3 text-blue-400"></i>
            <span class="text-blue-400">Open</span>
        </div>
    </div>
</div>

<div class="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-lg shadow-blue-900/20 w-48 transform -rotate-6 animate-float" style="animation-duration: 7s; animation-delay: 1s;">
    <div class="flex items-center space-x-2">
        <i data-lucide="search" class="h-4 w-4 text-teal-400"></i>
        <span class="text-xs font-semibold text-white">Data Exploration</span>
    </div>
    
    
    <!-- Mini feature indicators -->
    <div class="mt-2 flex items-center justify-between text-xs">
        <div class="flex items-center space-x-1">
            <i data-lucide="trending-up" class="h-3 w-3 text-emerald-400"></i>
            <span class="text-emerald-400">Trending</span>
        </div>
        <div class="flex items-center space-x-1">
            <i data-lucide="zap" class="h-3 w-3 text-yellow-400"></i>
            <span class="text-yellow-400">Fast</span>
        </div>
    </div>
</div>


    

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
    
    // Create data points with connections for the sphere
    const dataPointsContainer = document.getElementById('data-points-container');
    const nodeConnections = document.getElementById('node-connections');
    const pointCount = 20;
    const dataPoints = [];
    
    // Generate data points
    for (let i = 0; i < pointCount; i++) {
        const point = {
            id: i,
            size: 1 + Math.floor(Math.random() * 2),
            distance: 25 + Math.random() * 35,
            angle: (i / pointCount) * 360 + Math.random() * 30,
            verticalAngle: Math.random() * 360,
            color: Math.random() > 0.5 ? 'bg-blue-400' : 'bg-cyan-400',
            pulseSpeed: 1 + Math.random() * 3,
            connections: []
        };
        
        // Calculate position
        point.x = 50 + point.distance * Math.cos(point.angle * Math.PI / 180) * Math.sin(point.verticalAngle * Math.PI / 180);
        point.y = 50 + point.distance * Math.sin(point.angle * Math.PI / 180) * Math.sin(point.verticalAngle * Math.PI / 180);
        point.z = point.distance * Math.cos(point.verticalAngle * Math.PI / 180);
        
        dataPoints.push(point);
    }
    
    // Create connections between nearby points
    dataPoints.forEach((point, index) => {
        const maxConnections = 2 + Math.floor(Math.random() * 3);
        let connectionCount = 0;
        
        dataPoints.forEach((otherPoint, otherIndex) => {
            if (index !== otherIndex && connectionCount < maxConnections) {
                const distance = Math.sqrt(Math.pow(point.x - otherPoint.x, 2) + Math.pow(point.y - otherPoint.y, 2));
                
                if (distance < 40 && Math.random() > 0.6) {
                    point.connections.push(otherIndex);
                    connectionCount++;
                }
            }
        });
    });
    
    // Render data points
    dataPoints.forEach(point => {
        const pointElement = document.createElement('div');
        pointElement.className = `absolute w-${point.size} h-${point.size} ${point.color} rounded-full animate-pulse`;
        pointElement.style.left = `${point.x}%`;
        pointElement.style.top = `${point.y}%`;
        pointElement.style.transform = `translate(-50%, -50%) translateZ(${point.z}px)`;
        pointElement.style.animationDuration = `${point.pulseSpeed}s`;
        pointElement.style.boxShadow = point.color.includes('blue') ? 
            '0 0 10px rgba(59, 130, 246, 0.6)' : 
            '0 0 10px rgba(34, 211, 238, 0.6)';
        
        dataPointsContainer.appendChild(pointElement);
    });
    
    // Render connections
    dataPoints.forEach(point => {
        point.connections.forEach(connectionIndex => {
            const connectedPoint = dataPoints[connectionIndex];
            if (!connectedPoint) return;
            
            // Create SVG line
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', `${point.x}%`);
            line.setAttribute('y1', `${point.y}%`);
            line.setAttribute('x2', `${connectedPoint.x}%`);
            line.setAttribute('y2', `${connectedPoint.y}%`);
            line.setAttribute('stroke', 'rgba(59, 130, 246, 0.3)');
            line.setAttribute('stroke-width', '1');
            
            // Add animation
            const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animate.setAttribute('attributeName', 'stroke-opacity');
            animate.setAttribute('values', '0.9;0.8;0.9');
            animate.setAttribute('dur', `${3 + Math.random() * 2}s`);
            animate.setAttribute('repeatCount', 'indefinite');
            
            line.appendChild(animate);
            nodeConnections.appendChild(line);
        });
    });
    
    // Terminal typing animation
    const terminalText = document.getElementById('terminal-text');
    if (terminalText) {
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
    }
    
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
        
        @keyframes pulse-connection {
            0%, 100% { stroke-opacity: 0.1; }
            50% { stroke-opacity: 0.6; }
        }
    `;
    document.head.appendChild(style);
});
</script>

<!-- Mission Section -->
<section id="mission" class="bg-black relative overflow-hidden pt-16">
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
        
        <div class="grid gap-8 md:grid-cols-3 pb-16">
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


<!-- Terminal-like element at the bottom  this can be added after the release of the CLI-->
        <!-- <div class="mt-16 max-w-lg mx-auto">
            <div class="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg overflow-hidden">
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
        
        
        <div class="mt-8 max-w-4xl mx-auto">
            <div class="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-lg overflow-hidden">
                <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div class="flex space-x-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span class="text-xs text-gray-400 font-mono">mission_statement.log</span>
                    
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

        
        
    </div> -->

   
</section>


<!-- Organization Hierarchy Showcase Section -->
<section id="org-hierarchy" class="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
        <div class="absolute top-1/3 left-1/6 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 3s;"></div>
    </div>
    
    <!-- Circuit pattern overlay -->
    <div class="absolute inset-0 opacity-[0.02]" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(99, 102, 241, 0.1) 10px, rgba(99, 102, 241, 0.1) 11px);"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center space-y-4 mb-16">
            <div class="inline-flex items-center space-x-2 bg-indigo-900/20 border border-indigo-800/30 rounded-full px-4 py-1 text-indigo-400 text-sm font-mono mb-4">
                <span class="text-xs">ORG_CHART.render() // Interactive</span>
            </div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                Visualize <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Organizational</span> Structures
            </h2>
            <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                Interactive organizational charts and hierarchy trees that reveal the structure of government institutions, 
                making complex bureaucracies transparent and navigable.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <!-- Left side: Text content -->
            <div class="space-y-6 text-left">
                <h3 class="text-2xl font-semibold text-white">
                    Organizational <span class="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Hierarchy</span>
                </h3>
                <p class="text-gray-400 text-lg leading-relaxed">
                    Transform complex organizational structures into clear, interactive visualizations. 
                    Our platform maps institutional hierarchies, revealing reporting relationships 
                    and departmental connections with precision.
                </p>
                
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-indigo-600/20 rounded-lg flex items-center justify-center mt-1">
                            <i data-lucide="git-branch" class="h-4 w-4 text-indigo-400"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Multi-level Hierarchies</h4>
                            <p class="text-gray-400 text-sm">Visualize complex organizational structures from executive level to operational units</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-purple-600/20 rounded-lg flex items-center justify-center mt-1">
                            <i data-lucide="eye" class="h-4 w-4 text-purple-400"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Transparent Relationships</h4>
                            <p class="text-gray-400 text-sm">Clear visualization of reporting lines and departmental connections</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-pink-600/20 rounded-lg flex items-center justify-center mt-1">
                            <i data-lucide="trending-up" class="h-4 w-4 text-pink-400"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Real-time Updates</h4>
                            <p class="text-gray-400 text-sm">Live organizational data with automatic structure updates</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right side: Organizational Chart Visualization -->
            <div class="relative">
                <div class="relative w-full max-w-lg mx-auto">
                    <!-- Glowing background effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-600/10 to-pink-700/20 blur-xl"></div>
                    
                    <!-- Main visualization container -->
                    <div class="relative aspect-square">
                        <!-- SVG for organizational chart -->
                        <svg id="org-chart-svg" class="w-full h-full" viewBox="0 0 400 400">
                            <!-- Chart will be rendered here -->
                        </svg>
                        
                        <!-- Loading animation -->
                        <div id="org-loading" class="absolute inset-0 flex items-center justify-center">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
                                <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
                                <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Floating info cards -->
                    <div class="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-lg shadow-indigo-900/20 w-40 transform rotate-3 animate-float" style="animation-duration: 6s;">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="users" class="h-4 w-4 text-indigo-400"></i>
                            <span class="text-xs font-semibold text-white">Hierarchy Map</span>
                        </div>
                        <div class="mt-2 flex items-center justify-between text-xs">
                            <span class="text-gray-500">Levels</span>
                            <span class="text-indigo-400">4</span>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 shadow-lg shadow-purple-900/20 w-40 transform -rotate-6 animate-float" style="animation-duration: 7s; animation-delay: 1s;">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="git-branch" class="h-4 w-4 text-purple-400"></i>
                            <span class="text-xs font-semibold text-white">Connections</span>
                        </div>
                        <div class="mt-2 flex items-center justify-between text-xs">
                            <span class="text-gray-500">Active</span>
                            <span class="text-purple-400">12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Technology showcase -->
        <div class="mt-16 text-center">
            <div class="inline-flex items-center space-x-4 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-full px-6 py-3">
                <span class="text-sm text-gray-400">Powered by:</span>
                <div class="flex items-center space-x-3">
                    <span class="text-xs bg-indigo-900/30 text-indigo-400 px-2 py-1 rounded-full border border-indigo-800/50">D3.js</span>
                    <span class="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-full border border-purple-800/50">Graph Theory</span>
                    <span class="text-xs bg-pink-900/30 text-pink-400 px-2 py-1 rounded-full border border-pink-800/50">SVG</span>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Simple left-to-right organizational structure
    const nodes = [
        { id: 1, x: 50, y: 200, level: 0 },   // Root
        { id: 2, x: 150, y: 120, level: 1 },  // Level 1
        { id: 3, x: 150, y: 200, level: 1 },  // Level 1
        { id: 4, x: 150, y: 280, level: 1 },  // Level 1
        { id: 5, x: 250, y: 80, level: 2 },   // Level 2
        { id: 6, x: 250, y: 140, level: 2 },  // Level 2
        { id: 7, x: 250, y: 180, level: 2 },  // Level 2
        { id: 8, x: 250, y: 220, level: 2 },  // Level 2
        { id: 9, x: 250, y: 260, level: 2 },  // Level 2
        { id: 10, x: 250, y: 320, level: 2 }, // Level 2
        { id: 11, x: 350, y: 100, level: 3 }, // Level 3
        { id: 12, x: 350, y: 160, level: 3 }, // Level 3
        { id: 13, x: 350, y: 200, level: 3 }, // Level 3
        { id: 14, x: 350, y: 240, level: 3 }, // Level 3
        { id: 15, x: 350, y: 300, level: 3 }  // Level 3
    ];

    const connections = [
        { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 },
        { from: 2, to: 5 }, { from: 2, to: 6 },
        { from: 3, to: 7 }, { from: 3, to: 8 },
        { from: 4, to: 9 }, { from: 4, to: 10 },
        { from: 5, to: 11 }, { from: 6, to: 12 },
        { from: 7, to: 13 }, { from: 8, to: 14 }, { from: 9, to: 15 }
    ];

    // Initialize after loading delay
    setTimeout(() => {
        document.getElementById('org-loading').style.display = 'none';
        renderOrgChart();
    }, 1500);

    function renderOrgChart() {
        const svg = document.getElementById('org-chart-svg');
        svg.innerHTML = '';

        // Render connections first
        connections.forEach((conn, index) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            
            if (fromNode && toNode) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', fromNode.x);
                line.setAttribute('y1', fromNode.y);
                line.setAttribute('x2', toNode.x);
                line.setAttribute('y2', toNode.y);
                line.setAttribute('stroke', 'rgba(99, 102, 241, 0.4)');
                line.setAttribute('stroke-width', '2');
                line.style.opacity = '0';
                line.style.animation = `fadeIn 0.8s ease-out forwards`;
                line.style.animationDelay = `${index * 0.1}s`;
                
                svg.appendChild(line);
            }
        });

        // Render nodes
        nodes.forEach((node, index) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', node.x);
            circle.setAttribute('cy', node.y);
            circle.setAttribute('r', getNodeSize(node.level));
            circle.setAttribute('fill', getNodeColor(node.level));
            circle.setAttribute('stroke', 'white');
            circle.setAttribute('stroke-width', '2');
            circle.setAttribute('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))');
            circle.style.opacity = '0';
            circle.style.animation = `fadeInScale 0.6s ease-out forwards`;
            circle.style.animationDelay = `${index * 0.1 + 0.5}s`;
            
            svg.appendChild(circle);
        });
    }

    function getNodeSize(level) {
        switch (level) {
            case 0: return 12; // Root
            case 1: return 10; // Level 1
            case 2: return 8;  // Level 2
            case 3: return 6;  // Level 3
            default: return 5;
        }
    }

    function getNodeColor(level) {
        switch (level) {
            case 0: return 'rgba(99, 102, 241, 0.9)';   // Indigo
            case 1: return 'rgba(147, 51, 234, 0.9)';   // Purple
            case 2: return 'rgba(236, 72, 153, 0.9)';   // Pink
            case 3: return 'rgba(6, 182, 212, 0.9)';    // Cyan
            default: return 'rgba(156, 163, 175, 0.9)';
        }
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        
        @keyframes fadeInScale {
            0% {
                opacity: 0;
                transform: scale(0.3);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
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
        
        <!-- API preview terminal This can be used after we implement the API to public -->
        <!-- <div class="mt-16 max-w-3xl mx-auto">
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
        </div> -->
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
                <a href="{{ site.github.main_repo | default: 'https://github.com/LDFLK' }}" 
                   class="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center ">
                    <span class="relative z-10 flex items-center">
                        <i data-lucide="git-fork" class="mr-2 h-5 w-5"></i>
                        Fork & Contribute
                        <i data-lucide="external-link" class="ml-2 h-4 w-4"></i>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="{{ site.github.issues | default: 'https://github.com/LDFLK/issues' }}" 
                   class="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <span class="relative z-10 flex items-center">
                        <i data-lucide="bug" class="mr-2 h-5 w-5 text-blue-400"></i>
                        Report Issues
                    </span>
                    <div class="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="{{ site.github.docs | default: 'https://docs.opendata.lk' }}" 
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
                        <div class="flex items-center space-x-1">
                            <span class="text-xs text-gray-400 font-mono">~/opendata</span>
                            <span class="text-xs text-green-400">main</span>
                        </div>
                    </div>
                    <div class="p-6 font-mono text-sm space-y-2">
                        <div class="flex items-start">
                            <span class="text-green-400 mr-2">❯</span>
                            <div class="flex-1">
                                <span class="text-green-400">git clone https://github.com/LFLK/nexoan.git</span>
                            </div>
                        </div>
                        <div class="text-gray-500">Cloning into 'nexoan'...</div>
                        <div class="flex items-start">
                            <span class="text-green-400 mr-2">❯</span>
                            <div class="flex-1">
                                <span class="text-yellow-400">cd nexoan && docker compose up</span>
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
