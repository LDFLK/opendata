---
layout: default
title: "Home"
description: "Empowering communities through transparent access to public information"
---

<!-- Hero Section -->
<section id="home" class="relative py-20 md:py-32 lg:py-40 overflow-hidden">
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
</section>

<!-- Mission Section -->
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
</section>

<!-- Featured Datasets Section -->
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
</section>

<!-- Newsletter CTA Section -->
<section class="py-20 bg-primary-500 text-white">
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
</section>
