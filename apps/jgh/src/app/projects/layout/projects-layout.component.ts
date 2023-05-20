import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '@jgh-lib/ui/slider';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';

@Component({
  selector: 'jgh-monorepo-projects-layout',
  standalone: true,
  imports: [CommonModule, SliderComponent, NavbarComponent],
  templateUrl: './projects-layout.component.html',
  styleUrls: ['./projects-layout.component.scss'],
})
export default class ProjectsLayoutComponent {}
