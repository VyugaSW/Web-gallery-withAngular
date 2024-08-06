import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureComponent } from './picture/picture.component';
import { GalleryComponent } from './gallery/gallery.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PictureComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-gallery';
}
