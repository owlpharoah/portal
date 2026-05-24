import express from "express";
import cors from "cors";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdir } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Setup file upload
const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Create uploads directory on startup
await mkdir("uploads", { recursive: true });

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// POST /api/contacts - Create a new contact
app.post("/api/contacts", upload.single("photo"), async (req, res) => {
  try {
    const { fullName, department, graduationYear, currentProfessionOrPosition, linkedinUrl, email, mobileNumber } = req.body;

    // Validate required fields
    if (!fullName || !department || !graduationYear || !currentProfessionOrPosition || !linkedinUrl || !email || !req.file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate LinkedIn URL
    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/.+/;
    if (!linkedinRegex.test(linkedinUrl)) {
      return res.status(400).json({ error: "Invalid LinkedIn URL" });
    }

    // Create contact
    const contact = await prisma.contact.create({
      data: {
        fullName,
        department,
        graduationYear: parseInt(graduationYear),
        currentProfessionOrPosition,
        linkedinUrl,
        photoUrl: `/uploads/${req.file.filename}`,
        email,
        mobileNumber: mobileNumber || null,
      },
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
});

// GET /api/contacts - Get all contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// GET /api/contacts/:id - Get a specific contact
app.get("/api/contacts/:id", async (req, res) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: req.params.id },
    });
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ error: "Failed to fetch contact" });
  }
});

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

// Handle graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
