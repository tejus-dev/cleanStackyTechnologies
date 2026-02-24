import { Component } from '@angular/core';
import { AdminTableComponent } from '../../components/admin-table/admin-table.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [AdminTableComponent],
  templateUrl: './admin.page.html',
  styleUrl: './admin.page.scss',
})
export class AdminPage {}
