import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrFormService } from '../../service';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'jgh-monorepo-br-reader',
  standalone: true,
  imports: [CommonModule, SkeletonLoaderComponent],
  templateUrl: './br-reader.component.html',
  styleUrls: ['./br-reader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrReaderComponent {
  @Input()
  textElements: string[] | null | undefined;

  constructor(protected readonly form: BrFormService) {}
}
