import { Component, OnInit } from '@angular/core';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>()

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItemModel){
    this.budgetItems.push(newItem)
  }
}
