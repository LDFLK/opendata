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

    // binary number rain logic - Github contribution section
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
                line.setAttribute('stroke-width', '1');
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
            circle.setAttribute('stroke-width', '1');
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


document.addEventListener('DOMContentLoaded', function() {
    class HierarchyVisualizer {
        constructor() {
            this.svg = document.getElementById('hierarchySvg');
            this.nodeInfo = document.getElementById('nodeInfo');
            this.nodeInfoContent = document.getElementById('nodeInfoContent');
            
            if (!this.svg) return;
            
            // Get SVG dimensions
            const rect = this.svg.getBoundingClientRect();
            this.width = rect.width || 800;
            this.height = 384; // h-96 equivalent
            
            // Updated data structure - all nodes same size, Operations/Divisions under Department
            this.data = {
                nodes: [
                    { id: 'government', label: 'Government', type: 'government', x: this.width * 0.15, y: this.height * 0.5 },
                    { id: 'ministry', label: 'Ministry', type: 'ministry', x: this.width * 0.4, y: this.height * 0.5 },
                    { id: 'department', label: 'Department', type: 'department', x: this.width * 0.65, y: this.height * 0.5 },
                    { id: 'operations', label: 'Operations', type: 'operations', x: this.width * 0.85, y: this.height * 0.25 },
                    { id: 'division1', label: 'Division A', type: 'division', x: this.width * 0.85, y: this.height * 0.5 },
                    { id: 'division2', label: 'Division B', type: 'division', x: this.width * 0.85, y: this.height * 0.75 }
                ],
                connections: [
                    { from: 'government', to: 'ministry' },
                    { from: 'ministry', to: 'department' },
                    { from: 'department', to: 'operations' },
                    { from: 'department', to: 'division1' },
                    { from: 'department', to: 'division2' }
                ]
            };
            
            this.init();
        }
        
        init() {
            this.createConnections();
            this.createNodes();
            this.startDataFlowAnimation();
            this.setupEventListeners();
        }
        
        createConnections() {
            this.data.connections.forEach(conn => {
                const fromNode = this.data.nodes.find(n => n.id === conn.from);
                const toNode = this.data.nodes.find(n => n.id === conn.to);
                
                if (fromNode && toNode) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', fromNode.x);
                    line.setAttribute('y1', fromNode.y);
                    line.setAttribute('x2', toNode.x);
                    line.setAttribute('y2', toNode.y);
                    line.classList.add('connection-line');
                    line.setAttribute('data-from', conn.from);
                    line.setAttribute('data-to', conn.to);
                    
                    this.svg.appendChild(line);
                }
            });
        }
        
        createNodes() {
            this.data.nodes.forEach(node => {
                const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                nodeGroup.classList.add('node');
                nodeGroup.setAttribute('data-id', node.id);
                
                // Node circle - all same size now
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', node.x);
                circle.setAttribute('cy', node.y);
                circle.setAttribute('r', 25); // Same radius for all nodes
                circle.classList.add('node-circle', 'pulse-glow');
                
                // Node icon
                const iconSize = 20; // Same icon size for all nodes
                const icon = this.createNodeIcon(node.x, node.y, this.getNodeSymbol(node.type), iconSize);
                icon.classList.add('node-icon');
                
                // Node label
                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('x', node.x);
                label.setAttribute('y', node.y + 25 + 20); // radius + offset
                label.textContent = node.label;
                label.classList.add('node-label');
                
                nodeGroup.appendChild(circle);
                nodeGroup.appendChild(icon);
                nodeGroup.appendChild(label);
                
                this.svg.appendChild(nodeGroup);
            });
        }
        
        getNodeSymbol(type) {
            // Using Lucide icon names
            const icons = {
                government: 'crown',
                ministry: 'landmark',
                department: 'building-2',
                operations: 'settings',
                division: 'users'
            };
            return icons[type] || 'circle';
        }
        
        createNodeIcon(x, y, iconType, size = 20) {
            const iconGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            
            // Icon SVG paths based on Lucide icons
            const iconPaths = {
                crown: 'M2 20h20l-2-6H4l-2 6zM12 4l2 6h6l-2-6-3 3-3-3zM12 4L10 10H4l2-6 3 3 3-3z',
                landmark: 'M3 21h18M5 21V7l7-4 7 4v14M9 9v4M15 9v4',
                'building-2': 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z M6 12h12 M6 16h12 M8 6h.01 M16 6h.01 M8 10h.01 M16 10h.01',
                settings: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0z',
                users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'
            };
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', iconPaths[iconType] || iconPaths.users);
            path.setAttribute('stroke', '#e2e8f0');
            path.setAttribute('stroke-width', '1.5');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            
            // Scale the icon to fit within the specified size
            const scale = size / 24; // Lucide icons are 24x24 by default
            iconGroup.setAttribute('transform', `translate(${x - 12 * scale}, ${y - 12 * scale}) scale(${scale})`);
            
            iconGroup.appendChild(path);
            return iconGroup;
        }
        
        startDataFlowAnimation() {
            this.animateDataFlow();
            setInterval(() => {
                this.animateDataFlow();
            }, 3000);
        }
        
        animateDataFlow() {
            this.data.connections.forEach((conn, index) => {
                setTimeout(() => {
                    const fromNode = this.data.nodes.find(n => n.id === conn.from);
                    const toNode = this.data.nodes.find(n => n.id === conn.to);
                    
                    if (fromNode && toNode) {
                        this.createFlowParticle(fromNode, toNode);
                    }
                }, index * 500);
            });
        }
        
        createFlowParticle(from, to) {
            const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            particle.setAttribute('r', 4);
            particle.setAttribute('cx', from.x);
            particle.setAttribute('cy', from.y);
            particle.classList.add('data-flow');
            
            this.svg.appendChild(particle);
            
            // Animate particle movement
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const duration = 1500;
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                const currentX = from.x + (dx * easeProgress);
                const currentY = from.y + (dy * easeProgress);
                
                particle.setAttribute('cx', currentX);
                particle.setAttribute('cy', currentY);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Remove particle after animation
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }
            };
            
            requestAnimationFrame(animate);
        }
        
        setupEventListeners() {
            document.querySelectorAll('.node').forEach(node => {
                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const nodeId = node.getAttribute('data-id');
                    this.showNodeInfo(nodeId);
                    this.highlightConnections(nodeId);
                });
                
                node.addEventListener('mouseenter', () => {
                    const circle = node.querySelector('.node-circle');
                    if (circle) {
                        circle.style.transform = 'scale(1.1)';
                        circle.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))';
                    }
                });
                
                node.addEventListener('mouseleave', () => {
                    const circle = node.querySelector('.node-circle');
                    if (circle) {
                        circle.style.transform = 'scale(1)';
                        circle.style.filter = 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))';
                    }
                });
            });
            
            // Close info panel when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.node') && !e.target.closest('.node-info')) {
                    this.nodeInfo.classList.remove('visible');
                    this.clearHighlights();
                }
            });
        }
        
        showNodeInfo(nodeId) {
            const node = this.data.nodes.find(n => n.id === nodeId);
            if (node) {
                const connections = this.data.connections.filter(c => 
                    c.from === nodeId || c.to === nodeId
                ).length;
                
                const details = this.getNodeDetails(node);
                this.nodeInfoContent.innerHTML = `
                    <div class="font-mono">
                        <div class="text-cyan-400 font-bold mb-2">${node.label}</div>
                        <div class="text-gray-300 text-xs space-y-1">
                            <div>Type: <span class="text-blue-400">${node.type}</span></div>
                            <div>Connections: <span class="text-green-400">${connections}</span></div>
                            <div class="mt-2 text-gray-400">${details}</div>
                        </div>
                    </div>
                `;
                this.nodeInfo.classList.add('visible');
            }
        }
        
        getNodeDetails(node) {
            const details = {
                government: 'Supreme executive authority overseeing all ministries',
                ministry: 'Central governing body overseeing departments',
                department: 'Administrative division managing operations and divisions',
                operations: 'Operational unit executing department policies',
                division: 'Specialized team handling specific department functions'
            };
            return details[node.type] || 'Administrative unit';
        }
        
        highlightConnections(nodeId) {
            this.clearHighlights();
            
            // Highlight all connections involving this node
            this.data.connections.forEach(conn => {
                if (conn.from === nodeId || conn.to === nodeId) {
                    const line = document.querySelector(`[data-from="${conn.from}"][data-to="${conn.to}"]`);
                    if (line) {
                        line.classList.add('active');
                    }
                }
            });
        }
        
        clearHighlights() {
            document.querySelectorAll('.connection-line.active').forEach(line => {
                line.classList.remove('active');
            });
        }
    }
    
    // Initialize the visualizer
    new HierarchyVisualizer();
});
