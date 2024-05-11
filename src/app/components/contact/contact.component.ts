import { Component } from '@angular/core';
import { Images } from '../../shared/types/image-url';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  Images = Images;

}
