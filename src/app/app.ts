import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Navbar } from "./navbar/navbar";

import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
