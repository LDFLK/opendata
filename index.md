---
layout: default
title: "Home"
description: "Empowering communities through transparent access to public information"
---

<!-- Hero Section -->
<!-- <section id="home" class="relative py-20 md:py-32 lg:py-40 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>
    <div class="container mx-auto relative px-4 md:px-6">
        <div class="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-6">
                <div class="space-y-4">
                    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Empowering Communities Through
                        <span class="text-primary-500"> Open Data</span>
                    </h1>
                    <p class="text-lg text-gray-600 md:text-xl max-w-2xl">
                        We believe that access to public information is a fundamental right. Our mission is to make
                        government data transparent, accessible, and actionable for everyone.
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#datasets" class="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-600 transition-colors inline-flex items-center">
                        Explore Data 
                        <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
                    </a>
                    <a href="{{ '/about/' | relative_url }}" class="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
                        Learn More
                    </a>
                </div>
                <div class="flex items-center space-x-8 pt-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary-500">{{ site.stats.datasets | default: "50K+" }}</div>
                        <div class="text-sm text-gray-600">Datasets</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary-500">{{ site.stats.users | default: "100K+" }}</div>
                        <div class="text-sm text-gray-600">Users Served</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary-500">{{ site.stats.cities | default: "25+" }}</div>
                        <div class="text-sm text-gray-600">Cities</div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src="{{ '/assets/images/hero-image.jpg' | relative_url }}" 
                         alt="People working with data visualization" 
                         class="object-cover w-full h-full">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div class="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
                    <div class="flex items-center space-x-3">
                        <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium">Live Data Updates</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->

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

<!-- What We Offer Section -->
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center space-y-4 mb-16">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What We Offer</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools and resources to help you access, understand, and act on public information.
            </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors group-hover:scale-110 duration-300">
                    <i data-lucide="file-text" class="h-8 w-8 text-blue-600"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Access to Official Gazettes</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Browse and search through government gazettes by date, category, or keyword.
                </p>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-100 transition-colors group-hover:scale-110 duration-300">
                    <i data-lucide="trending-up" class="h-8 w-8 text-emerald-600"></i>
                </div>

                <h3 class="text-xl font-semibold text-gray-900">Data-Driven Insights</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Visualize and understand how government policies change over time.
                </p>
            </div>
            
             <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-100 transition-colors group-hover:scale-110 duration-300">
                    <i data-lucide="users" class="h-8 w-8 text-purple-600"></i>
                </div>

                <h3 class="text-xl font-semibold text-gray-900">Citizen-Centered Design</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Our platform is designed with simplicity and clarity at its core.
                </p>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center space-y-4 group hover:scale-105">
                <div class="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors group-hover:scale-110 duration-300">
                    <i data-lucide="megaphone" class="h-8 w-8 text-amber-600"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Advocacy for Transparency</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    We support initiatives and reforms that make government more accountable.
                </p>
            </div>
        </div>
    </div>
</section>




<!-- GitHub Contribution CTA Section -->
<section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border border-green-400 rounded-lg animate-pulse"></div>
        <div class="absolute top-32 right-20 w-24 h-24 border border-blue-400 rounded-full animate-bounce"></div>
        <div class="absolute bottom-20 left-1/4 w-16 h-16 border border-purple-400 rounded-lg animate-spin"></div>
        <div class="absolute bottom-32 right-1/3 w-20 h-20 border border-yellow-400 rounded-full animate-ping"></div>
    </div>
    <!-- Code Pattern Background -->
    <div class="absolute inset-0 opacity-5 font-mono text-xs leading-relaxed p-8">
        <div>git clone https://github.com/dataforall/main.git</div>
        <div>cd dataforall && npm install</div>
        <div>git checkout -b feature/transparency-tools</div>
        <div>// Add your awesome data visualization</div>
        <div>git commit -m "Enhance government data accessibility"</div>
        <div>git push origin feature/transparency-tools</div>
        <div>// Create pull request and change democracy!</div>
        <div>&nbsp;</div>
        <div>const impact = {</div>
        <div>&nbsp;&nbsp;transparency: true,</div>
        <div>&nbsp;&nbsp;democracy: "enhanced",</div>
        <div>&nbsp;&nbsp;community: "empowered"</div>
        <div>};</div>
    </div>
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
                <!-- <div class="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700 hover:border-green-400 transition-colors contribution-card">
                    <div class="text-2xl font-bold text-green-400 animate-pulse">{{ site.github.contributors | default: site.stats.users | default: "127" }}</div>
                    <div class="text-sm text-gray-300">Contributors</div>
                </div> -->
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

