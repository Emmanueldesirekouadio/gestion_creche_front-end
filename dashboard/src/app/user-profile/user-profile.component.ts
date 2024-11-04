import { Component, OnInit } from '@angular/core';
import { BaseService } from 'app/core/services/base.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users: any;
  newUser: any = {};
  showAddUserForm: boolean = false;
  showEditUserForm: boolean = false;
  selectedUser: any = {}; // Utilisateur sélectionné pour modification

  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.baseService.getData().subscribe((data) => {
      this.users = data;
    });
  }

  toggleAddUserForm(): void {
    this.showAddUserForm = !this.showAddUserForm;
  }

  addUser(): void {
    this.baseService.postData(this.newUser).subscribe((response) => {
      this.users.push(response);
      this.newUser = {};
      this.showAddUserForm = false;
    });
  }

  editUser(user: any): void {
    this.selectedUser = { ...user }; // Clone de l'utilisateur pour éviter la modification directe
    this.showEditUserForm = true;
  }

  updateUser(): void {
    this.baseService.updateData(this.selectedUser.id, this.selectedUser).subscribe(() => {
      const index = this.users.findIndex((u: any) => u.id === this.selectedUser.id);
      this.users[index] = { ...this.selectedUser }; // Mettre à jour l'utilisateur dans la liste
      this.showEditUserForm = false;
      this.selectedUser = {};
    });
  }

  deleteUser(user: any): void {
    this.baseService.deleteData(user.id).subscribe(() => {
      this.users = this.users.filter((u: any) => u.id !== user.id); // Supprimer l'utilisateur de la liste
    });
  }

  getRoleName(roleId: number): string {
    const roles: { [key: number]: string } = {
      1: 'Admin',
      2: 'Utilisateur',
      3: 'Superviseur',
    };
    return roles[roleId] || 'Rôle inconnu';
  }
}
