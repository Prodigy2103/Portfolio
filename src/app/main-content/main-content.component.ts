import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroSectionComponent, AboutMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
