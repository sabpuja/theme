/* Sabpuja Saved & Recently Viewed — browser-local, staging-first. No synthetic account data. */
(function () {
  'use strict';

  var SAVED_KEY = 'wishlist-storage'; // Existing theme wishlist storage contract.
  var RECENT_KEY = 'recently-viewed';  // Existing theme recently-viewed storage contract.
  var LIMIT = 18;

  function validHandle(value) {
    return typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,130}$/i.test(value);
  }

  function readList(key) {
    try {
      var parsed = JSON.parse(window.localStorage.getItem(key) || '[]');
      if (!Array.isArray(parsed)) return [];
      return Array.from(new Set(parsed.filter(validHandle))).slice(-LIMIT);
    } catch (error) {
      return [];
    }
  }

  function writeList(key, handles) {
    try {
      window.localStorage.setItem(key, JSON.stringify(handles.slice(-LIMIT)));
      return true;
    } catch (error) {
      return false;
    }
  }

  function isSaved(handle) {
    return readList(SAVED_KEY).indexOf(handle) !== -1;
  }

  function refreshSaveButtons() {
    document.querySelectorAll('[data-sp-save-handle]').forEach(function (button) {
      var handle = button.getAttribute('data-sp-save-handle');
      var saved = isSaved(handle);
      button.setAttribute('aria-pressed', String(saved));
      button.setAttribute('aria-label', (saved ? 'Remove from saved products' : 'Save product') + ': ' + (button.getAttribute('data-sp-product-name') || handle));
      button.setAttribute('title', saved ? 'Saved' : 'Save for later');
      button.classList.toggle('is-saved', saved);
    });
  }

  function toggleSaved(handle) {
    if (!validHandle(handle)) return;
    var handles = readList(SAVED_KEY);
    var index = handles.indexOf(handle);
    if (index === -1) handles.push(handle);
    else handles.splice(index, 1);
    if (writeList(SAVED_KEY, handles)) {
      refreshSaveButtons();
      if (document.querySelector('[data-sp-history-grid]')) renderSaved();
      window.dispatchEvent(new Event('sabpuja:saved-updated'));
    }
  }

  function makeSaveButton(handle, productName, pdp) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'sp-save-button' + (pdp ? ' sp-save-button--pdp' : '');
    button.setAttribute('data-sp-save-handle', handle);
    button.setAttribute('data-sp-product-name', productName || handle);
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span class="sp-save-button__label">' + (pdp ? 'Save for later' : 'Save') + '</span>';
    button.addEventListener('click', function () { toggleSaved(handle); });
    return button;
  }

  function initSaveButtons() {
    document.querySelectorAll('.sp-product-card[data-product-handle]').forEach(function (card) {
      var handle = card.getAttribute('data-product-handle');
      if (!validHandle(handle) || card.querySelector('[data-sp-save-handle]')) return;
      var title = card.querySelector('.sp-product-card__title');
      card.appendChild(makeSaveButton(handle, title ? title.textContent.trim() : handle, false));
    });

    var productHandle = document.body.getAttribute('data-sp-product-handle');
    if (validHandle(productHandle)) {
      var recent = readList(RECENT_KEY).filter(function (handle) { return handle !== productHandle; });
      recent.push(productHandle);
      writeList(RECENT_KEY, recent);
      var productForm = document.querySelector('.sp-pdp__form');
      if (productForm && !productForm.querySelector('[data-sp-save-handle]')) {
        var name = document.querySelector('h1');
        productForm.appendChild(makeSaveButton(productHandle, name ? name.textContent.trim() : productHandle, true));
      }
    }
    refreshSaveButtons();
  }

  function el(tag, className, label) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (label !== undefined) node.textContent = label;
    return node;
  }

  function moneyInMinorUnits(price) {
    if (typeof price !== 'number' || !Number.isFinite(price)) return '';
    try { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price / 100); }
    catch (error) { return ''; }
  }

  function productImage(product) {
    var value = product.featured_image || (product.images && product.images[0]) || '';
    if (typeof value === 'object') value = value.src || value.url || '';
    return typeof value === 'string' && value.indexOf('//') === 0 ? 'https:' + value : value;
  }

  function productCard(product) {
    var card = el('article', 'sp-history-product');
    var link = el('a', 'sp-history-product__link');
    link.href = '/products/' + encodeURIComponent(product.handle);
    var imageUrl = productImage(product);
    if (imageUrl) {
      var image = el('img', 'sp-history-product__image');
      image.src = imageUrl;
      image.alt = product.title || 'Sabpuja product';
      image.loading = 'lazy';
      image.width = 480;
      image.height = 480;
      link.appendChild(image);
    }
    var title = el('h3', 'sp-history-product__title', product.title || 'View product');
    link.appendChild(title);
    card.appendChild(link);
    var price = moneyInMinorUnits(product.price);
    if (price) card.appendChild(el('p', 'sp-history-product__price', price));
    if (product.available === false) {
      card.appendChild(el('p', 'sp-history-product__availability', 'Currently unavailable — saved for later'));
    }
    var actions = el('div', 'sp-history-product__actions');
    actions.appendChild(makeSaveButton(product.handle, product.title, true));
    var view = el('a', 'sp-history-product__view', 'View product →');
    view.href = '/products/' + encodeURIComponent(product.handle);
    actions.appendChild(view);
    card.appendChild(actions);
    return card;
  }

  function loadProduct(handle) {
    return fetch('/products/' + encodeURIComponent(handle) + '.js', { credentials: 'same-origin' })
      .then(function (response) { if (!response.ok) throw new Error('Unavailable product'); return response.json(); })
      .then(function (product) {
        return product && validHandle(product.handle) ? product : null;
      })
      .catch(function () { return null; });
  }

  function showList(type, handles) {
    var grid = document.querySelector('[data-sp-history-grid="' + type + '"]');
    var empty = document.querySelector('[data-sp-history-empty="' + type + '"]');
    if (!grid || !empty) return;
    grid.replaceChildren();
    if (!handles.length) {
      empty.hidden = false;
      grid.hidden = true;
      return;
    }
    empty.hidden = true;
    grid.hidden = false;
    grid.appendChild(el('p', 'sp-history-loading', 'Loading products…'));
    Promise.all(handles.slice(-12).reverse().map(loadProduct)).then(function (products) {
      grid.replaceChildren();
      products.filter(Boolean).forEach(function (product) { grid.appendChild(productCard(product)); });
      if (!grid.childElementCount) {
        empty.hidden = false;
        grid.hidden = true;
      }
      refreshSaveButtons();
    });
  }

  function renderSaved() {
    showList('saved', readList(SAVED_KEY));
  }

  function initHistoryPage() {
    if (!document.querySelector('[data-sp-history-grid]')) return;
    renderSaved();
    showList('recent', readList(RECENT_KEY));
  }

  function init() {
    initSaveButtons();
    initHistoryPage();
    window.addEventListener('storage', function (event) {
      if (event.key === SAVED_KEY || event.key === RECENT_KEY) {
        refreshSaveButtons();
        if (event.key === SAVED_KEY) renderSaved();
        else if (document.querySelector('[data-sp-history-grid]')) showList('recent', readList(RECENT_KEY));
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
}());
