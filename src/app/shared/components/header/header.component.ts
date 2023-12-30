import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public itemsHeader: MenuItem[] = [];
  public visible: boolean = false;

  @ViewChild('menu') menu: Menu;

  constructor(private router: Router) {}

  ngOnInit(): void {

    
        this.itemsHeader = [
          {
            label: 'Productos',
            icon: 'fas fa-list',
            routerLink: 'products'
          },
        ];
  }


}
