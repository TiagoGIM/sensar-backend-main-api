import { Sector } from "@/domain/entities";
import { SectorDTO } from "@/presentation/view-models/sector";

//class SectorMap extends Mapper<Vinyl> {
export class SectorMap {
  /*public static toDomain (raw: any): Vinyl {
      const vinylOrError = Vinyl.create({
        albumName: AlbumName.create(raw.album_name).getValue(),
        artistName: ArtistName.create(raw.artist_name).getValue(),
        tracks: raw.TrackList.map((t) => TrackMap.toDomain(t))
      }, new UniqueEntityID(raw.vinyl_id));
      return vinylOrError.isSuccess ? vinylOrError.getValue() : null;
    }
  
    public static toPersistence (vinyl: Vinyl): any {
      return {
        album_name: vinyl.albumName.value,
        artist_name: vinyl.artistName.value
      }
    }
  */
  public static toDomain(sector: SectorDTO): Sector {
    return {
      company_owner: sector.companyId,
      id: sector.id,
      name: sector.name
    }
  }
}