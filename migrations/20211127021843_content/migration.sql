/*
  Warnings:

  - You are about to drop the column `document` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "document",
ADD COLUMN     "content" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]';
