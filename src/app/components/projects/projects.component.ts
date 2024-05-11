import { Component } from '@angular/core';
import { Images } from '../../shared/types/image-url';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  Images = Images;

}
