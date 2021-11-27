/*
  Warnings:

  - You are about to drop the column `image_extension` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_filesize` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_height` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_mode` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image_width` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "image_extension",
DROP COLUMN "image_filesize",
DROP COLUMN "image_height",
DROP COLUMN "image_id",
DROP COLUMN "image_mode",
DROP COLUMN "image_width",
ADD COLUMN     "image" TEXT NOT NULL DEFAULT E'';
