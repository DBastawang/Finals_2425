import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  // Service list, initializing with one sample service.
  services = [
    { id: 1, name: 'Haircut', description: 'Basic haircut service' }
  ];

  // newService model to bind to the form
  newService = { id: 0, name: '', description: '' };

  // Method to add a new service to the list
  addService() {
    if (this.newService.name && this.newService.description) {
      // Assign an auto-generated ID based on the length of the services array
      this.newService.id = this.services.length + 1; // For simplicity, incrementing ID

      // Push new service to services array
      this.services.push({ ...this.newService });

      // Clear the form fields after adding
      this.newService = { id: 0, name: '', description: '' };
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Method to view service details
  viewService(id: number) {
    const service = this.services.find(s => s.id === id);
    if (service) {
      alert(`Viewing details of Service: ${service.name}`);
    }
  }

  // Method to edit a service (you can expand this functionality later)
  editService(id: number) {
    const service = this.services.find(s => s.id === id);
    if (service) {
      this.newService = { ...service };  // Populate form with existing service data
    }
  }

  // Method to delete a service
  deleteService(id: number) {
    this.services = this.services.filter(service => service.id !== id);
    alert(`Deleted Service ID: ${id}`);
  }
}
