import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItemModel
  @Output() formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  isNewItem:boolean

  constructor() { }

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false
    } else{
      this.isNewItem = true
      this.item = new BudgetItemModel('', 0)
    }
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value)
    form.reset()
  }

}
