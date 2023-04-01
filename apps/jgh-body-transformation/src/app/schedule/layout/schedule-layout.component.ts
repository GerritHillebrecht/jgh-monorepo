import { Component, inject } from '@angular/core';
import { ScheduleService } from '../service/schedule.service';

@Component({
  selector: 'jgh-bt-schedule-layout',
  templateUrl: './schedule-layout.component.html',
  styleUrls: ['./schedule-layout.component.scss'],
})
export class ScheduleLayoutComponent {
  protected readonly scheduleService = inject(ScheduleService);
}
