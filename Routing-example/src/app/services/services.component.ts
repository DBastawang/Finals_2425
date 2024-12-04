import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  services = [
    { id: 1, name: 'Null', description: 'Null' },

  ];


  newService = { id: 0, name: '', description: '' };


  addService() {
    if (this.newService.id && this.newService.name && this.newService.description) {
      this.services.push({ ...this.newService });
      this.newService = { id: 0, name: '', description: '' };
    } else {
      alert('Please fill in all fields.');
    }
  }



  viewService(id: number) {
    alert(`Viewing details of Service ID: ${id}`);
  }
  editService(id: number) {
    alert(`Editing Service ID: ${id}`);
  }
  deleteService(id: number) {
    this.services = this.services.filter(service => service.id !== id);
    alert(`Deleted Service ID: ${id}`);
  }
}
