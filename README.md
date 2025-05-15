# WardVision – League of Legends Web Companion

**WardVision** is a modern and responsive web application for League of Legends players to explore summoner statistics, match history, champion insights, leaderboards, and weekly champion rotation.  
It leverages the Riot Games API through a custom backend and provides a smooth user experience using modern frontend technologies.

---

## 🚀 Tech Stack

- ⚛️ **React.js** – Frontend framework
- 💨 **Tailwind CSS** – Utility-first styling
- 📦 **React Query** – Data fetching and caching
- 🌍 **Context API** – Global state management
- 🔌 [**WardVision Backend**](https://github.com/Plavsic01/WardVision-Backend) – Custom Express.js API that connects to Riot Games API

---

## 📚 Features

### 🔍 Summoner Page

- Summoner **search** by name and tag
- Display of **ranked stats** (Solo/Duo & Flex)
- Full **match history** with detailed view for each match:
  - Champion played
  - KDA, CS, gold, damage, and more
  - Item builds and team comparison

---

### 🧙 Champions Page

- **List of all champions** with:
  - Responsive card layout
  - **Filtering** by role
  - **Sorting** (e.g., by name, difficulty)
  - **Partial search** (e.g., typing `"ah"` shows "Ahri", "Malzahar", etc.)
- **Detailed champion view**:
  - Spells with icons and descriptions
  - Base stats and scaling
  - Lore and role classification

---

### 🏆 Leaderboard Page

- Top **Challenger players** display
- **Filter by region** (e.g., EUW, NA, KR)
- **Filter by queue type**:
  - Ranked Solo/Duo
  - Ranked Flex
- Summoner name, rank, LP, win/loss breakdown

---

### 🔄 Champion Rotation

- Weekly **free champion rotation**
- Shows all champions available to play for free
- Uses real-time data from Riot API

---

## 🌐 Deployment

- **Frontend:** Deployed on [Netlify](https://www.netlify.com/)
- **Live Website:** [https://wardvision.site](https://wardvision.site)
- **Backend:** Hosted on an Oracle Cloud virtual machine (Ubuntu)
