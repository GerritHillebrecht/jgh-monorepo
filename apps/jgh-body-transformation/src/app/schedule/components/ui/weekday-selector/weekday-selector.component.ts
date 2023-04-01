import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../../service/schedule.service';

@Component({
  selector: 'jgh-bt-weekday-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekday-selector.component.html',
  styleUrls: ['./weekday-selector.component.scss'],
})
export class WeekdaySelectorComponent {
  protected readonly scheduleService = inject(ScheduleService);
}
