import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Picture, PicturesDataService } from '../pictures-data.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})

export class PictureComponent implements OnChanges {
  picture: Picture =  {id: 0, path: '', name: '', year: new Date(), author: '', width: 0, height: 0, location: ''}
  @Input() id: number = 0;
  @Input() display: boolean = false;

  constructor(private pictureDataService: PicturesDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['id'])
      this.id = changes['id'].currentValue;
    if(changes['display'])
      this.display = changes['display'].currentValue;

    this.id != 0 ? this.picture = this.pictureDataService.getPictureById(this.id) : null;
  }
}
