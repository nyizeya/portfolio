import { Component } from '@angular/core';
import { Images } from '../../shared/types/image-url';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  Images = Images;

}
