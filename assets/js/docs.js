/**
 * CMC Design System - Documentation JavaScript
 * Handles search, code copying, navigation, and interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initCopyButtons();
  initSidebarNavigation();
  initMobileSidebar();
  initCodeToggle();
  initHexCodeCopy();
});

/* ===========================
   SEARCH FUNCTIONALITY
   =========================== */
function initSearch() {
  const searchInput = document.getElementById('docs-search');
  const searchResults = document.getElementById('search-results');
  if (!searchInput || !searchResults) return;

  const searchableItems = [];
  document.querySelectorAll('[data-search-title]').forEach(el => {
    searchableItems.push({
      title: el.getAttribute('data-search-title'),
      category: el.getAttribute('data-search-category') || 'General',
      id: el.id,
      element: el,
    });
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    const matches = searchableItems.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item text-gray-500 text-sm">No results found</div>';
    } else {
      searchResults.innerHTML = matches.map(item => `
        <a href="#${item.id}" class="search-result-item block" onclick="closeSearch()">
          <div class="text-white text-sm font-medium">${item.title}</div>
          <div class="text-gray-500 text-xs mt-0.5">${item.category}</div>
        </a>
      `).join('');
    }
    searchResults.classList.add('active');
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => searchResults.classList.remove('active'), 200);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchResults.classList.remove('active');
      searchInput.blur();
    }
  });

  // Keyboard shortcut: Cmd/Ctrl + K to focus search
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

function closeSearch() {
  const searchResults = document.getElementById('search-results');
  if (searchResults) searchResults.classList.remove('active');
}

/* ===========================
   COPY CODE BUTTONS
   =========================== */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('code').textContent;

      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = '#22d3ee';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
        }, 2000);
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
}

/* ===========================
   SIDEBAR NAVIGATION
   =========================== */
function initSidebarNavigation() {
  const links = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll spy
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ===========================
   MOBILE SIDEBAR
   =========================== */
function initMobileSidebar() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.docs-sidebar');
  const closeBtn = document.getElementById('sidebar-close');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  }
}

/* ===========================
   CODE TOGGLE (Show/Hide)
   =========================== */
function initCodeToggle() {
  document.querySelectorAll('.toggle-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.component-example').querySelector('.code-block');
      if (codeBlock) {
        const isHidden = codeBlock.style.display === 'none';
        codeBlock.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? 'Hide Code' : 'Show Code';
      }
    });
  });
}

/* ===========================
   HEX CODE COPY
   =========================== */
function initHexCodeCopy() {
  // Find all text nodes containing hex codes
  const hexPattern = /#[0-9A-Fa-f]{6}\b/g;

  const walkTextNodes = (node) => {
    if (node.nodeType === 3) { // Text node
      const text = node.textContent;
      const matches = text.match(hexPattern);
      if (matches) {
        const span = document.createElement('span');
        let lastIndex = 0;
        let html = '';

        text.replace(hexPattern, (match, offset) => {
          html += text.substring(lastIndex, offset);
          html += `<button class="hex-code-btn" data-hex="${match}" title="Click to copy ${match}">${match}</button>`;
          lastIndex = offset + match.length;
        });
        html += text.substring(lastIndex);

        span.innerHTML = html;
        node.parentNode.replaceChild(span, node);
      }
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
      Array.from(node.childNodes).forEach(walkTextNodes);
    }
  };

  walkTextNodes(document.body);

  // Add click handlers to hex code buttons
  document.querySelectorAll('.hex-code-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const hex = btn.getAttribute('data-hex');

      navigator.clipboard.writeText(hex).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#22d3ee';
        btn.style.color = '#000';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 1500);
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = hex;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = hex; }, 1500);
      });
    });
  });
}
