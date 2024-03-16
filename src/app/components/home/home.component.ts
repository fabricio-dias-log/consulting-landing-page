import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {BtnPrimaryComponent} from "../btn-primary/btn-primary.component";
import {NewsletterFormComponent} from "../newsletter-form/newsletter-form.component";
import {SkillBlockComponent} from "../skill-block/skill-block.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsletterFormComponent,
    SkillBlockComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
