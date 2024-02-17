-- CreateTable
CREATE TABLE "Diagnosis" (
    "id" SERIAL NOT NULL,
    "patientID" INTEGER NOT NULL,
    "diagnosis_name" TEXT NOT NULL,
    "diagnosis_confidence" INTEGER NOT NULL,
    "diagnosis_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "feedback" TEXT[],
    "medicines" TEXT[],
    "prescriptionURL" TEXT NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("id")
);
