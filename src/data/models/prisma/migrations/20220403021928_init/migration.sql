-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "deviceId" INTEGER;

-- AlterTable
ALTER TABLE "Line" ADD COLUMN     "machineId" INTEGER;

-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "equipmentId" INTEGER;

-- AlterTable
ALTER TABLE "Sector" ALTER COLUMN "lineId" DROP NOT NULL;
