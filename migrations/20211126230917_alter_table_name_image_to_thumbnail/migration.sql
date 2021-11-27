/*
  Warnings:

  - You are about to drop the column `imageAlt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_extension` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_filesize` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_height` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_mode` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_width` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "imageAlt",
DROP COLUMN "image_extension",
DROP COLUMN "image_filesize",
DROP COLUMN "image_height",
DROP COLUMN "image_id",
DROP COLUMN "image_mode",
DROP COLUMN "image_width",
ADD COLUMN     "thumbnailAlt" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "thumbnail_extension" TEXT,
ADD COLUMN     "thumbnail_filesize" INTEGER,
ADD COLUMN     "thumbnail_height" INTEGER,
ADD COLUMN     "thumbnail_id" TEXT,
ADD COLUMN     "thumbnail_mode" TEXT,
ADD COLUMN     "thumbnail_width" INTEGER;
