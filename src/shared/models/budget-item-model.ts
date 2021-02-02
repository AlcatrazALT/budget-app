type Nullable<T> = T | null;
export class BudgetItemModel {
  constructor(public description: string, public amount: number) {}
}