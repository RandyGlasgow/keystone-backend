-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "shortDescription" TEXT NOT NULL DEFAULT E'',
    "image" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
