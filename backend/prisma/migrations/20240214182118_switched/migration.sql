-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "patients_assigned" SET DEFAULT ARRAY[]::INTEGER[];
