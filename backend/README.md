# K-Folio Backend
This project uses environment variables (.env)to manage configuration such as the database connection and server port. To run the project locally, create a .env file in the root directory of the backend and add the required variables, including the MongoDB connection URL and the application port. For example, set MONGODB_URI to mongodb://127.0.0.1:27017/kfolio to connect to a local MongoDB instance and set PORT to 5000 for the server. After creating the .env file, install the project dependencies using npm install and start the development server with npm run dev. Ensure that MongoDB is running before starting the server. The .env file contains sensitive information and should not be committed to version control; it must be added to the .gitignore file.

RESTful API backend for the K-Folio portfolio website built with Node.js, Express, TypeScript, and MongoDB Atlas.

## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express** - Fast, minimalist web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB Atlas** - Cloud-hosted NoSQL database
- **Mongoose** - MongoDB object modeling tool

## Prerequisites

- Node.js 
- pnpm package manager (recommended)
- MongoDB Atlas account
- Docker (optional, for containerization)

## Getting Started

### Installation

Install dependencies:
```bash
pnpm install
```

### Environment Setup

1. Create a `.env` file in the backend directory:
   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables in `.env`:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   PORT=5000
   NODE_ENV=development
   ```

3. **Get MongoDB Atlas Connection String:**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster or use an existing one
   - Click **Connect** → **Connect your application**
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<database>` with your credentials

### Development

Start the development server with auto-reload:
```bash
pnpm dev
```

The API will be available at [http://localhost:5000](http://localhost:5000)

### Build

Compile TypeScript to JavaScript:
```bash
pnpm build
```
## Docker Support

### Build Docker Image

```bash
pnpm docker:build
```

### Run Docker Container

```bash
pnpm docker:run
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.ts          # MongoDB connection configuration
│   └── index.ts           # Application entry point
├── dist/                  # Compiled JavaScript (generated after build)
├── .env                   # Environment variables (not in git)
├── .env.example           # Example environment variables
├── .dockerignore          # Docker ignore patterns
├── .gitignore             # Git ignore patterns
├── dockerfile             # Docker configuration
├── nodemon.json           # Nodemon configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm docker:build` | Build Docker image |
| `pnpm docker:run` | Run Docker container |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| POST | `/auth/login` | Obtain JWT (use in `Authorization: Bearer <token>`) |
| POST | `/posts/create` | Create post (requires auth) |
| GET | `/posts` | List posts (no auth) |


## Development Workflow

1. Make changes to TypeScript files in `src/`
2. Nodemon automatically restarts the server
3. Test your changes at `http://localhost:3000`
4. Build for production with `pnpm build`

## Learn More

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Docker Documentation](https://docs.docker.com/)
