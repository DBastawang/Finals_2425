import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-right',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-right.component.html',
  styleUrls: ['./list-right.component.css'],
})
export class ListRightComponent {
  ListRightComponent = {
    id: 0,
    name: '',
    description: '',
    category: '',
    cost: 0,
  };

  saveService() {
    if (
      this.ListRightComponent.id &&
      this.ListRightComponent.name &&
      this.ListRightComponent.description &&
      this.ListRightComponent.category &&
      this.ListRightComponent.cost
    ) {
      alert('Details saved successfully!');
      console.log(this.ListRightComponent);
    } else {
      alert('Please fill in all fields.');
    }
  }

  cancelOperation() {
    if (confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
      this.ListRightComponent = {
        id: 0,
        name: '',
        description: '',
        category: '',
        cost: 0,
      };
    }
  }
}
