import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItemModel = new BudgetItemModel('', 0)

  //any - because we don't send any data, parent already knows that item should be deleted
  @Output() deleteButtonClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(){
    this.deleteButtonClick.emit()
  }
}
