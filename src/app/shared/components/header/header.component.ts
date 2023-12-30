import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

/**
 * Componente de encabezado de la aplicación.
 * @Component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  /**
   * Elementos del menú del encabezado.
   * @type {MenuItem[]}
   */
  public itemsHeader: MenuItem[] = [];

  /**
   * Indica la visibilidad del menú.
   * @type {boolean}
   */
  public visible: boolean = false;

  /**
   * Referencia al elemento del menú.
   * @type {Menu}
   */
  @ViewChild('menu') menu: Menu;

  constructor(private router: Router) {}

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    // Configuración de elementos del menú del encabezado
    this.itemsHeader = [
      {
        label: 'Productos',
        items: [
          {
            label: 'Productos',
            routerLink: '/home/products',
          },
          {
            label: 'Categorías',
            routerLink: '/home/products/categories',
          },
        ],
      },
    ];
  }
}
