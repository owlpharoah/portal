# Portal - Alumni Directory

A monorepo project with a **Next.js frontend** and **Express.js backend** for managing alumni information.

## 📁 Project Structure

```
portal/
├── frontend/                 # Next.js application (port 3000)
│   ├── src/app/             # Pages and layout
│   ├── public/              # Static assets
│   ├── package.json
│   └── Dockerfile
├── backend/                  # Express.js API server (port 5000)
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/      # Migration history
│   ├── server.js            # Main API server
│   ├── package.json
│   ├── .env                 # Database connection
│   └── Dockerfile
├── docker-compose.yml        # Docker services config
└── README.md
```

## Prerequisites

- **Node.js 20+**
- **Docker Desktop** (for containerized running)
- **npm**

---

## 🚀 Quick Start

### Option 1: Local Development (Recommended during development)

**Terminal 1 - Frontend:**
```bash
cd frontend
npm install
npm run dev
# Frontend opens at http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
cd backend
npm install
npm run dev
# Backend API runs at http://localhost:5000
```

### Option 2: Docker Compose

**First time only - rebuild images:**
```bash
docker-compose build
```

**Then start both services:**
```bash
docker-compose up
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health check: http://localhost:5000/api/health

**Stop services:**
```bash
docker-compose down
```

---

## 📊 Data Model

### Contact Schema
Each alumni record includes:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `fullName` | String | ✓ Yes | Alumni full name |
| `department` | String | ✓ Yes | Department of study |
| `graduationYear` | Integer | ✓ Yes | Year of graduation |
| `currentProfessionOrPosition` | String | ✓ Yes | Current job title |
| `linkedinUrl` | String | ✓ Yes | LinkedIn profile URL |
| `photoUrl` | String | ✓ Yes | Path to uploaded photo |
| `email` | String | ✓ Yes | Contact email |
| `mobileNumber` | String | ✗ Optional | Phone number |
| `createdAt` | DateTime | Auto | Created timestamp |
| `updatedAt` | DateTime | Auto | Last updated timestamp |

---

## 🔌 API Endpoints

### Base URL: `http://localhost:5000`

#### Health Check
- **GET** `/api/health`
  - Response: `{ status: "ok" }`

#### Create Contact
- **POST** `/api/contacts`
  - Content-Type: `multipart/form-data`
  - Fields:
    - `fullName` (text, required)
    - `department` (text, required)
    - `graduationYear` (number, required)
    - `currentProfessionOrPosition` (text, required)
    - `linkedinUrl` (text, required)
    - `email` (text, required)
    - `mobileNumber` (text, optional)
    - `photo` (file, required, image only, max 5MB)
  - Response: Contact object with ID

#### Get All Contacts
- **GET** `/api/contacts`
  - Response: Array of contact objects, sorted by newest first

#### Get Single Contact
- **GET** `/api/contacts/:id`
  - Response: Contact object or 404 error

---

## 👥 Team Workflow

### Adding a Team Member

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd portal
   ```

2. **First-time setup:**
   - Choose to work locally or with Docker
   - Install dependencies in both folders
   - For backend, ensure database is migrated

### Frontend Development

1. Work in `frontend/` folder
2. Changes auto-reload with `npm run dev`
3. To add packages:
   ```bash
   cd frontend
   npm install <package-name>
   ```

### Backend Development

1. Work in `backend/` folder
2. Server auto-reloads with `npm run dev --watch`
3. To add packages:
   ```bash
   cd backend
   npm install <package-name>
   ```

### Database Schema Changes

1. **Edit schema:**
   ```bash
   cd backend
   # Edit prisma/schema.prisma
   ```

2. **Create migration:**
   ```bash
   npx prisma migrate dev --name <description>
   # Example: npx prisma migrate dev --name add_email_field
   ```

3. **Commit migration files** (generated in `backend/prisma/migrations/`)

### Docker Workflow

**When adding packages (npm install):**
```bash
docker-compose build  # Rebuild images
docker-compose up     # Start services
```

**When changing code only:**
```bash
docker-compose up     # No rebuild needed
```

---

## 🐳 Docker Management

### Build images
```bash
docker-compose build
```

### Start services
```bash
docker-compose up
```

### Stop services
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs frontend
docker-compose logs backend
```

### Rebuild and restart
```bash
docker-compose down
docker-compose build
docker-compose up
```

---

## 🔧 Troubleshooting

### Backend database not syncing
```bash
cd backend
npx prisma db push       # Push schema to database
# or reset completely:
npx prisma migrate reset # WARNING: Deletes all data
```

### Port already in use

**Windows:**
```powershell
netstat -ano | findstr :3000  # Check port 3000
netstat -ano | findstr :5000  # Check port 5000
```

**Mac/Linux:**
```bash
lsof -i :3000   # Check port 3000
lsof -i :5000   # Check port 5000
```

### Dependencies not installing
```bash
# Clear cache and reinstall
cd frontend  # or backend
rm -r node_modules package-lock.json
npm install
```

### Database file permissions error
```bash
cd backend
rm -f dev.db                    # Delete old database
npx prisma migrate dev --name init  # Recreate fresh
```

### Docker image rebuild errors
```bash
docker-compose down
docker system prune -f          # Clean up unused images
docker-compose build --no-cache # Force clean build
docker-compose up
```

---

## 📝 Git Commit Guidelines

When committing changes:

```bash
# Frontend changes
git add frontend/
git commit -m "feat: add alumni form"

# Backend changes
git add backend/
git commit -m "feat: add contact POST endpoint"

# Database migrations (always commit!)
git add backend/prisma/migrations/
git commit -m "db: add email validation field"

# Docker changes
git add docker-compose.yml Dockerfile
git commit -m "chore: update Node version to 20"
```

---

## 📞 Common Commands Reference

| Task | Command |
|------|---------|
| Start frontend locally | `cd frontend && npm run dev` |
| Start backend locally | `cd backend && npm run dev` |
| Create DB migration | `cd backend && npx prisma migrate dev --name <name>` |
| View DB in UI | `cd backend && npx prisma studio` |
| Build Docker images | `docker-compose build` |
| Start Docker services | `docker-compose up` |
| Stop Docker services | `docker-compose down` |
| Install frontend package | `cd frontend && npm install <pkg>` |
| Install backend package | `cd backend && npm install <pkg>` |
| Check backend health | `curl http://localhost:5000/api/health` |

---

## ✅ Checklist for New Contributors

- [ ] Clone repo and navigate to `portal/`
- [ ] Set up frontend: `cd frontend && npm install && npm run dev`
- [ ] In another terminal, set up backend: `cd backend && npm install && npm run dev`
- [ ] Test backend: Visit `http://localhost:5000/api/health`
- [ ] Test frontend: Visit `http://localhost:3000`
- [ ] Create a test branch: `git checkout -b feature/my-feature`
- [ ] Commit changes and push
- [ ] Create a pull request

---

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker Documentation](https://docs.docker.com/)
