import { CheckInfrastructure } from "../check-infrastructure";
import { InfrastrureTree, Sector } from "../models/interfaces";
import { ILoadInfrastrureReposisory } from "../repositories/loadInfrastrureRepository.interface";
// mockando repository
class LoadInfrasctureReposisorySpy implements ILoadInfrastrureReposisory {
  companyId?: string;
  readonly treeMocked: InfrastrureTree = { sectors: [] }
  async loadInfrastructureCompleteTree(groupId: string): Promise<InfrastrureTree> {
    this.companyId = groupId;
    return this.treeMocked;
  }
}
//System Under Test - sut
type SutOutput = { sut: CheckInfrastructure, loadInfrasctureReposisory: LoadInfrasctureReposisorySpy }
const makeSut = (): SutOutput => {
  const loadInfrasctureReposisory = new LoadInfrasctureReposisorySpy();
  const sut = new CheckInfrastructure(loadInfrasctureReposisory);
  return { sut, loadInfrasctureReposisory }
}
describe('CheckInfrastructure', () => {
  beforeAll(() => { });
  afterAll(() => { });
  it('should try get all sectores from companyId', async () => {
    const { sut, loadInfrasctureReposisory } = makeSut()
    const companyId = 'any_group_id';
    const infraTest: InfrastrureTree = { sectors: [] };
    const infraTree = await sut.processInfrastructureTree({ companyId });
    expect(infraTree).toEqual(infraTest);
  });

  it('should return a empty list of sector.', async () => {
    const { sut, loadInfrasctureReposisory } = makeSut()
    const companyId = 'any_group_id';
    const infraTree = await sut.processInfrastructureTree({ companyId });
    expect(infraTree.sectors).toStrictEqual([]);
  });
});