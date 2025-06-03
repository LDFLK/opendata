---
layout: default
title: "Home"
description: "Empowering communities through transparent access to public information"
---

{% include hero-section.html %}
{% include mission-section.html %}
{% include organization-hierarchy-section.html %}
{% include what-we-offer-section.html %}
{% include github-statics-section.html %}






<script>
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
</script>