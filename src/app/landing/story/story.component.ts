import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
