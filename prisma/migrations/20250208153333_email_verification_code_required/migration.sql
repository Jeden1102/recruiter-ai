/*
  Warnings:

  - Made the column `emailVerificationCode` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "emailVerificationCode" SET NOT NULL,
ALTER COLUMN "emailVerificationCode" SET DEFAULT '';
