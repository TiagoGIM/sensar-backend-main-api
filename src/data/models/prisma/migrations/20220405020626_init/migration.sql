/*
  Warnings:

  - The primary key for the `Device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Device` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `equipmentId` column on the `Device` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Equipment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Line` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Line` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Machine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Machine` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `machineId` on the `Equipment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lineId` on the `Machine` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_machineId_fkey";

-- DropForeignKey
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_lineId_fkey";

-- AlterTable
ALTER TABLE "Device" DROP CONSTRAINT "Device_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "equipmentId",
ADD COLUMN     "equipmentId" UUID,
ADD CONSTRAINT "Device_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "machineId",
ADD COLUMN     "machineId" UUID NOT NULL,
ADD CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Line" DROP CONSTRAINT "Line_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Line_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "lineId",
ADD COLUMN     "lineId" UUID NOT NULL,
ADD CONSTRAINT "Machine_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
