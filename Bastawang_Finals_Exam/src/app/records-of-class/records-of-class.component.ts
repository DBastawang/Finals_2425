import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-records-of-class',
  imports: [NgFor,CommonModule],
  standalone: true,
  templateUrl: './records-of-class.component.html',
  styleUrls: ['./records-of-class.component.css'],
})
export class RecordsOfClassComponent {
  students = [
    { id: 20210016, name: 'Alice Smith', activity: 'Math Quiz' },
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

  viewDetails(student: any) {
    this.selectedStudent = student;
  }

  editRecord(student: any) {
    alert(`Edit record for ${student.name}`);
  }

  closeModal() {
    this.selectedStudent = null;
  }
}
