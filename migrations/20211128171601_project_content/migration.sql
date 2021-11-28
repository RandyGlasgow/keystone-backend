-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "content" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]';
