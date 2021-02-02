import { Component, OnInit } from '@angular/core';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>()
  totalBudget = 0

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItemModel){
    this.budgetItems.push(newItem)
    this.totalBudget += newItem.amount
  }

  deleteItem(item: BudgetItemModel){
    let indexItem = this.budgetItems.indexOf(item)
    this.budgetItems.splice(indexItem, 1)
    this.totalBudget -= item.amount
  }

  updateBudget(updateBudgetEvent:UpdateEvent){
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.updateBudgetItems(updateBudgetEvent);

    // update the total budget
    this.totalBudget -= updateBudgetEvent.oldItem.amount
    this.totalBudget += updateBudgetEvent.newItem.amount
  }

  private updateBudgetItems(updateBudgetEvent: UpdateEvent) {
    let oldItemIndex = this.budgetItems.indexOf(updateBudgetEvent.oldItem)
    this.budgetItems[oldItemIndex] = updateBudgetEvent.newItem;
  }
}
