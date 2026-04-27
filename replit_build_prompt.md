# KPI Dashboard — Replit Build Prompt
## BAIS 3300 · Final Sprint · Copy this entire prompt and paste it into Replit Agent

---

Please read all of the context below carefully before writing a single line of code. When you are done reading, summarize the product, the screens, and your build plan before you begin. Ask me if a database is required before you start coding.

---

## 1. What We Are Building

**Product name:** KPI Dashboard

**One-sentence description:** A web application that helps IT managers understand how their development teams are spending their work hours, so they can identify productivity bottlenecks and answer leadership's questions with data.

**Primary user:** An IT manager who needs to optimize team productivity and justify IT spending to corporate leadership.

**This is a functional prototype** — it uses realistic hardcoded/mock data throughout. No real integrations with Jira, Power BI, or Azure DevOps are required. All data is simulated.

---

## 2. Application Architecture

- **Type:** Multi-page web application with client-side routing (or a Python/Flask app with server-rendered HTML pages — your recommendation based on complexity)
- **Auth model:** Simulated login only. No real authentication. A login form accepts any email + password and redirects to the dashboard. There is also a "Sign in with Microsoft SSO" button that simulates SSO and goes directly to the dashboard.
- **Data:** All hardcoded mock data. No database required unless you determine one is needed for the export/schedule feature.
- **Deployment target:** This will eventually run on **Azure** (either Azure Static Web App or Azure App Service — advise me which is better for this app after planning).

---

## 3. Screens & Functionality

Build all six screens below. Navigation between them must work correctly.

### Screen 1 — Login (`/login`)
- Email field, password field
- "Remember me" checkbox
- Login button (any credentials accepted → redirect to `/dashboard`)
- "Sign in with Microsoft SSO" link (→ redirect to `/dashboard`)
- "Forgot password?" link (shows a simple inline message: "A reset link has been sent.")
- App logo/name in header: **KPI Dashboard**
- Footer: "KPI Dashboard | Privacy Policy | Contact"
- After login, user stays logged in (session) until they click Logout

### Screen 2 — Dashboard (`/dashboard`) — PRIMARY SCREEN
This is the most important screen. Build it with full detail.

**Header:** App name left, "Logout" link right. Nav bar below: Dashboard (active), Team Reports, Analytics, Settings.

**Page title area:** "Team Productivity Dashboard" | Q1 2025 | All Teams | **"Export & Share Report" primary button** (blue, filled, top-right of title area — this is a primary action, not a text link)

**Four KPI Cards** in a row:
| Card | Value | Sub-label |
|------|-------|-----------|
| Dev Time | 64% | ↑ 4% vs last qtr |
| Engaged | 81% | ↑ 6% vs last qtr |
| Actions | 1.8/qtr | Target: 1.5 |
| Confidence | 77% | Target: 80% |

**OKR Summary Widget** (compact, below KPI cards — added based on usability testing):
Show all 4 KRs with traffic-light color coding (green = on track, red = at risk):
- KR1: Meeting prep −60% → **72% → ON TRACK** (green)
- KR2: Mgrs back requests → **85% → ON TRACK** (green)
- KR3: 1 change/mgr/qtr → **60% → AT RISK** (red)
- KR4: 80% confidence → **77% → AT RISK** (red)

**Time Allocation bar chart** (left panel):
Categories: Coding 42%, Meetings 28%, Code Rev 16%, Admin 8%, Other 6%
Use Chart.js or a similar charting library.

**Team Efficiency Rankings** (right panel, leaderboard):
| Team | Score |
|------|-------|
| Platform Team | 74 |
| DevOps | 68 |
| Data Engineering | 61 |
| QA / Testing | 52 |
| Legacy Systems | 38 |
Show as horizontal bars. Top team (Platform Team) highlighted in accent color.

**High-Value Dev % — 6-Month Trend** (full-width line chart below):
X-axis: Aug, Sep, Oct, Nov, Dec, Jan, Feb, Mar
Data: upward trend line starting ~42% and ending ~64%
Use Chart.js.

### Screen 3 — Team Reports (`/teams`)

**Layout:** Left sidebar listing teams. Clicking a team loads that team's data on the right.

**Default selected team: Platform Team**

Sidebar teams: Platform Team, DevOps, Data Engineering, QA / Testing, Legacy Systems

**Right panel shows:**
- Team name heading: "Platform Team" | 8 developers | Q1 2025 | Score: 74%
- 4 developer KPI cards in a row:
  - Alex Chen — 78% high-value time
  - Sarah Kim — 72% high-value time
  - Marcus Lee — 65% high-value time
  - Priya Patel — 61% high-value time
- Breakdown table (Developer × Category):

