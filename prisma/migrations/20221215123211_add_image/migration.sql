/*
  Warnings:

  - Added the required column `image` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipientId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "readAt" DATETIME,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_notifications" ("canceledAt", "category", "content", "createdAt", "id", "readAt", "recipientId") SELECT "canceledAt", "category", "content", "createdAt", "id", "readAt", "recipientId" FROM "notifications";
DROP TABLE "notifications";
ALTER TABLE "new_notifications" RENAME TO "notifications";
CREATE INDEX "notifications_recipientId_idx" ON "notifications"("recipientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
