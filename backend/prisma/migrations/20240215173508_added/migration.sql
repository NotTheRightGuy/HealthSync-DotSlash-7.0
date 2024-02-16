/*
  Warnings:

  - You are about to drop the column `avatar` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `avatarUrl` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "avatar",
ADD COLUMN     "avatarUrl" TEXT NOT NULL;
