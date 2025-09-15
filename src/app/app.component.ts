import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { ProjectsComponent } from "./main-content/projects/projects.component";
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { ColleaguesComponent } from './main-content/colleagues/colleagues.component';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectsComponent, TranslateModule, ColleaguesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private translate: TranslateService) {
      this.translate.addLangs(['de', 'en']);
      this.translate.setDefaultLang('en');
      this,translate.use('en');
  }

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
