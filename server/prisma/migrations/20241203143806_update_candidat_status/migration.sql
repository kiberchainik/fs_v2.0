/*
  Warnings:

  - You are about to drop the column `availability_transport` on the `candidat_data` table. All the data in the column will be lost.
  - You are about to drop the column `driver_license_category` on the `candidat_data` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `candidat_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "candidat_data" DROP COLUMN "availability_transport",
DROP COLUMN "driver_license_category",
DROP COLUMN "marital_status";

-- CreateTable
CREATE TABLE "candidat_life_state" (
    "id" TEXT NOT NULL,
    "driver_license_category" TEXT,
    "availability_transport" BOOLEAN NOT NULL DEFAULT false,
    "marital_status" "MaritalStatus" NOT NULL DEFAULT 'NONE',
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "candidat_life_state_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "candidat_life_state_candidate_id_key" ON "candidat_life_state"("candidate_id");

-- AddForeignKey
ALTER TABLE "candidat_life_state" ADD CONSTRAINT "candidat_life_state_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;
