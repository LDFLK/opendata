document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('publications-grid');
  if (!grid) return;

  // ---------------------------------------------------------------------------
  // Filter pill labels — update visible label text when any dropdown changes
  // ---------------------------------------------------------------------------
  document.querySelectorAll('.pub-filter-wrap').forEach(function (wrap) {
    var select = wrap.querySelector('.pub-filter-select');
    var label  = wrap.querySelector('.pub-filter-label');
    if (!select || !label) return;
    var base = label.textContent.trim();
    select.addEventListener('change', function () {
      var val = select.options[select.selectedIndex].text;
      label.textContent = select.selectedIndex === 0 ? base : base + '  ' + val;
    });
  });

  // ---------------------------------------------------------------------------
  // Publications grid pagination — 9 cards per page
  // ---------------------------------------------------------------------------
  var perPage     = 9;
  var currentPage = 1;
  var items       = Array.from(grid.querySelectorAll('.pub-card'));
  var total       = items.length;

  var pagination   = document.getElementById('pub-pagination');
  var resultsInfo  = document.getElementById('pub-results-info');
  var prevBtn      = document.getElementById('pub-prev-btn');
  var nextBtn      = document.getElementById('pub-next-btn');
  var pageNumbers  = document.getElementById('pub-page-numbers');
  var showingStart = document.getElementById('pub-showing-start');
  var showingEnd   = document.getElementById('pub-showing-end');
  var totalEl      = document.getElementById('pub-total');

  function calcTotalPages() {
    return Math.max(1, Math.ceil(total / perPage));
  }
  var totalPages = calcTotalPages();

  function getPageRange(page) {
    var start = (page - 1) * perPage;
    return { start: start, end: Math.min(start + perPage, total) };
  }

  function refreshPaginationUI() {
    if (total > perPage) {
      pagination.style.display  = 'flex';
      resultsInfo.style.display = 'block';
    } else {
      pagination.style.display  = 'none';
      resultsInfo.style.display = total > 0 ? 'block' : 'none';
    }
    totalEl.textContent = total;
    var headingCount = document.getElementById('pub-heading-count');
    if (headingCount) headingCount.textContent = total;
  }

  function showPage(page) {
    currentPage = page;
    items.forEach(function (item) { item.style.display = 'none'; });
    var range = getPageRange(page);
    for (var i = range.start; i < range.end; i++) {
      items[i].style.display = 'flex';
    }
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
    renderPageNumbers();
    showingStart.textContent = range.start + 1;
    showingEnd.textContent   = range.end;
    refreshPaginationUI();
  }

  function renderPageNumbers() {
    pageNumbers.innerHTML = '';
    for (var i = 1; i <= totalPages; i++) {
      (function (p) {
        var btn = document.createElement('button');
        btn.textContent = p;
        btn.setAttribute('aria-label', 'Page ' + p);
        btn.className = p === currentPage
          ? 'w-8 h-8 rounded-md bg-gray-900 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
          : 'w-8 h-8 rounded-md text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2';
        if (p === currentPage) btn.setAttribute('aria-current', 'page');
        btn.addEventListener('click', function () { showPage(p); });
        pageNumbers.appendChild(btn);
      })(i);
    }
  }

  prevBtn.addEventListener('click', function () { if (currentPage > 1) showPage(currentPage - 1); });
  nextBtn.addEventListener('click', function () { if (currentPage < totalPages) showPage(currentPage + 1); });

  showPage(1);

  // ---------------------------------------------------------------------------
  // Filter + Sort — unified state; all three controls call applyAll()
  // ---------------------------------------------------------------------------
  var typeSelectEl    = document.querySelector('.pub-type-select');
  var yearSelectEl    = document.querySelector('.pub-year-select');
  var projectSelectEl = document.querySelector('.pub-project-select');
  var sortSelectEl    = document.querySelector('.pub-sort-select');

  var currentType    = 'all';
  var currentYear    = 'all';
  var currentProject = 'all';
  var currentSort    = 'default';
  var originalOrder  = Array.from(grid.querySelectorAll('.pub-card'));

  function applyAll() {
    var allCards = Array.from(grid.querySelectorAll('.pub-card'));

    allCards.forEach(function (card) {
      var typeOk    = currentType === 'all' || card.getAttribute('data-type') === currentType;
      var year      = (card.getAttribute('data-date') || '').slice(0, 4);
      var yearOk    = currentYear === 'all' || year === currentYear;
      var projectOk = currentProject === 'all' || card.getAttribute('data-project') === currentProject;
      card.style.display = (typeOk && yearOk && projectOk) ? '' : 'none';
    });

    items = allCards.filter(function (c) { return c.style.display !== 'none'; });
    total = items.length;

    if (currentSort === 'default') {
      items.sort(function (a, b) {
        return originalOrder.indexOf(a) - originalOrder.indexOf(b);
      });
    } else if (currentSort === 'newest' || currentSort === 'oldest') {
      items.sort(function (a, b) {
        var dA = a.getAttribute('data-date') || '';
        var dB = b.getAttribute('data-date') || '';
        return currentSort === 'newest' ? dB.localeCompare(dA) : dA.localeCompare(dB);
      });
    } else if (currentSort === 'az') {
      items.sort(function (a, b) {
        var tA = (a.getAttribute('data-title') || '').toLowerCase();
        var tB = (b.getAttribute('data-title') || '').toLowerCase();
        return tA.localeCompare(tB);
      });
    }
    items.forEach(function (card) { grid.appendChild(card); });

    totalPages = calcTotalPages();
    showPage(1);
  }

  if (typeSelectEl) {
    typeSelectEl.addEventListener('change', function () {
      currentType = typeSelectEl.value;
      applyAll();
    });
  }
  if (projectSelectEl) {
    projectSelectEl.addEventListener('change', function () {
      currentProject = projectSelectEl.value;
      applyAll();
    });
  }
  if (yearSelectEl) {
    yearSelectEl.addEventListener('change', function () {
      currentYear = yearSelectEl.value;
      applyAll();
    });
  }
  if (sortSelectEl) {
    sortSelectEl.addEventListener('change', function () {
      currentSort = sortSelectEl.value;
      applyAll();
    });
  }

});
