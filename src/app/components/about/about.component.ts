import { Component } from '@angular/core';
import { Images } from '../../shared/types/image-url';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html'
})
export class AboutComponent {

  Images = Images;

}
