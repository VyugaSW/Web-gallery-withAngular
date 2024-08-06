import { Component, Input, OnInit } from '@angular/core';
import { Picture, PicturesDataService } from '../pictures-data.service';
import { CommonModule, DatePipe } from '@angular/common';
import { PictureComponent } from '../picture/picture.component';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, DatePipe, PictureComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  pictures: Picture[] = [];
  clicked: {id: number, display: boolean} = {id: 0, display: false}
  constructor(private pictureDataService: PicturesDataService){}

  ngOnInit(): void {
    this.pictures = this.pictureDataService.getAll();
  }

  public displayPicture(id: number, change: boolean = true): void{
    if(id == this.clicked.id && change){
      this.clicked.id = 0;
      this.clicked.display = false;
    }
    else if(id != 0){
      this.clicked.id = id;
      this.clicked.display = true;
    }
  }

  public displayPicturesByAuthor(): Picture[]{
    return this.pictureDataService.getPicturesByAuthor(this.pictureDataService.getPictureById(this.clicked.id).author);
  }
}
