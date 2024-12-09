/*
  Warnings:

  - The `driver_license_category` column on the `candidat_life_state` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "candidat_life_state" DROP COLUMN "driver_license_category",
ADD COLUMN     "driver_license_category" "DriverCategory"[];
