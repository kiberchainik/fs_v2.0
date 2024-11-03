-- AlterTable
ALTER TABLE "job_offers" ADD COLUMN     "contract_id" TEXT,
ADD COLUMN     "experience_id" TEXT,
ADD COLUMN     "level_education_id" TEXT,
ADD COLUMN     "mode_job_id" TEXT,
ADD COLUMN     "working_time_id" TEXT;

-- CreateTable
CREATE TABLE "contract_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "contract_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_minimal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "experience_minimal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mode_job" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "mode_job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "working_time_job" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "working_time_job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level_education" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "level_education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contract_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experience_minimal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_mode_job_id_fkey" FOREIGN KEY ("mode_job_id") REFERENCES "mode_job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_working_time_id_fkey" FOREIGN KEY ("working_time_id") REFERENCES "working_time_job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_level_education_id_fkey" FOREIGN KEY ("level_education_id") REFERENCES "level_education"("id") ON DELETE SET NULL ON UPDATE CASCADE;
