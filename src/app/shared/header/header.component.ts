import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(public translate: TranslateService) {
      this.translate.addLangs(['de', 'en']);
      this.translate.setDefaultLang('en');
      this,translate.use('en');
  }

  useLanguage(language: string): void {
      this.translate.use(language);
  }

}
