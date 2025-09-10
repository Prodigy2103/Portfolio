import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { HeroSectionComponent } from "./main-content/hero-section/hero-section.component"
import { AboutMeComponent } from "./main-content/about-me/about-me.component"


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroSectionComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
