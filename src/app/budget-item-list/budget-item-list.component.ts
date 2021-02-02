import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>()
  @Output() delete: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(item: BudgetItemModel){
    this.delete.emit(item)
  }

}
