import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectViewComponent } from "./project-view/project-view.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectViewComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showProjectView: boolean = false;
  selectedProject: string = '';

  // toggleProjectView(): void {
  //   this.showProjectView = !this.showProjectView;
  //   if (this.showProjectView) {
  //     document.body.classList.add('no-scroll');
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //   }
  // }
  toggleProjectView(projectId: string): void {
    this.selectedProject = projectId; // Setzt die ID für das Overlay
    this.showProjectView = true;
    document.body.classList.add('no-scroll');
  }

  // Wichtig: Beim Verlassen der Komponente den Scrollbalken wieder aktivieren
  closeProjectView(): void {
    this.showProjectView = false;
    document.body.classList.remove('no-scroll');
  }
}