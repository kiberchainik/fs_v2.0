-- AlterTable
ALTER TABLE "Education" ADD COLUMN     "level_education_id" TEXT;

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "experience_id" TEXT;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_level_education_id_fkey" FOREIGN KEY ("level_education_id") REFERENCES "level_education"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experience_minimal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
