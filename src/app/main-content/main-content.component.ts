import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { CommonModule } from '@angular/common';
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { ProjectsComponent } from "./projects/projects.component";
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroSectionComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {


constructor(private translate: TranslateService) {
      this.translate.addLangs(['de', 'en']);
      this.translate.setDefaultLang('en');
      this,translate.use('en');
  }

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}