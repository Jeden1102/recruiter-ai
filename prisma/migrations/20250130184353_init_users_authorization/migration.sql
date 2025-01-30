-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "authorizedEmails" TEXT[],
ADD COLUMN     "restricted" BOOLEAN NOT NULL DEFAULT false;
