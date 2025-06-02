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

