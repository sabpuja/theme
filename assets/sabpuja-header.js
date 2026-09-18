/* Sabpuja predictive header search — staging only */
(function () {
  'use strict';

  function debounce(fn, wait) {
    var timer;
    return function () {
      var context = this;
      var args = arguments;
      window.clearTimeout(timer);
      timer = window.setTimeout(function () { fn.apply(context, args); }, wait);
    };
  }

  /* Keep header predictive search on the same approved image set as the
     full search page and Popular Products. Shopify's /search/suggest.json
     returns the catalog featured image, which can still be an older asset. */
  var approvedImageByHandle = {
    'akshat-rice': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sabpuja-akshat-rice-grid-01.webp?v=1789557783',
    'cotton-wicks-batti': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sabpuja-cotton-wicks-batti-grid-01.webp?v=1789557796',
    'dhoop-sticks': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sabpuja-dhoop-sticks-grid-01.webp?v=1789557806',
    'gomutra': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sabpuja-gomutra-grid-01.webp?v=1789557819',
    'red-cloth-lal-chunari': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sabpuja-red-cloth-lal-chunari-grid-01.webp?v=1789557831',
    'roli-kumkum': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/roli-kumkum-01.webp?v=1789514717',
    'chandan-powder': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/chandan-powder-01.webp?v=1789514728',
    'haldi-turmeric-powder': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/haldi-turmeric-powder-01.webp?v=1789514739',
    'sindoor': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sindoor-01.webp?v=1789514753',
    'panchmeva': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/panchmeva-01.webp?v=1789514763',
    'ganga-jal': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/ganga-jal-01.webp?v=1789514773',
    'havan-samidha': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/havan-samidha-01.webp?v=1789514793',
    'kapoor-camphor': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/kapoor-camphor-01.webp?v=1789514813',
    'honey-sacred-puja-use': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/honey-01.webp?v=1789514823',
    'ghee-clarified-butter': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/ghee-01.webp?v=1789514833',
    'guggul-resin': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/guggul-01.webp?v=1789514844',
    'janeu-sacred-thread': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/janeu-01.webp?v=1789514856',
    'supari-betel-nut': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/supari-01.webp?v=1789514868',
    'white-cloth': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/white-cloth-01.webp?v=1789514912',
    'yellow-cloth': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/yellow-cloth-01.webp?v=1789514925',
    'coconut': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/coconut-01.webp?v=1789514936',
    'navagraha-samagri': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navagraha-samagri-01.webp?v=1789514947',
    'clove': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/clove-01.webp?v=1789514957',
    'mishri': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/mishri-01.webp?v=1789514969',
    'sandalwood-stick': 'https://cdn.shopify.com/s/files/1/0923/1381/3308/files/sandalwood-stick-01.webp?v=1789514981'
  };

  function productHandle(product) {
    if (!product) return '';
    if (product.handle) return String(product.handle).toLowerCase();
    var url = product.url || '';
    var match = String(url).match(/\/products\/([^/?#]+)/i);
    return match && match[1] ? match[1].toLowerCase() : '';
  }

  function imageUrl(product) {
    var handle = productHandle(product);
    if (handle && approvedImageByHandle[handle]) return approvedImageByHandle[handle];
    if (!product || !product.image) return '';
    if (typeof product.image === 'string') return product.image.indexOf('//') === 0 ? 'https:' + product.image : product.image;
    var value = product.image.url || product.image.src || '';
    return value && value.indexOf('//') === 0 ? 'https:' + value : value;
  }

  function priceText(product) {
    if (!product || product.price === undefined || product.price === null || product.price === '') return '';
    if (typeof product.price === 'string') return product.price;
    if (typeof product.price === 'number') {
      try {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(product.price);
      } catch (error) {
        return '₹' + product.price;
      }
    }
    if (product.price.amount !== undefined) {
      var amount = Number(product.price.amount);
      var currency = product.price.currencyCode || 'INR';
      if (!Number.isNaN(amount)) {
        try { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: currency, maximumFractionDigits: 2 }).format(amount); }
        catch (error) { return String(product.price.amount); }
      }
    }
    return '';
  }

  function createEl(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function initPredictiveSearch(form, formIndex) {
    var input = form.querySelector('input[name="q"]');
    if (!input || form.dataset.spSearchReady === 'true') return;

    form.dataset.spSearchReady = 'true';
    form.classList.add('sp-predictive-search');

    var panel = createEl('div', 'sp-search-results');
    panel.id = 'sp-search-results-' + formIndex;
    panel.hidden = true;
    panel.setAttribute('role', 'listbox');
    panel.setAttribute('aria-label', 'Product suggestions');
    form.appendChild(panel);

    input.setAttribute('autocomplete', 'off');
    input.setAttribute('spellcheck', 'false');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-controls', panel.id);
    input.setAttribute('aria-expanded', 'false');

    var controller = null;
    var requestNumber = 0;
    var activeIndex = -1;

    function items() {
      return Array.prototype.slice.call(panel.querySelectorAll('.sp-search-result-item, .sp-search-view-all'));
    }

    function setExpanded(value) {
      input.setAttribute('aria-expanded', value ? 'true' : 'false');
    }

    function closePanel() {
      if (controller) {
        controller.abort();
        controller = null;
      }
      panel.hidden = true;
      panel.innerHTML = '';
      activeIndex = -1;
      setExpanded(false);
    }

    function showLoading() {
      panel.innerHTML = '';
      panel.appendChild(createEl('div', 'sp-search-loading', 'Searching…'));
      panel.hidden = false;
      setExpanded(true);
    }

    function addViewAll(query) {
      var all = createEl('a', 'sp-search-view-all', 'See all results for “' + query + '”');
      all.href = '/search?type=product&q=' + encodeURIComponent(query);
      panel.appendChild(all);
    }

    function render(products, query) {
      panel.innerHTML = '';
      activeIndex = -1;

      var q = query.toLocaleLowerCase();
      products = products.slice().sort(function (a, b) {
        var aStarts = (a.title || '').toLocaleLowerCase().indexOf(q) === 0 ? 0 : 1;
        var bStarts = (b.title || '').toLocaleLowerCase().indexOf(q) === 0 ? 0 : 1;
        return aStarts - bStarts;
      });

      panel.appendChild(createEl('div', 'sp-search-results-heading', products.length ? 'Products' : 'No matching products'));

      if (!products.length) {
        panel.appendChild(createEl('div', 'sp-search-empty', 'Try another product or puja name.'));
      } else {
        products.forEach(function (product) {
          var link = createEl('a', 'sp-search-result-item');
          link.href = product.url || '/search?type=product&q=' + encodeURIComponent(query);
          link.setAttribute('role', 'option');

          var src = imageUrl(product);
          if (src) {
            var image = createEl('img', 'sp-search-result-image');
            image.src = src;
            image.alt = '';
            image.loading = 'lazy';
            link.appendChild(image);
          } else {
            link.appendChild(createEl('span', 'sp-search-result-placeholder'));
          }

          var copy = createEl('span', 'sp-search-result-copy');
          copy.appendChild(createEl('strong', '', product.title || 'Product'));
          var price = priceText(product);
          if (price) copy.appendChild(createEl('small', '', price));
          else if (product.type || product.product_type) copy.appendChild(createEl('small', '', product.type || product.product_type));
          link.appendChild(copy);
          panel.appendChild(link);
        });
      }

      addViewAll(query);
      panel.hidden = false;
      setExpanded(true);
    }

    function renderFallback(query) {
      panel.innerHTML = '';
      panel.appendChild(createEl('div', 'sp-search-results-heading', 'Search Sabpuja'));
      panel.appendChild(createEl('div', 'sp-search-empty', 'Live suggestions are temporarily unavailable.'));
      addViewAll(query);
      panel.hidden = false;
      setExpanded(true);
    }

    var search = debounce(function () {
      var query = input.value.trim();
      if (!query) {
        closePanel();
        return;
      }

      if (controller) controller.abort();
      controller = new AbortController();
      requestNumber += 1;
      var thisRequest = requestNumber;
      showLoading();

      var url = new URL('/search/suggest.json', window.location.origin);
      url.searchParams.set('q', query);
      url.searchParams.set('resources[type]', 'product');
      url.searchParams.set('resources[limit]', '10');
      url.searchParams.set('resources[options][unavailable_products]', 'last');

      fetch(url.toString(), {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Predictive search request failed');
          return response.json();
        })
        .then(function (data) {
          if (thisRequest !== requestNumber || input.value.trim() !== query) return;
          var products = data && data.resources && data.resources.results && data.resources.results.products;
          render(Array.isArray(products) ? products : [], query);
        })
        .catch(function (error) {
          if (error && error.name === 'AbortError') return;
          if (thisRequest !== requestNumber || input.value.trim() !== query) return;
          renderFallback(query);
        });
    }, 140);

    input.addEventListener('input', search);
    input.addEventListener('focus', function () {
      if (input.value.trim()) search();
    });

    form.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closePanel();
        input.focus();
        return;
      }

      if (panel.hidden || (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) return;
      var resultItems = items();
      if (!resultItems.length) return;

      event.preventDefault();
      resultItems.forEach(function (item) { item.classList.remove('is-keyboard-active'); });
      if (event.key === 'ArrowDown') activeIndex = (activeIndex + 1) % resultItems.length;
      else activeIndex = (activeIndex - 1 + resultItems.length) % resultItems.length;
      resultItems[activeIndex].classList.add('is-keyboard-active');
      resultItems[activeIndex].focus();
    });

    document.addEventListener('pointerdown', function (event) {
      if (!form.contains(event.target)) closePanel();
    });
  }

  function boot() {
    var forms = document.querySelectorAll('.sp-header-search');
    for (var i = 0; i < forms.length; i += 1) initPredictiveSearch(forms[i], i + 1);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();


/* Sabpuja language preference modal v2 — native Shopify locales */
(function () {
  'use strict';

  var seenKey = 'sabpuja_language_prompt_seen_v2';
  var preferenceKey = 'sabpuja_language_preference_v2';

  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) {}
  }

  function bootLanguageChooser() {
    var modal = document.getElementById('sp-language-modal');
    if (!modal) return;

    var dialog = modal.querySelector('.sp-language-modal__dialog');
    var openers = document.querySelectorAll('[data-sp-language-open]');
    var closers = modal.querySelectorAll('[data-sp-language-close]');
    var choices = modal.querySelectorAll('[data-sp-language-choice]');
    var lastFocused = null;

    function openModal() {
      lastFocused = document.activeElement;
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('sp-language-modal-open');
      window.setTimeout(function () {
        var current = modal.querySelector('.sp-language-choice.is-active');
        var first = current || modal.querySelector('[data-sp-language-choice="en"]');
        if (first) first.focus();
      }, 20);
    }

    function closeModal(markSeen) {
      if (markSeen !== false) storageSet(seenKey, '1');
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('sp-language-modal-open');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    for (var i = 0; i < openers.length; i += 1) {
      openers[i].addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
      });
    }

    for (var j = 0; j < closers.length; j += 1) {
      closers[j].addEventListener('click', function () { closeModal(true); });
    }

    for (var k = 0; k < choices.length; k += 1) {
      choices[k].addEventListener('click', function () {
        var language = this.getAttribute('data-sp-language-choice');
        if (language) storageSet(preferenceKey, language);
        storageSet(seenKey, '1');
      });
    }

    modal.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal(true);
      }
      if (event.key !== 'Tab' || !dialog) return;
      var focusable = Array.prototype.slice.call(dialog.querySelectorAll('button:not([disabled]),a[href]'));
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    if (!storageGet(seenKey)) {
      window.setTimeout(openModal, 420);
    }
  }

  function bootUtilityDetails() {
    var details = Array.prototype.slice.call(document.querySelectorAll('.sp-header-utility'));
    if (!details.length) return;

    document.addEventListener('pointerdown', function (event) {
      details.forEach(function (item) {
        if (item.open && !item.contains(event.target)) item.removeAttribute('open');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      details.forEach(function (item) {
        if (item.open) {
          item.removeAttribute('open');
          var summary = item.querySelector('summary');
          if (summary) summary.focus();
        }
      });
    });
  }

  function bootHeaderUtilities() {
    bootLanguageChooser();
    bootUtilityDetails();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootHeaderUtilities);
  else bootHeaderUtilities();
})();
