import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  graySkillIcons = [
    { name: 'HTML', src: '/assets/Extras/iconsGray/HTMLGray.png' },
    { name: 'CSS', src: '/assets/Extras/iconsGray/CSSGray.png' },
    { name: 'JavaScript', src: '/assets/Extras/iconsGray/JSGray.png' },
    { name: 'TypeScript', src: '/assets/Extras/iconsGray/TSGray.png' },
    { name: 'Angular', src: '/assets/Extras/iconsGray/AngularGray.png' },
    { name: 'Firebase', src: '/assets/Extras/iconsGray/FirebaseGray.png' },
    { name: 'GitHub', src: '/assets/Extras/iconsGray/GitGray.png' },
    { name: 'Rest-API', src: '/assets/Extras/iconsGray/APIGray.png' },
    { name: 'Scrum', src: '/assets/Extras/iconsGray/ScrumGray.png' },
    { name: 'Material Design', src: '/assets/Extras/iconsGray/MaterialDesignGray.png' }
  ];

  skillIcons = [
    { name: 'HTML', src: '/assets/Extras/icons/HTML.png' },
    { name: 'CSS', src: '/assets/Extras/icons/CSS.png' },
    { name: 'JavaScript', src: '/assets/Extras/icons/JS.png' },
    { name: 'TypeScript', src: '/assets/Extras/icons/TS.png' },
    { name: 'Angular', src: '/assets/Extras/icons/Angular.png' },
    { name: 'Firebase', src: '/assets/Extras/icons/Firebase.png' },
    { name: 'GitHub', src: '/assets/Extras/icons/Git.png' },
    { name: 'Rest-API', src: '/assets/Extras/icons/API.png' },
    { name: 'Scrum', src: '/assets/Extras/icons/Scrum.png' },
    { name: 'Material Design', src: '/assets/Extras/icons/MaterialDesign.png' }
  ];
}
