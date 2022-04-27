import {DeviceData, DeviceId, StatusRelatoryCreated} from "@/domain/entities/device";
export interface DeviceDataLoader {
  getDeviceDataByMacAdress(macAddress : DeviceId): Promise<DeviceData>;
  //generateRelatory(deviceID : DeviceId): Promise<StatusRelatoryCreated>;
}