import { IAgeRestrictions } from '../interfaces/IAgeRestrictions';

export interface IItems extends IAgeRestrictions {
  readonly name: string
  readonly status: string
  readonly statuses: string[]
}
