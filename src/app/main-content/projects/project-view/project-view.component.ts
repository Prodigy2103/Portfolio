import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() closeEvent = new EventEmitter<void>()
  
  constructor(public translate: TranslateService, private router: Router) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  skillIcons = [
    { name: 'JavaScript', src: '/assets/Extras/icons/JS.png' },
    { name: 'HTML', src: '/assets/Extras/icons/HTML.png' },
    { name: 'CSS', src: '/assets/Extras/icons/CSS.png' }
  ];

  goBack(): void {
    this.closeEvent.emit();;
  }
}
