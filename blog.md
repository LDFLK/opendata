---
layout: default
title: "Blog"
description: "Empowering communities through transparent access to public information"
---

<!-- {% include blog-section.html %} -->


<article>
  <h1>{{ page.title }}</h1>
  <p><small>{{ page.date | date: "%B %d, %Y" }}</small></p>
  <div class="content">
    {{ content }}
  </div>
</article>