| Developer | Coding | Meetings | Code Rev | Admin | Other |
|-----------|--------|----------|----------|-------|-------|
| Alex Chen | 52% | 22% | 14% | 8% | 4% |
| Sarah Kim | 48% | 24% | 18% | 6% | 4% |
| Marcus Lee | 43% | 28% | 16% | 9% | 4% |
| Priya Patel | 38% | 32% | 14% | 12% | 4% |

- **Recommended Actions** section:
  - Reduce meeting load for Alex Chen (22%, target is 14%)
  - Add daily focus blocks 10am–12pm for all devs
  - Review code review assignments for Marcus Lee

Provide mock data for the other 4 teams as well (can be simplified).

### Screen 4 — Analytics (`/analytics`)

**Filters bar:** Date Range dropdown (This Quarter / Last Quarter / Last 6 Months), Team dropdown (All Teams + individual team names)

**Two-column layout:**

Left: **High-Value Dev % Trend (6 months)** — line chart, two lines: Platform Team and DevOps. Chart.js.

Right: **OKR Progress** — 4 progress bars with expanded detail (from usability test improvement):
Each KR shows:
- Full label text
- Progress bar with current % labeled on the bar
- Dashed vertical line at target
- Status pill: ON TRACK (green outline) or AT RISK (red outline)

KR1: Reduce meeting prep time −60% | 72% | Target: 100% | ON TRACK
KR2: 70% mgrs back resource requests | 85% | Target: 70% | ON TRACK
KR3: 1 process change/mgr/qtr | 60% | Target: 100% | AT RISK
KR4: 80% mgr confidence score | 77% | Target: 80% | AT RISK

**Second row:**

Left: **Bottleneck Comparison — This Qtr vs Last Qtr**
| Category | This Qtr | Last Qtr |
|----------|----------|----------|
| Meetings | 28% | 22% |
| Admin | 9% | 7% |
| Context Switch | 16% | 12% |
| Code Review | 10% | 8% |
Grouped bar chart. Chart.js.

Right: **Meeting Hours by Role**
- Sr. Developer: 12 hrs/wk (target: < 8)
- Developer: 8 hrs/wk (target: < 6)
- Jr. Developer: 5 hrs/wk (target: < 4)
Simple display with target labels.

### Screen 5 — Settings (`/settings`)

**Tab navigation:** Integrations | Notifications | User Management | Profile

**Default tab: Integrations**

Show "Connected Integrations" list:
| Service | Status | Last Sync | Toggle | Action |
|---------|--------|-----------|--------|--------|
| Power BI | Connected | 2 min ago | ON | Configure |
| Power Automate | Connected | 15 min ago | ON | Configure |
| Jira | Connected | Project: KPI-Dev | ON | Configure |
| Azure DevOps | Disconnected | — | OFF | Configure |
| Slack | Disconnected | — | OFF | Configure |

Toggles should be clickable and toggle the ON/OFF state visually. "Configure" buttons show a simple modal/alert: "Configuration panel coming soon."

Other tabs (Notifications, User Management, Profile) can show a "Coming soon" placeholder.

**Save Settings** button at bottom right.

### Screen 6 — Export & Share Report (`/export`)

Accessed from the "Export & Share Report" button on the Dashboard.

**Format selector:** PDF | PowerPoint | CSV (toggle buttons, PDF selected by default)

**Left panel:** Report preview — shows a simplified summary:
- Title: "TEAM PRODUCTIVITY REPORT"
- Key stats: QoQ +6%, Actions: 7
- Mini bar chart (same time allocation data)
- Key Findings:
  - Platform team leads at 74% dev efficiency
  - Meeting overhead highest in Data Eng (28%)
  - QA bottlenecked on code review process

**Right panel: Share Report**
- "To:" email input field
- "Message:" textarea (pre-filled with: "Please find attached the Q1 2025 IT Team Productivity Report.")
- **"Send to Leadership" primary button** — on click: disable button, show a green confirmation banner at top: "✓ Report sent successfully to [email]." Re-enable after 3 seconds.
- **Schedule recurring report:** Monthly dropdown | Day 1 dropdown | "Set Auto-Send" button

**"Back to Dashboard" link** at bottom.

---

## 4. Visual Design

Use the **dark-mode command center** aesthetic from the prototype. This is the approved visual direction.

**Color palette:**
- Background: `#0A0C12`
- Card/panel surface: `#0F1219`
- Borders/dividers: `#1E2230`
- Primary accent (neon green): `#00FF88`
- Blue accent: `#3B82F6`
- Purple accent: `#A78BFA`
- Amber accent: `#F59E0B`
- Red/at-risk: `#FF3B6B`
- Body text: `#E8EDF5`
- Secondary/muted labels: `#4A5568`

