export interface City {
  id: number,
  name: string,
  description: string,
  surface: number,
  population: number,
  postalCode: string,
  departmentId: number,
  department: string | null,
  touristAttractions: null,
  presidents: string | null,
  indigenousReservations: string | null,
  airports: string | null,
  radios: string | null
}
