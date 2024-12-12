import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-student-record',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './edit-student-record.component.html',
  styleUrls: ['./edit-student-record.component.css'],
})
export class EditStudentRecordComponent {
  @Input() student: any = null; // getsstudent data
  @Output() save = new EventEmitter<any>(); // the updated student
  @Output() cancel = new EventEmitter<void>(); // cancel event

  saveRecord() {
    this.save.emit(this.student); // updated student to parent
  }

  cancelEdit() {
    this.cancel.emit(); // sa parent (record class) i cancel
  }
}
