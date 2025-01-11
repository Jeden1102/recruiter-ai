-- CreateTable
CREATE TABLE "Chat" (
    "id" UUID NOT NULL,
    "email" TEXT,
    "url" TEXT,
    "position" TEXT,
    "requirements" TEXT,
    "responsibilities" TEXT,
    "niceToHave" TEXT,
    "file" TEXT,
    "type" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "task" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);
