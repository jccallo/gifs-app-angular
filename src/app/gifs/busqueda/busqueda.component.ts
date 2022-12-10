import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  search() {
    const input = this.txtSearch.nativeElement;
    console.log(input.value);
    input.value = '';
  }
}
