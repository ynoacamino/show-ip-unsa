-- CreateTable
CREATE TABLE "Port" (
    "id" SERIAL NOT NULL,
    "port" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);
