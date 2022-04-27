import { DeviceUnit } from './../entities/device';
import { CompanyId } from './../entities/company-structure';
export interface DeviceFreeLoader {
  loadAll(companyId: CompanyId ) : Promise<DeviceUnit[]>
}