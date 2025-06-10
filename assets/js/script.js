document.addEventListener('DOMContentLoaded', function() {

    // Delay animations to allow fade-in to complete first
    setTimeout(() => {
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
        if (matrixRain) {
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
        }

        // Start counter animations with delay
        setTimeout(() => {
            if (document.getElementById('counter-datasets')) animateCounter('counter-datasets', 50000);
            if (document.getElementById('counter-apis')) animateCounter('counter-apis', 320);
            if (document.getElementById('counter-users')) animateCounter('counter-users', 12500);
        }, 500);
        
        // Scanning line animation
        const scanningLine = document.getElementById('scanning-line');
        if (scanningLine) {
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
        }
    }, 1800); // Delay to allow fade-in animations to complete

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
            this.activeNodeId = null;
            this.animationFrameId = null;
            this.particles = [];
            this.pulseRings = [];
            this.isRotating = false;
            this.rotationSpeed = 0.2;
            this.mousePosition = { x: 0, y: 0 };
            
            if (!this.svg) return;
            
            // Get SVG dimensions
            const rect = this.svg.getBoundingClientRect();
            this.width = rect.width || 800;
            this.height = 384; // h-96 equivalent
            
            // Updated data structure with 3D positioning
            this.data = {
                nodes: [
                    { id: 'government', label: 'Government', type: 'government', x: this.width * 0.15, y: this.height * 0.5, z: 0 },
                    { id: 'ministry', label: 'Ministry', type: 'ministry', x: this.width * 0.4, y: this.height * 0.5, z: 20 },
                    { id: 'department', label: 'Department', type: 'department', x: this.width * 0.65, y: this.height * 0.5, z: 40 },
                    { id: 'operations', label: 'Operations', type: 'operations', x: this.width * 0.85, y: this.height * 0.25, z: 60 },
                    { id: 'division1', label: 'Division A', type: 'division', x: this.width * 0.85, y: this.height * 0.5, z: 60 },
                    { id: 'division2', label: 'Division B', type: 'division', x: this.width * 0.85, y: this.height * 0.75, z: 60 }
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
            // Clear any existing content
            this.svg.innerHTML = '';
            
            // Add 3D perspective - more subtle
            this.svg.style.transform = 'perspective(1000px) rotateX(2deg)';
            
            // Create elements in the correct order
            this.createGridBackground();
            this.createConnections();
            this.createNodes();
            
            // Removed pulse rings and particle animations
            
            // Add minimal animations with delay
            setTimeout(() => {
            this.setupEventListeners();
                // Don't auto-rotate, use mouse movement instead
                this.toggle3DRotation(false);
            }, 800);
        }
        
        createGridBackground() {
            const gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            gridGroup.classList.add('grid-background-group');
            
            // Create horizontal lines
            for (let y = 0; y <= this.height; y += 20) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', '0');
                line.setAttribute('y1', y);
                line.setAttribute('x2', this.width);
                line.setAttribute('y2', y);
                line.classList.add('grid-background');
                gridGroup.appendChild(line);
            }
            
            // Create vertical lines
            for (let x = 0; x <= this.width; x += 20) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x);
                line.setAttribute('y1', '0');
                line.setAttribute('x2', x);
                line.setAttribute('y2', this.height);
                line.classList.add('grid-background');
                gridGroup.appendChild(line);
            }
            
            this.svg.appendChild(gridGroup);
        }
        
        createConnections() {
            // Create a group for connections
            const connectionsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            connectionsGroup.classList.add('connections-group');
            
            this.data.connections.forEach((conn) => {
                const fromNode = this.data.nodes.find(n => n.id === conn.from);
                const toNode = this.data.nodes.find(n => n.id === conn.to);
                
                if (fromNode && toNode) {
                    // Create curved path instead of straight line
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    
                    // Calculate control points for a subtle curve with z-depth
                    const dx = toNode.x - fromNode.x;
                    const dy = toNode.y - fromNode.y;
                    const dz = toNode.z - fromNode.z;
                    
                    // Adjust control point based on z-depth
                    const zFactor = Math.abs(dz) * 0.01;
                    const controlX = fromNode.x + dx * 0.5;
                    const controlY = fromNode.y + dy * 0.5 - zFactor * 30;
                    
                    // Path with quadratic curve
                    const d = `M ${fromNode.x} ${fromNode.y} Q ${controlX} ${controlY} ${toNode.x} ${toNode.y}`;
                    
                    path.setAttribute('d', d);
                    path.classList.add('connection-line');
                    path.setAttribute('data-from', conn.from);
                    path.setAttribute('data-to', conn.to);
                    path.setAttribute('data-z', (fromNode.z + toNode.z) / 2);
                    
                    // Store path data for animation
                    conn.path = {
                        d,
                        element: path,
                        from: { x: fromNode.x, y: fromNode.y, z: fromNode.z },
                        to: { x: toNode.x, y: toNode.y, z: toNode.z },
                        control: { x: controlX, y: controlY, z: (fromNode.z + toNode.z) / 2 }
                    };
                    
                    connectionsGroup.appendChild(path);
                }
            });
            
            this.svg.appendChild(connectionsGroup);
        }
        
        createNodes() {
            const nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            nodesGroup.classList.add('nodes-group');
            
            this.data.nodes.forEach((node) => {
                const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                nodeGroup.classList.add('node');
                nodeGroup.setAttribute('data-id', node.id);
                nodeGroup.setAttribute('data-z', node.z);
                nodeGroup.setAttribute('role', 'button');
                nodeGroup.setAttribute('aria-label', `${node.label} node`);
                nodeGroup.setAttribute('tabindex', '0');
                
                // Apply 3D effect based on z position
                const scale = 1 - (node.z * 0.001);
                nodeGroup.style.transform = `scale(${scale})`;
                nodeGroup.style.opacity = scale;
                
                // Node circle
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', node.x);
                circle.setAttribute('cy', node.y);
                circle.setAttribute('r', 25);
                circle.classList.add('node-circle');
                
                // Node icon
                const iconSize = 20;
                const icon = this.createNodeIcon(node.x, node.y, this.getNodeSymbol(node.type), iconSize);
                icon.classList.add('node-icon');
                
                // Node label
                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('x', node.x);
                label.setAttribute('y', node.y + 25 + 20);
                label.textContent = node.label;
                label.classList.add('node-label');
                
                nodeGroup.appendChild(circle);
                nodeGroup.appendChild(icon);
                nodeGroup.appendChild(label);
                
                nodesGroup.appendChild(nodeGroup);
            });
            
            this.svg.appendChild(nodesGroup);
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
        
        toggle3DRotation(enable) {
            this.isRotating = enable;
            
            if (enable) {
                this.svg.classList.add('rotate-3d');
                // Use a more subtle rotation
                this.svg.style.animation = 'rotate3d 60s linear infinite';
                } else {
                this.svg.classList.remove('rotate-3d');
                this.svg.style.animation = '';
            }
        }
        
        setupEventListeners() {
            document.querySelectorAll('.node').forEach(node => {
                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const nodeId = node.getAttribute('data-id');
                    this.activateNode(nodeId);
                });
                
                // Add keyboard accessibility
                node.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const nodeId = node.getAttribute('data-id');
                        this.activateNode(nodeId);
                    }
                });
                
                // Add subtle hover effect
                node.addEventListener('mouseenter', () => {
                    if (node.getAttribute('data-id') !== this.activeNodeId) {
                        node.style.opacity = '0.9';
                    }
                });
                
                node.addEventListener('mouseleave', () => {
                    if (node.getAttribute('data-id') !== this.activeNodeId) {
                        node.style.opacity = '1';
                    }
                });
            });
            
            // Enhanced interactive 3D rotation based on mouse position
            const container = this.svg.parentElement;
            
            // Track if mouse is over the container
            let isMouseOver = false;
            
            container.addEventListener('mouseenter', () => {
                isMouseOver = true;
            });
            
            container.addEventListener('mouseleave', () => {
                isMouseOver = false;
                // Smoothly return to default position
                this.animateToDefaultPosition();
            });
            
            // Use document mousemove for smoother tracking
            document.addEventListener('mousemove', (e) => {
                if (!isMouseOver) return;
                
                const rect = container.getBoundingClientRect();
                
                // Check if mouse is within the container bounds
                if (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                ) {
                    // Calculate position relative to container center
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    
                    // Calculate normalized position (-1 to 1)
                    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
                    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
                    
                    // Apply rotation with easing
                    this.applyRotation(normalizedX, normalizedY);
                }
            });
            
            // Close info panel when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.node') && !e.target.closest('.node-info')) {
                    this.clearActiveNode();
                }
            });
            
            // Add keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.clearActiveNode();
                }
            });
        }
        
        applyRotation(normalizedX, normalizedY) {
            // Apply rotation with easing for smoother movement
            const rotationY = normalizedX * 15; // Horizontal mouse = Y rotation
            const rotationX = -normalizedY * 10; // Vertical mouse = X rotation
            
            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
                this.svg.style.transform = `
                    perspective(1000px)
                    rotateY(${rotationY}deg)
                    rotateX(${rotationX}deg)
                `;
            });
        }
        
        animateToDefaultPosition() {
            // Create animation to smoothly return to default position
            this.svg.style.transition = 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
            this.svg.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(0deg)';
            
            // Remove transition after animation completes
            setTimeout(() => {
                this.svg.style.transition = '';
            }, 1200);
        }
        
        activateNode(nodeId) {
            // If already active, just toggle off
            if (this.activeNodeId === nodeId) {
                this.clearActiveNode();
                return;
            }
            
            // Clear any previous active node
            this.clearActiveNode();
            
            // Set new active node
            this.activeNodeId = nodeId;
            const node = document.querySelector(`.node[data-id="${nodeId}"]`);
            if (node) {
                node.classList.add('active');
            }
            
            // Highlight connections
            this.highlightConnections(nodeId);
            
            // Show node info
            this.showNodeInfo(nodeId);
        }
        
        clearActiveNode() {
            // Remove active class from all nodes
            document.querySelectorAll('.node.active').forEach(node => {
                node.classList.remove('active');
            });
            
            // Clear connection highlights
            document.querySelectorAll('.connection-line.active').forEach(conn => {
                conn.classList.remove('active');
            });
            
            // Hide info panel
                    this.nodeInfo.classList.remove('visible');
            
            // Reset active node id
            this.activeNodeId = null;
        }
        
        highlightConnections(nodeId) {
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
    }
    
    // Initialize the visualizer
    setTimeout(() => {
    new HierarchyVisualizer();
    }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    // Modern floating elements that appear on scroll
    class ModernScrollElements {
        constructor() {
            this.elements = [];
            this.createElements();
            this.setupScrollListeners();
        }
        
        createElements() {
            // Define element types (remove large colorful elements)
            const elementTypes = [
                {
                    name: 'sphere',
                    render: (container) => this.createSphere(container)
                },
                {
                    name: 'ring',
                    render: (container) => this.createRing(container)
                },
                {
                    name: 'dataPoint',
                    render: (container) => this.createDataPoint(container)
                },
                {
                    name: 'floatingText',
                    render: (container) => this.createFloatingText(container)
                },
                {
                    name: 'hexagon',
                    render: (container) => this.createHexagon(container)
                }
            ];
            
            // Create elements at various positions (more positions for more variety)
            const positions = [
                { left: '5%', top: '20%' },
                { left: '8%', top: '45%' },
                { left: '12%', top: '70%' },
                { right: '5%', top: '25%' },
                { right: '10%', top: '50%' },
                { right: '7%', top: '75%' },
                { left: '20%', top: '30%' },
                { right: '18%', top: '65%' }
            ];
            
            // Create each element with a random type
            positions.forEach((pos, index) => {
                // Select a random element type
                const typeIndex = Math.floor(Math.random() * elementTypes.length);
                const type = elementTypes[typeIndex];
                
                // Create container
                const container = document.createElement('div');
                container.className = 'fixed pointer-events-none opacity-0 transition-all duration-700';
                container.style.zIndex = '5';
                
                // Set position
                Object.keys(pos).forEach(key => {
                    container.style[key] = pos[key];
                });
                
                // Add unique ID
                const id = `scroll-element-${index}`;
                container.id = id;
                
                // Render the element
                type.render(container);
                
                // Add to document
                document.body.appendChild(container);
                
                // Store element data with more varied timing
                this.elements.push({
                    id,
                    element: container,
                    scrollStart: 0.05 + (index * 0.04), // More staggered appearances
                    scrollEnd: 0.6 + (index * 0.04),    // More staggered disappearances
                    initialTransform: container.style.transform || '',
                    movePattern: Math.floor(Math.random() * 4) // Random movement pattern
                });
            });
        }
        
        createSphere(container) {
            const size = 30 + Math.random() * 20; // Smaller size
            const sphere = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            sphere.setAttribute('width', size);
            sphere.setAttribute('height', size);
            sphere.setAttribute('viewBox', '0 0 100 100');
            
            // Create concentric circles
            const colors = ['rgba(59, 130, 246, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(236, 72, 153, 0.1)']; // Reduced opacity
            for (let i = 0; i < 3; i++) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', '50');
                circle.setAttribute('cy', '50');
                circle.setAttribute('r', 40 - (i * 10));
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', colors[i]);
                circle.setAttribute('stroke-width', '1');
                sphere.appendChild(circle);
                
                // Add animation
                const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animate.setAttribute('attributeName', 'stroke-dasharray');
                animate.setAttribute('values', '0 251.2; 251.2 0');
                animate.setAttribute('dur', `${3 + i}s`);
                animate.setAttribute('repeatCount', 'indefinite');
                circle.appendChild(animate);
            }
            
            // Add ellipses for 3D effect
            for (let i = 0; i < 3; i++) {
                const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
                ellipse.setAttribute('cx', '50');
                ellipse.setAttribute('cy', '50');
                ellipse.setAttribute('rx', 40);
                ellipse.setAttribute('ry', 15);
                ellipse.setAttribute('fill', 'none');
                ellipse.setAttribute('stroke', 'rgba(255, 255, 255, 0.05)'); // Reduced opacity
                ellipse.setAttribute('stroke-width', '1');
                ellipse.setAttribute('transform', `rotate(${i * 60})`);
                sphere.appendChild(ellipse);
            }
            
            container.appendChild(sphere);
        }
        
        createRing(container) {
            const size = 35 + Math.random() * 20; // Smaller size
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
            svg.setAttribute('viewBox', '0 0 100 100');
            
            // Create rings
            for (let i = 0; i < 3; i++) {
                const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                ring.setAttribute('cx', '50');
                ring.setAttribute('cy', '50');
                ring.setAttribute('r', 40 - (i * 10));
                ring.setAttribute('fill', 'none');
                ring.setAttribute('stroke', `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.1)`); // Reduced opacity
                ring.setAttribute('stroke-width', '1.5');
                ring.setAttribute('stroke-dasharray', '10 5');
                
                // Add animation
                const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
                animate.setAttribute('attributeName', 'transform');
                animate.setAttribute('type', 'rotate');
                animate.setAttribute('from', '0 50 50');
                animate.setAttribute('to', '360 50 50');
                animate.setAttribute('dur', `${10 + i * 5}s`);
                animate.setAttribute('repeatCount', 'indefinite');
                ring.appendChild(animate);
                
                svg.appendChild(ring);
            }
            
            container.appendChild(svg);
        }
        
        createDataPoint(container) {
            const size = 40 + Math.random() * 20; // Smaller size
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
            svg.setAttribute('viewBox', '0 0 100 100');
            
            // Create data points
            const points = [];
            const numPoints = 4 + Math.floor(Math.random() * 3); // Fewer points
            
            for (let i = 0; i < numPoints; i++) {
                const angle = (i / numPoints) * Math.PI * 2;
                const radius = 30 + Math.random() * 10;
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                points.push({ x, y });
            }
            
            // Draw connections
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', points[i].x);
                    line.setAttribute('y1', points[i].y);
                    line.setAttribute('x2', points[j].x);
                    line.setAttribute('y2', points[j].y);
                    line.setAttribute('stroke', 'rgba(255, 255, 255, 0.05)'); // Reduced opacity
                    line.setAttribute('stroke-width', '0.5');
                    svg.appendChild(line);
                }
            }
            
            // Draw points
            points.forEach(point => {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', point.x);
                circle.setAttribute('cy', point.y);
                circle.setAttribute('r', 1.5 + Math.random() * 1); // Smaller points
                circle.setAttribute('fill', 'rgba(56, 189, 248, 0.3)'); // Reduced opacity
                
                // Add pulse animation
                const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animate.setAttribute('attributeName', 'opacity');
                animate.setAttribute('values', '0.1;0.4;0.1'); // Reduced opacity
                animate.setAttribute('dur', `${2 + Math.random() * 3}s`);
                animate.setAttribute('repeatCount', 'indefinite');
                circle.appendChild(animate);
                
                svg.appendChild(circle);
            });
            
            container.appendChild(svg);
        }
        
        createFloatingText(container) {
            const terms = [
                'Data', 'Analytics', 'Metrics',
                'Reports', 'Budget', 'Transparency',
                'Governance', 'Planning', 'Strategy'
            ];
            
            const div = document.createElement('div');
            div.className = 'text-xs font-mono opacity-30'; // Reduced opacity
            div.style.color = 'rgba(56, 189, 248, 0.6)'; // Reduced opacity
            div.style.textShadow = '0 0 5px rgba(56, 189, 248, 0.2)'; // Reduced glow
            div.style.whiteSpace = 'nowrap';
            
            // Select a random term
            const term = terms[Math.floor(Math.random() * terms.length)];
            div.textContent = term;
            
            container.appendChild(div);
        }
        
        createHexagon(container) {
            const size = 25 + Math.random() * 15; // Smaller size
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
            svg.setAttribute('viewBox', '0 0 100 100');
            
            // Create hexagon
            const hexagon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            
            // Calculate hexagon points
            const points = [];
            for (let i = 0; i < 6; i++) {
                const angle = (i * 60) * Math.PI / 180;
                const x = 50 + 40 * Math.cos(angle);
                const y = 50 + 40 * Math.sin(angle);
                points.push(`${x},${y}`);
            }
            
            hexagon.setAttribute('points', points.join(' '));
            hexagon.setAttribute('fill', 'none');
            hexagon.setAttribute('stroke', 'rgba(139, 92, 246, 0.2)'); // Reduced opacity
            hexagon.setAttribute('stroke-width', '1.5');
            
            // Add animation
            const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
            animate.setAttribute('attributeName', 'transform');
            animate.setAttribute('type', 'rotate');
            animate.setAttribute('from', '0 50 50');
            animate.setAttribute('to', '360 50 50');
            animate.setAttribute('dur', '20s');
            animate.setAttribute('repeatCount', 'indefinite');
            hexagon.appendChild(animate);
            
            svg.appendChild(hexagon);
            container.appendChild(svg);
        }
        
        setupScrollListeners() {
            // Initial check
            this.checkScroll();
            
            // Listen for scroll events
            window.addEventListener('scroll', () => {
                this.checkScroll();
            }, { passive: true });
            
            // Also check on resize
            window.addEventListener('resize', () => {
                this.checkScroll();
            }, { passive: true });
        }
        
        checkScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Find mission section and org chart section
            const missionSection = document.querySelector('.mission-section') || 
                                  document.getElementById('mission-section') ||
                                  document.querySelector('section:contains("Our Mission")');
                                  
            const orgChartSection = document.querySelector('.org-hierarchy-container')?.closest('section') ||
                                   document.getElementById('org-chart-section') ||
                                   document.querySelector('section:contains("Visualize Organizational Structures")');
            
            // Check if we're in the target sections
            let inTargetSection = false;
            let sectionProgress = 0;
            let sectionElement = null;
            
            if (missionSection) {
                const rect = missionSection.getBoundingClientRect();
                if (rect.top < windowHeight && rect.bottom > 0) {
                    inTargetSection = true;
                    sectionProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    sectionElement = missionSection;
                }
            }
            
            if (!inTargetSection && orgChartSection) {
                const rect = orgChartSection.getBoundingClientRect();
                if (rect.top < windowHeight && rect.bottom > 0) {
                    inTargetSection = true;
                    sectionProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    sectionElement = orgChartSection;
                }
            }
            
            // Update each element based on section visibility
            this.elements.forEach(item => {
                const element = document.getElementById(item.id);
                if (!element) return;
                
                if (inTargetSection) {
                    // Calculate limited progress (0-1) within the section
                    const limitedProgress = Math.max(0, Math.min(1, sectionProgress));
                    
                    // Fade in/out based on position in section
                    let opacity = 0.5; // Maximum opacity reduced to 50%
                    if (limitedProgress < 0.1) {
                        opacity = (limitedProgress / 0.1) * 0.5; // Fade in
                    } else if (limitedProgress > 0.9) {
                        opacity = ((1 - (limitedProgress - 0.9) / 0.1)) * 0.5; // Fade out
                    }
                    
                    element.style.opacity = opacity.toFixed(2);
                    
                    // Apply different movement patterns based on movePattern
                    let transform = item.initialTransform;
                    
                    switch(item.movePattern) {
                        case 0:
                            // Standard vertical movement (reduced movement)
                            const translateY = (limitedProgress - 0.5) * 20;
                            const rotation = (limitedProgress - 0.5) * 5;
                            transform += ` translateY(${translateY}px) rotate(${rotation}deg)`;
                            break;
                            
                        case 1:
                            // Horizontal movement (reduced)
                            const translateX = Math.sin(limitedProgress * Math.PI) * 15;
                            transform += ` translateX(${translateX}px)`;
                            break;
                            
                        case 2:
                            // Circular movement (reduced)
                            const angle = limitedProgress * Math.PI * 2;
                            const circleX = Math.cos(angle) * 10;
                            const circleY = Math.sin(angle) * 10;
                            transform += ` translate(${circleX}px, ${circleY}px)`;
                            break;
                            
                        case 3:
                            // Scale pulsing (reduced)
                            const scale = 0.9 + Math.sin(limitedProgress * Math.PI * 3) * 0.1;
                            transform += ` scale(${scale})`;
                            break;
                    }
                    
                    element.style.transform = transform;
                } else {
                    element.style.opacity = '0';
                }
            });
        }
    }
    
    // Initialize modern scroll elements with delay
    setTimeout(() => {
        new ModernScrollElements();
    }, 1000);
});
