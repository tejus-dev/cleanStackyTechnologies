import { Component } from '@angular/core';
import { AccessRequestFormComponent } from '../../components/access-request-form/access-request-form.component';

@Component({
  selector: 'app-request-access-page',
  standalone: true,
  imports: [AccessRequestFormComponent],
  templateUrl: './request-access.page.html',
  styleUrl: './request-access.page.scss',
})
export class RequestAccessPage {}
