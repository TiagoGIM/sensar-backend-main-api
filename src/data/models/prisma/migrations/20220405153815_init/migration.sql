/*
  Warnings:

  - You are about to drop the column `macAdrr` on the `Device` table. All the data in the column will be lost.
  - Added the required column `macAddress` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observations` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "toremove" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "macAdrr",
ADD COLUMN     "macAddress" TEXT NOT NULL,
ADD COLUMN     "observations" TEXT NOT NULL;
