# Portal


## First Time Setup

### What You Need
- Node.js 20 or higher
- Docker
- Git

### Getting Started

Clone this thing:
```bash
git clone 
cd portal
```
```
docker-compose build
docker-compose up
```
Open http://localhost:3000 and you should see the Next.js page.

## Adding Dependencies

When you need a new package:

```bash
# Stop your container first
docker-compose down

# Add the package
npm install <package>

# Rebuild the image
docker-compose build

# Start it back up
docker-compose up
```

Open http://localhost:3000 and you should see the Next.js page.
