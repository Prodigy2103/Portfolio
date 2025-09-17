import { Component, EventEmitter, Output, Input } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
@Output() closeEvent = new EventEmitter<void>();

  @Input() currentProject: string = '';
  // ✅ New: Define the order of your projects
  projects: string[] = ['join', 'pepe', 'daBubble'];

  // ✅ New: Set the initial project index and name
  // currentProjectIndex: number = 0;
  // currentProject: string = this.projects[this.currentProjectIndex];
  
  constructor(public translate: TranslateService, private router: Router) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  // nextProject(): void {
  //   this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  //   this.currentProject = this.projects[this.currentProjectIndex];
  // }
  nextProject(): void {
    const currentIndex = this.projects.indexOf(this.currentProject);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % this.projects.length;
      this.currentProject = this.projects[nextIndex];
    }
  }

  skillIconsPepe = [
    { name: 'JavaScript', src: '/assets/Extras/icons/JS.png' },
    { name: 'HTML', src: '/assets/Extras/icons/HTML.png' },
    { name: 'CSS', src: '/assets/Extras/icons/CSS.png' }
  ];

  skillIconsJoin = [
    { name: 'CSS', src: '/assets/Extras/icons/CSS.png' },
    { name: 'HTML', src: '/assets/Extras/icons/HTML.png' },
    { name: 'Firebase', src: '/assets/Extras/icons/Firebase.png' },
    { name: 'Angular', src: '/assets/Extras/icons/Angular.png' },
    { name: 'TypeScript', src: '/assets/Extras/icons/TS.png' },
  ];

  skillIconsDaBubble = [
    { name: 'JavaScript', src: '/assets/Extras/icons/JS.png' },
    { name: 'HTML', src: '/assets/Extras/icons/HTML.png' },
    { name: 'CSS', src: '/assets/Extras/icons/CSS.png' }
  ];

  goBack(): void {
    this.closeEvent.emit();
  }
}
