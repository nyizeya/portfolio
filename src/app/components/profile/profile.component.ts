import { Component } from '@angular/core';
import { Images } from '../../shared/types/image-url';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  Images = Images;

}
