import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonTextComponent } from '../../../../shared/component/skeleton';

@Component({
  selector: 'jgh-monorepo-skeleton-loader',
  standalone: true,
  imports: [CommonModule, SkeletonTextComponent],
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent {}
