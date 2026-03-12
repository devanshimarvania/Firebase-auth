# 🔐 Firebase Authentication System

A secure, user-friendly web application built with **React.js** and **Firebase Authentication** for complete user management — supporting email/password and social login with real-time auth state monitoring.

---

## 🚀 Features

- **User Registration** — Sign up via email/password or social providers (Google, Facebook, GitHub) with optional email verification
- **User Login** — Secure login with persistent sessions across devices
- **Password Management** — Forgot password reset via email + change password while logged in
- **Protected Routes / Dashboard** — Auth-guarded pages with automatic redirect for unauthenticated users
- **User Profile Management** — Update display name, profile picture, and account details
- **Real-Time Auth State** — UI dynamically updates based on authentication status

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Authentication | Firebase Authentication |
| Database (optional) | Firebase Firestore / Realtime Database |
| SDK | Firebase SDK for JavaScript |
| Styling | Tailwind CSS / Material UI |
| Deployment | Firebase Hosting / Vercel |

---

## 📁 Project Structure

```
firebase-auth-system/
├── public/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Login, Register, Dashboard, Profile
│   ├── context/            # Auth context (real-time state)
│   ├── routes/             # Protected route wrappers
│   ├── firebase/           # Firebase config & auth helpers
│   └── App.jsx
├── .env                    # Firebase credentials (not committed)
├── .gitignore
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+)
- Firebase account & project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/firebase-auth-system.git
cd firebase-auth-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.

### 4. Run the Application

```bash
npm start
```

App runs at `http://localhost:3000`

---

## 🔒 Authentication Flow

```
User visits app
    ↓
Real-time auth state check (Firebase onAuthStateChanged)
    ↓
Not logged in? → Redirected to /login
    ↓
Login / Register → Firebase validates credentials
    ↓
Success → Redirected to /dashboard (protected route)
```

---

## 🌐 Deployment

### Firebase Hosting

```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```

### Vercel

```bash
npm run build
vercel --prod
```

---

## 📋 Environment Variables

| Variable | Description |
|---|---|
| `REACT_APP_FIREBASE_API_KEY` | Firebase project API key |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `REACT_APP_FIREBASE_PROJECT_ID` | Firebase project ID |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `REACT_APP_FIREBASE_APP_ID` | Firebase app ID |

---

## 👤 Author

**Your Name**
- GitHub: [@devanshimarvania](https://github.com/devanshimarvania)
