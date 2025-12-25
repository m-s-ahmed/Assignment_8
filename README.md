#  Hero AI | Modern App Discovery & Management Platform

** Hero AI** is a sleek, high-performance web application designed for discovering, searching, and managing mobile applications. Built with React and optimized for all devices, it provides a seamless user experience from browsing top-rated apps to managing personal installations.

##  Live Demo
[http://shimmering-chebakia-593e3b.netlify.app/]

---

##  Features

###  Home Page
- **Dynamic Banner:** Hero section with quick links to App Store and Play Store.
- **Statistics Section:** Visual data cards showcasing platform growth.
- **Top Apps:** A curated grid of the 8 highest-rated apps with a "Show All" redirection.

###  All Apps (Store)
- **Live Search:** Case-insensitive search that filters the app library in real-time.
- **Dynamic Results Count:** Instantly updates the count as users filter through apps.
- **Responsive Grid:** Optimized 4-column layout that adapts to mobile and tablet views.

###  App Details Page
- **Installation Logic:** One-click install that persists data via `localStorage`.
- **Review Visualization:** Responsive Bar Charts powered by `Recharts` to visualize rating distributions (1-5 stars).
- **Interactive UI:** Buttons dynamically change to "Installed" state once clicked.

###  My Installation (User Dashboard)
- **App Management:** View all apps saved to your local storage.
- **Sorting System:** Advanced dropdown to sort installed apps by **Size** or **Downloads** (High-to-Low / Low-to-High).
- **Uninstall Functionality:** Seamlessly remove apps from both the UI and local storage with instant feedback.

###  Technical Excellence
- **Responsive Design:** Fully fluid layout designed for mobile, tablet, and desktop.
- **Custom Error Page:** Branded 404 page for invalid routes.
- **Loading States:** Smooth animations during navigation and search operations.

---

##  Technologies Used

- **Core:** React.js (v18+)
- **Routing:** React Router 7
- **Styling:** Tailwind CSS + DaisyUI
- **Data Visualization:** Recharts
- **Icons:** React Icons
- **State Persistence:** LocalStorage API
- **Notifications:** React Hot Toast / SweetAlert2
- **Deployment:** [Cloudflare Pages / Netlify / Vercel]

---

##  Project Structure

```text
src/
├── Components/         # Reusable UI components (Banner, Navbar, Footer)
├── Pages/              # Main Route components (Home, AllApps, Details, MyInstallation)
├── Utility/            # LocalStorage and Helper functions
├── Assets/             # Images and JSON data
└── App.js              # Routing and Layout configuration
