-- CreateTable
CREATE TABLE "_Project_tags_Tag_projects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Project_tags_Tag_projects_AB_unique" ON "_Project_tags_Tag_projects"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_tags_Tag_projects_B_index" ON "_Project_tags_Tag_projects"("B");

-- AddForeignKey
ALTER TABLE "_Project_tags_Tag_projects" ADD FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_tags_Tag_projects" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
