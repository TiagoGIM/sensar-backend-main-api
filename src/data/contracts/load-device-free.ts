import { Device } from './../../domain/entities/device';
export interface LoadDeviceFreeRepository {
  loadAll(companyId: string): Promise<Device[]>;
}