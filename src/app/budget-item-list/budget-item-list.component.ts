import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItemModel } from 'src/shared/models/budget-item-model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItemModel[]
  @Output() delete: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(item: BudgetItemModel){
    this.delete.emit(item)
  }

  editItem(item: BudgetItemModel){
    //display edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    dialogRef.afterClosed().subscribe(updatedItem => {
      if(updatedItem){
        //replace the item with the updated item from the form
        this.budgetItems[this.budgetItems.indexOf(item)] = updatedItem
      }
    })
  }

}
