import { DeviceDataLoader } from "../../domain/use-cases/device-data";
import { DeviceData, DeviceId } from "../../domain/entities/device";
import { ApiClientHttp } from "../contracts/relatorios-http-client";

export class DeviceDataLoaderImp implements DeviceDataLoader {
  constructor(private httpClient: ApiClientHttp) { }
  async getDeviceDataByMacAdress(macAddress: DeviceId): Promise<DeviceData> {

    const deviceData = await this.httpClient.getDeviceData(macAddress);
    //implementar etapa que busca o ID relacionado ao macaddress
    return {
      id: 'id do dispositivo',
      macAddress: macAddress,
      data: deviceData,
    }
  }
}