**Typography:**
- Font: Space Mono (Google Fonts) or monospace fallback
- Nav labels, category headers, section titles: UPPERCASE, letter-spacing 0.12em
- Primary metric values: 28–32px, bold, pure white
- Supporting labels: 10–11px, muted slate

**Layout:**
- High information density
- Cards have a 2px colored top border (use accent colors as unique identifiers per card)
- No drop shadows — depth via background color layering
- Minimal or no border-radius (2px max on cards)
- Buttons: transparent with 1px accent-colored border, uppercase, wide letter-spacing — EXCEPT primary action buttons (Export & Share, Send to Leadership) which are filled blue `#3B82F6`
- Progress bars: flat, no radius, accent green for on-track, `#FF3B6B` for at-risk
- Nav active state: left border in accent color + subtle `#1E2230` background fill
- Status pills (ON TRACK / AT RISK): outline only, colored border + text, transparent fill

---

## 5. Accessibility Requirements

The app must pass **WCAG 2.1 Level AA**. Key requirements:
- All text must meet 4.5:1 contrast ratio against its background
- All interactive elements keyboard navigable
- All images/icons have `alt` attributes or `aria-label`
- Logical heading hierarchy (h1 → h2 → h3, no skips)
- Descriptive link text — no "click here"
- Focus indicators visible on all interactive elements

**Note:** Secondary labels in `#4A5568` on `#0A0C12` may fail contrast — use `#6B7280` or lighter if needed to pass AA. Check all text/background combinations before finalizing.

---

## 6. Technical Requirements

- **HTML5** semantic elements throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **CSS3** — all styles in a single external stylesheet (`css/stylesheet.css`), no inline styles
- **Charts:** Use Chart.js (CDN) for all data visualizations
- **No frameworks required** — vanilla HTML/CSS/JS is fine, but Bootstrap or Tailwind is acceptable if it helps
- Fully responsive down to 375px width
- No horizontal scrolling on any viewport
- External links open in new tab with `rel="noopener noreferrer"`
- HTML5 and CSS3 must pass W3C validation
- Page `<title>` elements must be descriptive on every page

---

## 7. File Structure

```
/kpi-dashboard
├── index.html              ← Landing page (see Section 8)
├── login.html
├── dashboard.html
├── teams.html
├── analytics.html
├── settings.html
├── export.html
├── /css
│    └── stylesheet.css
├── /js
│    └── app.js             ← Navigation, chart initialization, mock data, interactivity
└── /images
     └── logo.svg (or logo.png)
```

---

## 8. Landing Page (`index.html`)

This is a **public marketing page** — not the app itself. It explains what KPI Dashboard does and has a button to launch the app (linking to `login.html`).

**Sections to include:**
1. **Hero** — Headline: "Give Your IT Team the Data to Prove Its Value." Subheading: "KPI Dashboard shows IT managers exactly how development time is being spent — and gives them the evidence to optimize it." CTA button: "Try the Dashboard →" (links to `login.html`)
2. **Problem** — Short copy about the problem: leadership questions IT productivity, managers can't answer with data, headcount requests get denied.
3. **Features** — 3 feature callouts:
   - Team Time Allocation — See exactly where dev hours go: coding, meetings, admin, context switching
   - OKR Progress Tracking — Track all four key results with traffic-light status at a glance
   - Leadership-Ready Reports — Export and send formatted reports to leadership in one click
4. **How It Works** — 3 steps: Connect your tools → View your dashboard → Share with leadership
5. **Footer** — "KPI Dashboard | A BAIS 3300 project | © 2025"

The landing page should use the **same dark color palette** as the app for a consistent look and feel.

---

## 9. Before You Start — Questions for You

1. **Does this app require a database?** The only stateful feature is the "Set Auto-Send" schedule on the export screen. If you can simulate this with localStorage or session state without a database, let me know. Otherwise, tell me what you'd use.
2. **Azure deployment:** Should this run as an **Azure Static Web App** (simpler, free tier) or an **Azure App Service** (needed if there's a backend)? Make your recommendation based on the architecture you choose.
3. **Routing:** Since this is a multi-page app with separate HTML files, standard `<a href>` navigation is fine. Confirm your routing approach before building.

---

## 10. Build Order (Suggested)

1. File structure + stylesheet foundation (colors, typography, base components)
2. Login page
3. Dashboard (most complex — build this fully before moving on)
4. Team Reports
5. Analytics
6. Settings
7. Export & Share
8. Landing page (index.html)
9. Final: validate HTML5, CSS3, and accessibility; fix any issues

---

*This prompt was prepared from the following product documents: Product Description, OKRs, Wireframes, Prototype, Usability Test, and Storyboard.*
