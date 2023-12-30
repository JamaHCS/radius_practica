import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Product,
  ProductCategory,
} from 'src/app/core/models/products/DTO.model';
import { ProductService } from 'src/app/core/services/products/product.service';
import { globals } from 'src/app/utils/global/globals';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  public products: Product[] = [];
  public categories: ProductCategory[] = [];
  public loading: boolean = true;
  public activityValues: number[] = [0, 100];
  public rowGroupMetadata: any;
  public isExpanded: boolean = false;
  public es: any;

  @Output() onSend: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('filter') filter!: ElementRef;

  constructor(private ProductService: ProductService) {
    this.es = globals.translation;
  }

  ngOnInit(): void {
    this.ProductService.productsWithCategories().subscribe({
      next: (res) => {
        this.products = res;
        this.loading = false;
      },
    });

    this.ProductService.categories().subscribe({
      next: (res) => {
        this.categories = res;
      },
    });
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  sending() {
    this.onSend.emit();
  }
}
