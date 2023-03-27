import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  array: string[] = [];

  constructor(private gifsService: GifsService) {
    //este private es una Injeccion
  }

  arrayGifs() {
    return this.array = [...this.gifsService.historial];
  }

  get historial() {
    return this.gifsService.historial;
  }


}
