# PocketSmart AI

A responsive personal budget dashboard for tracking spending, reviewing category budgets, and making progress toward savings goals.

## Run locally

The app is a static website and needs no install or build step. Open `index.html` in a browser, or start a local server from this directory:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## What it includes

- Monthly spending overview, category budgets, and a six-month cash-flow chart
- Searchable and filterable transactions, with CSV export
- Add transactions and savings goals that persist in browser local storage
- Responsive dashboard views for overview, transactions, savings goals, and the spending advisor

## Project structure

```text
PocketSmart-AI/
├── README.md
├── LICENSE
├── .gitignore
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── data/
│   └── sample-transactions.json
└── .vscode/            # optional local editor files
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/PocketSmart-AI.git
git push -u origin main
```

The dashboard uses sample data. Advisor suggestions are local, rule-based demo insights; there is no hosted AI model or bank connection, and the app does not provide financial advice. Your changes stay in the current browser; clearing its site data removes them. The optional Google Fonts stylesheet needs an internet connection; the app itself works without it.