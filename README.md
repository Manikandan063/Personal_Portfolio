# Manikandan T — Full Stack Developer Portfolio & CMS

A modern, high-performance Full Stack Developer portfolio and Admin CMS built with **React**, **Node.js**, **Express**, and **PostgreSQL (Sequelize)**.

---

## 🚀 Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS Design System with theme variables, dynamic gradients & [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Icons**: [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/) with centralized interceptors
- **Form Handling & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) toast notifications

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database & ORM**: [PostgreSQL](https://www.postgresql.org/) with [Sequelize ORM](https://sequelize.org/)
- **Security**: [Helmet](https://helmetjs.github.io/), [CORS](https://github.com/expressjs/cors), [Bcrypt](https://github.com/kelektiv/node.bcrypt.js), [JWT (JSON Web Tokens)](https://jwt.io/), [Express Rate Limit](https://github.com/express-rate-limit/express-rate-limit)
- **Validation**: [Zod](https://zod.dev/)

---

## 📁 Repository Structure

```text
Personal_Portfolio/
├── .gitignore               # Root git ignore (protects node_modules & env)
├── README.md                # Project documentation
├── backend/
│   ├── .env.example         # Backend environment variables template
│   ├── .gitignore           # Backend-specific git ignore
│   ├── package.json
│   └── src/
│       ├── app.js           # Express app setup, CORS, Helmet, routes
│       ├── server.js        # Server entry point
│       ├── config/          # Database and environment configurations
│       ├── middleware/      # Auth & validation middlewares
│       ├── models/          # Sequelize models (Admin, Project, etc.)
│       ├── modules/         # Modular feature routes & controllers
│       ├── routes/          # API route aggregator
│       ├── scripts/         # DB init scripts
│       ├── seeders/         # Admin & project seeders
│       └── utils/           # Helper functions (passwords, tokens)
└── frontend/
    ├── .env.example         # Frontend environment variables template
    ├── .gitignore           # Frontend-specific git ignore
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx          # App root with routing
        ├── index.css        # Core design tokens, gradients & animations
        ├── context/         # Auth & state contexts
        ├── modules/
        │   ├── admin/       # Protected Admin CMS pages & components
        │   └── portfolio/   # Public Portfolio sections (Hero, About, Skills, Projects, Contact)
        └── shared/          # API client, hooks & utilities
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **npm** or **yarn** / **pnpm**
- **PostgreSQL**: Running locally or via a cloud provider (e.g. Supabase, Neon, Render)

---

### 1. Backend Setup

1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   *Edit `.env` to configure your PostgreSQL `DATABASE_URL` and `JWT_SECRET`.*

4. Initialize and seed the database:
   ```bash
   npm run init-db
   ```

5. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server runs on `http://localhost:5000` by default.*

---

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend runs on `http://localhost:5173` (or the next available port).*

---

## 🔒 Security & Environment Variables

- **Never commit `.env` files**: All `.env` and `.env.*` files are ignored by git in `.gitignore`.
- Reference configuration templates are safely tracked in:
  - [`backend/.env.example`](backend/.env.example)
  - [`frontend/.env.example`](frontend/.env.example)

---

## 📜 Available Scripts

### Backend (`/backend`)
- `npm run dev`: Starts the server with nodemon auto-reload.
- `npm start`: Runs the server in production mode.
- `npm run init-db`: Syncs Sequelize models and seeds initial data.

### Frontend (`/frontend`)
- `npm run dev`: Starts the Vite local development server.
- `npm run build`: Generates the optimized production bundle in `/dist`.
- `npm run lint`: Runs oxlint for code quality checks.
- `npm run preview`: Previews the production build locally.

---

## 👨‍💻 Author

**Manikandan T**  
Full Stack Developer & Engineer  
- GitHub: [@Manikandan063](https://github.com/Manikandan063)  
- LinkedIn: [manikandan-mk06](https://www.linkedin.com/in/manikandan-mk06)
