import { ICountry } from 'app/shared/model/country.model';

export interface ILocation {
  id?: number;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  locationImageContentType?: string;
  locationImage?: any;
  country?: ICountry;
}

export class Location implements ILocation {
  constructor(
    public id?: number,
    public streetAddress?: string,
    public postalCode?: string,
    public city?: string,
    public stateProvince?: string,
    public locationImageContentType?: string,
    public locationImage?: any,
    public country?: ICountry
  ) {}
}
