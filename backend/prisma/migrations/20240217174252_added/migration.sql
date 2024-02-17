-- CreateTable
CREATE TABLE "Prescription" (
    "id" SERIAL NOT NULL,
    "patientID" INTEGER NOT NULL,
    "prescriptionURL" TEXT NOT NULL,
    "prescriptionName" TEXT NOT NULL,
    "prescriptionDescription" TEXT NOT NULL,
    "prescriptionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);
