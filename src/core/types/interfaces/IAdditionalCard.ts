export type IAdditional<
  Types extends (string | number | symbol), Item
> = {
  [key in Types]?: Item[]
}
