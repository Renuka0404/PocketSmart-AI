
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    const categories = [
      { name: 'Housing', budget: 1450, icon: 'home', color: 'forest' },
      { name: 'Groceries', budget: 500, icon: 'basket', color: 'gold' },
      { name: 'Dining out', budget: 300, icon: 'utensils', color: 'coral' },
      { name: 'Transport', budget: 250, icon: 'car', color: 'blue' },
      { name: 'Shopping', budget: 350, icon: 'bag', color: 'forest' },
      { name: 'Utilities', budget: 200, icon: 'bolt', color: 'gold' },
      { name: 'Health', budget: 150, icon: 'heart', color: 'coral' },
      { name: 'Other', budget: 1000, icon: 'dots', color: 'blue' }
    ];
    const iconPaths = {
      home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/>',
      basket: '<path d="m4 10 2 10h12l2-10H4ZM8 10l4-7 4 7M9 14v3m6-3v3"/>',
      utensils: '<path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3m-3 7v11m9-18v18m0-18a4 4 0 0 1 4 4v4h-4"/>',
      car: '<path d="m5 11 1.5-5h11l1.5 5m-15 0h16v7H4v-7Zm3 7v2m10-2v2M7 14h.01M17 14h.01"/>',
      bag: '<path d="M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2"/>',
      bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/>',
      heart: '<path d="M20.8 8.7c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/>',
      dots: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'
    };
    const defaultTransactions = [
      { merchant: 'Whole Foods Market', category: 'Groceries', amount: 86.42, date: '2026-09-14', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Blue Bottle Coffee', category: 'Dining out', amount: 12.50, date: '2026-09-14', account: 'Credit card', status: 'Completed' },
      { merchant: 'City of Portland', category: 'Utilities', amount: 94.18, date: '2026-09-13', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Trader Joe’s', category: 'Groceries', amount: 63.27, date: '2026-09-12', account: 'Credit card', status: 'Completed' },
      { merchant: 'Monthly rent', category: 'Housing', amount: 1450, date: '2026-09-01', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Lyft', category: 'Transport', amount: 22.64, date: '2026-09-11', account: 'Credit card', status: 'Completed' },
      { merchant: 'Spotify Premium', category: 'Other', amount: 11.99, date: '2026-09-10', account: 'Credit card', status: 'Completed' },
      { merchant: 'Neighborhood Market', category: 'Groceries', amount: 41.82, date: '2026-09-09', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Cedar & Salt', category: 'Dining out', amount: 48.50, date: '2026-09-08', account: 'Credit card', status: 'Completed' },
      { merchant: 'Transit pass', category: 'Transport', amount: 70, date: '2026-09-06', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Home internet', category: 'Utilities', amount: 65, date: '2026-09-04', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Bookshop', category: 'Shopping', amount: 28.75, date: '2026-09-03', account: 'Credit card', status: 'Completed' },
      { merchant: 'Pharmacy', category: 'Health', amount: 34.20, date: '2026-09-02', account: 'Credit card', status: 'Completed' },
      { merchant: 'Fresh Flowers', category: 'Other', amount: 16.50, date: '2026-09-02', account: 'Credit card', status: 'Completed' },
      { merchant: 'Hardware store', category: 'Shopping', amount: 39.30, date: '2026-09-05', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Weekend brunch', category: 'Dining out', amount: 36.25, date: '2026-09-07', account: 'Credit card', status: 'Completed' },
      { merchant: 'Gas station', category: 'Transport', amount: 38.50, date: '2026-09-05', account: 'Credit card', status: 'Completed' },
      { merchant: 'Corner market', category: 'Groceries', amount: 25.33, date: '2026-09-08', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Streaming service', category: 'Other', amount: 14.99, date: '2026-09-11', account: 'Credit card', status: 'Completed' },
      { merchant: 'Online store', category: 'Shopping', amount: 44.90, date: '2026-09-12', account: 'Credit card', status: 'Completed' },
      { merchant: 'Lunch spot', category: 'Dining out', amount: 27.80, date: '2026-09-10', account: 'Credit card', status: 'Completed' },
      { merchant: 'Market produce', category: 'Groceries', amount: 39.20, date: '2026-09-06', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Water & power', category: 'Utilities', amount: 51.40, date: '2026-09-12', account: 'Everyday checking', status: 'Completed' },
      { merchant: 'Rideshare', category: 'Transport', amount: 18.47, date: '2026-09-13', account: 'Credit card', status: 'Completed' },
      { merchant: 'Cafe Morrow', category: 'Dining out', amount: 31.80, date: '2026-09-04', account: 'Credit card', status: 'Completed' },
      { merchant: 'Farmers market', category: 'Groceries', amount: 50.16, date: '2026-09-03', account: 'Cash', status: 'Completed' }
    ];
    const defaultGoals = [
      { name: 'Japan trip', emoji: '✈', saved: 1850, target: 3000, date: 'Target: June 2027' },
      { name: 'Emergency fund', emoji: '◉', saved: 4200, target: 6000, date: 'Target: December 2026' },
      { name: 'New laptop', emoji: '▣', saved: 640, target: 1500, date: 'Target: February 2027' }
    ];
    let transactions = loadData('pocketsmart-transactions', defaultTransactions);
    let goals = loadData('pocketsmart-goals', defaultGoals);
    let activeMonth = '2026-09';
    const income = 4200;
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
    function loadData(key, fallback) {
      try { const stored = localStorage.getItem(key); return stored ? JSON.parse(stored) : structuredClone(fallback); }
      catch { return structuredClone(fallback); }
    }
    function saveData() {
      try {
        localStorage.setItem('pocketsmart-transactions', JSON.stringify(transactions));
        localStorage.setItem('pocketsmart-goals', JSON.stringify(goals));
      } catch { showToast('Could not save to this browser.'); }
    }
    function icon(name) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.dots}</svg>`; }
    function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])); }
    function formatDate(date) { return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(`${date}T12:00:00`)); }
    function getMonthTransactions() {
      return transactions.filter(item => item.date.startsWith(`${activeMonth}-`));
    }
    function getTotals() {
      const monthTransactions = getMonthTransactions();
      const spent = monthTransactions.reduce((sum, item) => sum + Number(item.amount), 0);
      const byCategory = Object.fromEntries(categories.map(item => [item.name, 0]));
      monthTransactions.forEach(item => { byCategory[item.category] = (byCategory[item.category] || 0) + Number(item.amount); });
      return { spent, byCategory, left: income - spent };
    }
    function renderStats() {
      const { spent, left } = getTotals();
      const percent = Math.min(spent / income * 100, 100);
      $('#incomeStat').textContent = currency.format(income);
      $('#spentStat').textContent = currency.format(spent);
      $('#leftStat').textContent = currency.format(left);
      $('#savingsStat').textContent = `${Math.max(0, left / income * 100).toFixed(1)}%`;
      $('#budgetSpent').textContent = currency.format(spent);
      $('#budgetRemaining').textContent = currency.format(left);
      $('#budgetTotal').textContent = currency.format(income);
      $('#budgetPercent').textContent = `${Math.round(percent)}%`;
      $('#budgetDonut').style.background = `conic-gradient(var(--forest) 0 ${percent}%, #e7eee8 ${percent}% 100%)`;
      $('.budget-insight').innerHTML = left >= 0 ? `<strong>${percent < 75 ? 'Looking good.' : 'Nearly there.'}</strong> You have ${currency.format(left)} left in this month’s budget.` : `<strong>Budget exceeded.</strong> You’re ${currency.format(Math.abs(left))} over your monthly income.`;
      $('#potentialSavings').textContent = currency.format(Math.max(0, Math.round((getTotals().byCategory['Dining out'] || 0) * .25) + 98));
      $('#scoreNumber').textContent = String(Math.max(35, Math.min(99, Math.round(92 - percent * .15))));
    }
    function renderCategories() {
      const totals = getTotals().byCategory;
      $('#categoryList').innerHTML = categories.slice(0, 6).map(category => {
        const amount = totals[category.name] || 0;
        const percent = Math.min(amount / category.budget * 100, 100);
        const color = percent > 90 ? 'warn' : category.color === 'gold' ? 'gold' : '';
        return `<div><div class="category-head"><div class="category-name"><span class="category-icon">${icon(category.icon)}</span><strong>${escapeHTML(category.name)}</strong></div><span class="category-amount">${currency.format(amount)} <span style="color:#a2aba7">/ ${currency.format(category.budget)}</span></span></div><div class="progress-track"><div class="progress-fill ${color}" style="width:${percent}%"></div></div></div>`;
      }).join('');
    }
    function transactionRow(item) {
      const category = categories.find(entry => entry.name === item.category);
      return `<tr><td><div class="merchant"><span class="merchant-icon">${icon(category?.icon || 'dots')}</span>${escapeHTML(item.merchant)}</div></td><td>${escapeHTML(item.category)}</td><td>${formatDate(item.date)}</td><td>${escapeHTML(item.account)}</td><td><span class="status-pill">${escapeHTML(item.status || 'Completed')}</span></td><td class="amount">−${currency.format(item.amount)}</td></tr>`;
    }
    function renderTransactions() {
      const sorted = [...getMonthTransactions()].sort((a, b) => b.date.localeCompare(a.date));
      $('#recentRows').innerHTML = sorted.slice(0, 5).map(transactionRow).join('');
      const term = $('#transactionSearch').value.trim().toLowerCase();
      const filter = $('#categoryFilter').value;
      const filtered = sorted.filter(item => `${item.merchant} ${item.category} ${item.account}`.toLowerCase().includes(term) && (filter === 'all' || item.category === filter));
      $('#allRows').innerHTML = filtered.length ? filtered.map(transactionRow).join('') : '<tr><td colspan="6"><div class="empty-state">No transactions match those filters.</div></td></tr>';
    }
    function renderRecommendations() {
      const dining = getTotals().byCategory['Dining out'] || 0;
      const diningPercent = Math.round(dining / 300 * 100);
      const rows = [
        { icon: 'basket', color: '', title: 'Keep your grocery rhythm', text: `You’ve used ${Math.round((getTotals().byCategory.Groceries || 0) / 500 * 100)}% of your grocery budget. A quick list before shopping can keep the week on track.` },
        { icon: 'utensils', color: 'coral', title: 'Give dining out a gentle nudge', text: `You’re ${diningPercent}% through this category. One meal at home this week could free up about <span>$24</span>.` },
        { icon: 'bolt', color: 'gold', title: 'Put idle dollars to work', text: 'Move a portion of your unspent budget into your emergency fund before month-end.' }
      ];
      $('#recommendationList').innerHTML = rows.slice(0, 2).map(row => `<div class="recommendation"><span class="recommendation-mark ${row.color}">${icon(row.icon)}</span><p><strong>${row.title}</strong><br>${row.text}</p></div>`).join('');
      $('#advisorActions').innerHTML = rows.map((row, index) => `<article class="advisor-action"><span class="recommendation-mark ${row.color}">${icon(row.icon)}</span><p><strong>${['Keep your grocery rhythm', 'A lighter dining week', 'Give your savings a head start'][index]}</strong>${row.text.replace(/<[^>]*>/g, '')}</p></article>`).join('');
    }
    function renderChart() {
      const values = [{ month: 'Apr', spent: 2920, income: 3900 }, { month: 'May', spent: 3180, income: 4200 }, { month: 'Jun', spent: 2750, income: 4050 }, { month: 'Jul', spent: 3310, income: 4200 }, { month: 'Aug', spent: 3060, income: 4200 }, { month: 'Sep', spent: getTotals().spent, income }];
      $('.bars', $('#cashflowChart')).innerHTML = values.map(item => `<div class="bar-group"><div class="bar" style="height:${Math.max(3, item.income / 5000 * 100)}%" title="Income ${currency.format(item.income)}"></div><div class="bar spent" style="height:${Math.max(3, item.spent / 5000 * 100)}%" title="Spending ${currency.format(item.spent)}"></div><label>${item.month}</label></div>`).join('');
    }
    function renderGoals() {
      $('#goalGrid').innerHTML = goals.map((goal, index) => {
        const percent = Math.min(goal.saved / goal.target * 100, 100);
        return `<article class="goal-card"><div class="goal-top"><span class="goal-emoji" aria-hidden="true">${escapeHTML(goal.emoji)}</span><button class="goal-menu" data-goal-add="${index}" aria-label="Add money to ${escapeHTML(goal.name)}" title="Add $50 to this goal">${icon('dots')}</button></div><h3>${escapeHTML(goal.name)}</h3><div class="goal-date">${escapeHTML(goal.date)}</div><div class="goal-values"><strong>${currency.format(goal.saved)}</strong><span>of ${currency.format(goal.target)}</span></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div><div class="goal-foot"><span>${Math.round(percent)}% saved</span><span>${currency.format(Math.max(0, goal.target - goal.saved))} to go</span></div></article>`;
      }).join('');
    }
    function render() { renderStats(); renderCategories(); renderTransactions(); renderRecommendations(); renderChart(); renderGoals(); }
    const viewNames = { overview: 'Overview', transactions: 'Transactions', goals: 'Savings goals', advisor: 'AI advisor' };
    function showView(name) {
      if (!viewNames[name]) return;
      $$('.view').forEach(view => view.classList.toggle('active', view.id === `view-${name}`));
      $$('.nav-link[data-view]').forEach(link => link.classList.toggle('active', link.dataset.view === name));
      $('#breadcrumbTitle').textContent = viewNames[name];
      const heading = { overview: ['Good morning, Jamie', 'Here’s your money story this month.'], transactions: ['Every transaction, in one place', 'A clear view of where your money goes.'], goals: ['Save for what matters', 'Small, steady steps bring the big plans closer.'], advisor: ['A smarter way to move forward', 'Personalized ideas, grounded in your spending.'] }[name];
      $('#headingTitle').textContent = heading[0];
      $('#headingSubtitle').textContent = heading[1];
      $('#sidebar').classList.remove('open');
      window.location.hash = name;
    }
    let toastTimer;
    function showToast(message) {
      const toast = $('#toast'); toast.textContent = message; toast.classList.add('visible');
      clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
    }
    function openModal() {
      $('#transactionModal').classList.add('open');
      const today = new Date();
      const todayMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
      $('#dateInput').value = todayMonth === activeMonth ? new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10) : `${activeMonth}-15`;
      setTimeout(() => $('#merchantInput').focus(), 0);
    }
    function closeModal() { $('#transactionModal').classList.remove('open'); }
    function exportCSV() {
      const rows = [['Merchant', 'Category', 'Date', 'Account', 'Amount'], ...transactions.map(item => [item.merchant, item.category, item.date, item.account, item.amount])];
      const csv = rows.map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
      const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
      const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'pocketsmart-transactions.csv'; anchor.click(); URL.revokeObjectURL(url);
      showToast('Your transactions were exported.');
    }
    categories.forEach(category => {
      $('#categoryInput').insertAdjacentHTML('beforeend', `<option>${escapeHTML(category.name)}</option>`);
      $('#categoryFilter').insertAdjacentHTML('beforeend', `<option value="${escapeHTML(category.name)}">${escapeHTML(category.name)}</option>`);
    });
    render();
    $$('.nav-link[data-view]').forEach(link => link.addEventListener('click', () => showView(link.dataset.view)));
    $$('[data-view-link]').forEach(link => link.addEventListener('click', () => showView(link.dataset.viewLink)));
    $$('[data-action="toast"]').forEach(button => button.addEventListener('click', () => showToast(button.dataset.message)));
    $('#addExpenseTop').addEventListener('click', openModal);
    $('#addExpenseTransactions').addEventListener('click', openModal);
    $('#exportButton').addEventListener('click', exportCSV);
    $('#transactionSearch').addEventListener('input', renderTransactions);
    $('#categoryFilter').addEventListener('change', renderTransactions);
    $('#menuButton').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
    $$('[data-close-modal]').forEach(button => button.addEventListener('click', closeModal));
    $('#transactionModal').addEventListener('click', event => { if (event.target === $('#transactionModal')) closeModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); $('#sidebar').classList.remove('open'); } });
    $('#transactionForm').addEventListener('submit', event => {
      event.preventDefault();
      const values = new FormData(event.currentTarget);
      transactions.unshift({ merchant: values.get('merchant').trim(), amount: Number(values.get('amount')), category: values.get('category'), date: values.get('date'), account: values.get('account'), status: 'Completed' });
      saveData(); render(); closeModal(); event.currentTarget.reset(); showToast('Transaction added to your budget.');
    });
    $('#goalGrid').addEventListener('click', event => {
      const button = event.target.closest('[data-goal-add]');
      if (!button) return;
      const goal = goals[Number(button.dataset.goalAdd)]; goal.saved = Math.min(goal.target, goal.saved + 50);
      saveData(); renderGoals(); showToast(`$50 added to ${goal.name}.`);
    });
    $('#monthSelect').value = activeMonth;
    $('#monthSelect').addEventListener('change', event => {
      activeMonth = event.target.value;
      render();
      showToast(`Showing your ${event.target.selectedOptions[0].text} overview.`);
    });
    $('#headingEyebrow').textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date());
    $('#exportButton').addEventListener('keydown', event => { if (event.key === 'Enter') exportCSV(); });
    const initialView = window.location.hash.slice(1);
    if (viewNames[initialView]) showView(initialView);
  