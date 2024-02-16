/*
  Warnings:

  - You are about to drop the column `avatar` on the `Doctor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "avatar",
ADD COLUMN     "avatarUrl" TEXT;
