import { Area } from "./area";
import { Contribuyente } from "./contribuyente";

export class Expediente{
  idExpediente: number;
  asunto: string;
  area: Area = {} as Area;
  contribuyente: Contribuyente = {} as Contribuyente;
  costo: number;
}
