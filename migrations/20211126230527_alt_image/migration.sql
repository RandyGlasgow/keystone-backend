/*
  Warnings:

  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "image",
ADD COLUMN     "imageAlt" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "image_extension" TEXT,
ADD COLUMN     "image_filesize" INTEGER,
ADD COLUMN     "image_height" INTEGER,
ADD COLUMN     "image_id" TEXT,
ADD COLUMN     "image_mode" TEXT,
ADD COLUMN     "image_width" INTEGER;
