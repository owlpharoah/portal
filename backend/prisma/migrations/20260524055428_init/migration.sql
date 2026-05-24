-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "graduationYear" INTEGER NOT NULL,
    "currentProfessionOrPosition" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
