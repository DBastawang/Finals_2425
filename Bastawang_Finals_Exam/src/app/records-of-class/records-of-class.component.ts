import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditStudentRecordComponent } from '../edit-student-record/edit-student-record.component';

@Component({
  selector: 'app-records-of-class',
  imports: [CommonModule, EditStudentRecordComponent],
  standalone: true,
  templateUrl: './records-of-class.component.html',
  styleUrls: ['./records-of-class.component.css'],
})
export class RecordsOfClassComponent {
  students = [
    { id: 20210016, name: 'Alice Smith', activity: 'Math Quiz', address:" " },
    { id: 20212001, name: 'Bob Johnson', activity: 'Science Project' },
    { id: 20237873, name: 'Charlie Brown', activity: 'History Essay' },
    { id: 20236844, name: 'Diana Prince', activity: 'Art Assignment' },
    { id: 20240215, name: 'Edward Jones', activity: 'Programming Exercise' },
    { id: 20247816, name: 'Fiona Davis', activity: 'Physics Lab' },
  ];

  currentPage = 1;
  itemsPerPage = 3;
  selectedStudent: any = null;

  get paginatedStudents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.students.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.students.length / this.itemsPerPage);
  }

  get pages() {
    return Array(this.totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  editRecord(student: any) {
    this.selectedStudent = { ...student };
  }

  saveUpdatedStudent(updatedStudent: any) {
    const index = this.students.findIndex((s) => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
    this.selectedStudent = null;
  }

  cancelEdit() {
    this.selectedStudent = null;
  }
}
