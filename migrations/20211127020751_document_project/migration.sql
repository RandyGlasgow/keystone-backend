-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "document" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]';
