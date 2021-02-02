import { Component, Input, OnInit } from '@angular/core';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItemModel = new BudgetItemModel('', 0)

  constructor() { }

  ngOnInit(): void {
  }

}
