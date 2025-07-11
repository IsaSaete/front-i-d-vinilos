import type { Vinyl, VinylSendFormData } from "../../types";
import { mapVinylDtotoVinyl, mapVinylsDtoToVinyls } from "../dto/mapper";
import type { VinylDto } from "../dto/types";
import type {
  ResponseVinylDto,
  VinylClientStructure,
  VinylsCollectionData,
  VinylsDtoCollectionData,
} from "./types";

class VinylClient implements VinylClientStructure {
  private readonly apiUrl = import.meta.env.VITE_API_URL;

  public getVinyls = async (
    pageNumber?: number,
  ): Promise<VinylsCollectionData> => {
    const url = !pageNumber
      ? `${this.apiUrl}/vinyls`
      : `${this.apiUrl}/vinyls?page=${pageNumber}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching vinyls");
    }

    const { vinyls: vinylsDto, vinylsTotal } =
      (await response.json()) as VinylsDtoCollectionData;

    const vinyls = mapVinylsDtoToVinyls(vinylsDto);

    const vinylsCollectionData = {
      vinyls,
      vinylsTotal,
    };

    return vinylsCollectionData;
  };

  public toggleIsOwnedVinyl = async (vinylId: string): Promise<Vinyl> => {
    const response = await fetch(
      `${this.apiUrl}/vinyls/toggle-owned/${vinylId}`,
      { method: "PATCH", headers: { "Content-Type": "application/json" } },
    );

    if (!response.ok) {
      throw new Error("Failed to change the isOwned property of vinyl");
    }

    const { vinyl } = (await response.json()) as ResponseVinylDto;

    const vinylUpdate = mapVinylDtotoVinyl(vinyl);

    return vinylUpdate;
  };

  public deleteVinyl = async (vinylId: string): Promise<Vinyl> => {
    const response = await fetch(`${this.apiUrl}/vinyls/${vinylId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error deleting vinyl");
    }

    const { vinyl } = (await response.json()) as ResponseVinylDto;

    const vinylDelete = mapVinylDtotoVinyl(vinyl);

    return vinylDelete;
  };

  public addVinyl = async (
    vinylFormData: VinylSendFormData,
  ): Promise<Vinyl> => {
    const response = await fetch(`${this.apiUrl}/vinyls`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vinyl: vinylFormData }),
    });

    if (!response.ok) {
      throw new Error("Error adding new vinyl");
    }
    const { vinyl } = (await response.json()) as ResponseVinylDto;

    const newVinyl = mapVinylDtotoVinyl(vinyl);

    return newVinyl;
  };

  public getVinylById = async (vinylId: string): Promise<Vinyl> => {
    const response = await fetch(`${this.apiUrl}/vinyls/${vinylId}`);

    if (!response.ok) {
      throw new Error("Error getting this vinyl");
    }

    const { vinyl: vinylData } = (await response.json()) as ResponseVinylDto;

    const vinyl = mapVinylDtotoVinyl(vinylData);

    return vinyl;
  };

  public updateVinyl = async (
    vinylId: string,
    vinylToUpdate: VinylDto,
  ): Promise<Vinyl> => {
    const response = await fetch(`${this.apiUrl}/vinyls/${vinylId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vinyl: vinylToUpdate }),
    });

    if (!response.ok) {
      throw new Error("Error modifying this vinyl");
    }

    const { vinyl: updatedVinyl } = (await response.json()) as ResponseVinylDto;

    const vinyl = mapVinylDtotoVinyl(updatedVinyl);

    return vinyl;
  };
}

export default VinylClient;
