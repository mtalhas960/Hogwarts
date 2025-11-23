Filename: hogwarts-universe-website.md

# Welcome to Hogwarts — Full Website Concept

A fan-based, interactive Hogwarts world where users unlock pages, spells, characters, and games using coins and XP. Users start as new students with only the homepage open and gradually unlock the magical world.

---

## Overview
- Interactive progression system with locked pages, quizzes, shop, spells, games, XP, coins, house points, achievements, and a leaderboard.
- Emphasis on repeatable loops: missions → XP/coins → unlocks → new missions.
- Social elements: Houses, House leaderboards, House missions.

---

## Page Structure & Unlock System

### 1) Homepage — “The Arrival at Hogwarts” (Unlocked by default)
- Hogwarts intro animation (train → castle)
- Sorting Hat teaser (locked)
- Basic menu visible; rest blurred/locked
- Small starter reward for exploration (starter coins)
- House points bar (starts empty)

---

### 2) Sorting Ceremony (Quiz Page) (Locked: unlock via coins OR simple mission)
- Sorting Hat quiz
- Assigns a house: Gryffindor, Slytherin, Hufflepuff, Ravenclaw
- Rewards:
  - House badge
  - 100 bonus coins
  - Access to House-specific missions

---

### 3) Houses Page (Locked: after sorting)
- Your House points
- House Members leaderboard
- House missions (daily/weekly)
- House Quilt / Badge collection
- Rewards example: complete house quest → house points + XP

---

### 4) Professors Page (Locked: unlock with coins)
- List of professors with unlockable profiles (McGonagall, Snape, Flitwick, etc.)
- Each professor unlocks a special spell challenge or quest
- Hidden achievements for secret/rare professors
- Example: Unlock Snape → access Potion mini-game

---

### 5) Students Page (Locked: unlock with XP)
- Interactive directory of famous students (Harry, Hermione, Draco, Luna…)
- Clicking a student reveals traits, “relationship points,” and secret items
- Some students unlock only via achievements

---

### 6) Spells Page (Locked: unlock with coins + XP)
- Spells are buyable and usable inside page challenges
- Examples:
  - Lumos — Switch Light/Dark mode
  - Accio Coins — Earn coins faster for 5 minutes
  - Silencio — Mute site animations/sounds
  - Alohomora — Unlock a random page discount
- Spells can be upgraded using coins

---

### 7) Adventures / Games Page (Locked: after first spell)
- Mini-games & adventures:
  - Potion Brewing Game
  - Quidditch Reaction Mini-Game
  - Spells Duel
  - Magical Creatures Capture
  - Escape the Forbidden Forest
- Rewards: XP, coins, house points

---

### 8) Daily Prophet (News Page) (Locked: unlock with coins or Alohomora)
- Wizard-themed tech/pop-culture news and in-universe events
- Random site events: e.g., “Peeves is loose — XP rewards doubled for 3 hours!”

---

### 9) Magical Shop (Unlocked by default)
- Items:
  - Unlock pages
  - Buy spells and upgrades
  - Purchase access to rare characters
  - Themes (Gryffindor Red, Slytherin Green, Dark Mode)
  - Rare artifacts that grant perks

---

### 10) Achievements (Unlocked: view list)
- Shown and hidden achievements with secret unlocks
- Examples:
  - Midnight Owl — Visit site at midnight
  - Polyjuice Identity — Change theme 3 times
  - Secret Keeper — Find a hidden page link
- Hidden achievements unlock secret rooms, characters, rare spells

---

### 11) Leaderboard
- Top Students (XP)
- House Points
- Spell Masters (spells owned/upgraded)
- Potion Masters (game results)
- Hidden Achievers (secrets found)

---

### 12) Secret Pages (Hidden)
- Not shown in menus; accessed through achievements or hidden links
- Examples:
  - Room of Requirement
  - Chamber of Secrets (rare achievement)
  - Ministry of Magic (super XP rewards)
  - Hogsmeade Marketplace (special shop)

---

## User Progression Flow
1. User lands on homepage.
2. Earn starter coins → buy/attempt Sorting Quiz.
3. Get sorted → unlock Houses page.
4. House missions → earn XP + coins.
5. Unlock Professors → gain access to spells.
6. Unlock spells → unlock Games page.
7. Play Games → unlock advanced areas + Daily Prophet.
8. Discover hidden achievements → unlock secret rooms and rare content.
- Repeat: new missions, events, seasonal content.

---

## Economy System
- Coins: Currency for unlocking pages, buying spells/items, cosmetics. Earned by clicking interactions, missions, games, and events.
- XP: Progression metric for leveling. Unlocks advanced pages and student directory features.
- House Points: Community metric; earned through missions and games; used for seasonal House rewards.
- Design principle: Coins unlock immediate content; XP unlocks deeper progression.

---

## Core Systems (high-level)
- Unlock system: gates based on coins, XP, achievements, or combinations.
- Spells: purchasable, upgradable, usable in site mechanics and mini-games.
- Quests & Missions: Daily/weekly + special events → drive retention.
- Achievements: visible + hidden; used to gate secret content.
- Social: House leaderboards, public profiles, friends/relationships, House events.
- Monetization (optional): cosmetic shop, time-savers, or premium seasonal passes (ensure fan rules & IP respect).

---

## Sample Rewards & Costs (example balance — adjust in design)
- Sorting Ceremony: 50 coins or free via starter mission
- Unlock Professors page: 500 coins
- Unlock Students directory: requires 1,000 XP
- Spells: base 200–1,000 coins; upgrades 150–500 coins each tier
- Games: free to play; optional entry fee for tournaments (coins) with rewards

---

## Next Steps (author choices)
Choose one to expand:
- A) Visual Page Layout (wireframes)
- B) XP/Coin/Store Balance System (detailed)
- C) Missions + Achievements List (detailed)
- D) Games Details + Spell Uses (detailed)

---

## Implementation Notes & Suggestions
- Start MVP: Homepage, Sorting, Shop, simple Spell (Lumos), 1 Game (Potion Brewing), basic coins/XP system, and Achievements.
- Analytics: track retention, conversion, and which unlocks are popular.
- Accessibility: provide non-animated alternatives and keyboard navigation.
- Legal: this is a fan project. Avoid monetizing copyrighted IP without permission; consider original styling and disclaimers.
- Tech stack suggestions: React/Next.js for front-end, Node/Express or serverless functions for backend, PostgreSQL for user data, Redis for session/leaderboard caching, and a small game engine (Phaser.js) for mini-games.

---

## Files to include in repo (suggested)
- README.md (project overview)
- hogwarts-universe-website.md (this file)
- docs/wireframes/ (images & Figma exports)
- docs/economy.md (balance design)
- src/ (frontend)
- server/ (backend)
- scripts/ (seed, migrations)
- assets/ (icons, fonts, sprites)

---

Would you like me to:
- Export this into a repo file (commit/push) — tell me the repo and branch, or
- Expand into A, B, C, or D with detailed content next?

(Reply with a filename change if you prefer a different name, or choose A/B/C/D to continue.)