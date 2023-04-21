import { Component, inject } from '@angular/core';
import { PricingService } from '../service/pricing.service';
import { Accordion } from '@jgh-lib/ui/design blocks/info-accordion-block/model/accordion.model';

@Component({
  selector: 'jgh-bt-pricing-layout',
  templateUrl: './pricing-layout.component.html',
  styleUrls: ['./pricing-layout.component.scss'],
})
export class PricingLayoutComponent {
  protected pricingService = inject(PricingService);
  elements: Accordion['elements'] = [
    {
      title: 'Deine Lieblingsinhalte auf einem einzigen Startbildschirm.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl.',
    },
    {
      title: 'Steuerung per Sprachbefehl.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl.',
    },
    {
      title: 'Erstklassiger Sound in jedem Raum.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl.',
    },
    {
      title:
        'Inhalte mit deinem kompatiblen Smartphone auf den großen Bildschirm streamen.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl.',
    },
    {
      title:
        'Deine schönsten Erinnerungen mit Google Fotos auf dem Fernseher ansehen.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Sed euismod, nunc vel lacinia ultricies, nisl nisl aliquet nisl, eget aliquet nisl nunc eget nisl.',
    },
  ];
  accordeons: Accordion[] = [
    {
      title: 'Alle Entertainment-Optionen an einem Ort.',
      subtitle: 'Organisation',
      rtl: false,
      colors: {
        background: '#F8E1D8',
        elements: '#F3D2C5',
      },
      image:
        'https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      elements: this.elements,
    },
    {
      title: 'Alle Entertainment-Optionen an einem Ort.',
      subtitle: 'Organisation',
      rtl: true,
      image:
        'https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      elements: this.elements,
    },
    {
      title: 'Alle Entertainment-Optionen an einem Ort.',
      subtitle: 'Organisation',
      rtl: false,
      image:
        'https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      elements: this.elements,
    },
  ];
}
