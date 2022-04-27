export interface ApiClientHttp {
  getDeviceData(macAddress: string): Promise<any>;
}