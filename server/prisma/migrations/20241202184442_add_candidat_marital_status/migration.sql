-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('NONE', 'NOT_MARRIED', 'MARRIEDNOCHILDREN', 'MARRIEDHAVECHILDREN', 'DIVORCET');

-- AlterTable
ALTER TABLE "candidat_data" ADD COLUMN     "marital_status" "MaritalStatus" NOT NULL DEFAULT 'NONE';
