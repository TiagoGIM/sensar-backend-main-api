import { Device } from "@src/company/models/interfaces";
import { EquipmentDTO, EquipmentManger } from "../equipmentManager";
import { IEquipmantManagerRepository } from "../repository/IequipmantManagerRepository";

// mockando repository
class EquipmentMangerRepositorySpy implements IEquipmantManagerRepository {
  equipmentId?: string | undefined;
  readonly dataMocked: Device[] = [] 
  async getDevicesByEquipmentId(equipmentId: string): Promise<Device[]> {
    return this.dataMocked;
  }
}

type SutOutput = { sut: EquipmentManger, equipmentMangerRepository: EquipmentMangerRepositorySpy }
const makeSut = (): SutOutput => {
  const equipmentMangerRepository = new EquipmentMangerRepositorySpy();
  const sut = new EquipmentManger(equipmentMangerRepository);
  return { sut, equipmentMangerRepository }
}

describe('EquipmentManger', () => {
  it('should retrive all devices associeted an equipment Id', async () => {
    let equipmentId = '1234';
    let response = {
      id: equipmentId,
      devices : []
    }
    const { sut,  } = makeSut()
    const equipmentDevices : EquipmentDTO = await sut.getDevicesAssocieted(equipmentId);
    expect(equipmentDevices).toEqual(response);
  });
});