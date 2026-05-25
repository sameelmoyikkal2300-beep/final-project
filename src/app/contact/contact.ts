import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-contact',
  imports: [Sidebar],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
