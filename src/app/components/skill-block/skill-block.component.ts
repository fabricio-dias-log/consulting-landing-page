import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'skill-block',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './skill-block.component.html',
  styleUrl: './skill-block.component.scss'
})
export class SkillBlockComponent {
  @Input("path") pathImage: string = "";
  @Input("title") title: string = "";
  @Input("text") text: string = "";
}
