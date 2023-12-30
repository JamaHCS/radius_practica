import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Table } from 'primeng/table';
import { ProductCategory } from 'src/app/core/models/products/DTO.model';
import { ProductService } from 'src/app/core/services/products/product.service';
import { globals } from 'src/app/utils/global/globals';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
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
    this.ProductService.categories().subscribe({
      next: (res) => {
        this.categories = res;
        this.loading = false;
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
