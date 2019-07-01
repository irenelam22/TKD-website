import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  routes = [
    {
      link: '/about',
      title: 'About',
    },
    {
      link: '/schedule',
      title: 'Schedule',
    },
    {
      link: '/photo',
      title: 'Photo Gallery',
    },
    {
      link: '/faq',
      title: 'FAQ',
    },
    {
      link: '/contact',
      title: 'Contact',
    },
  ];

}
