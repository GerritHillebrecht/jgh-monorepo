import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products/1',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./feature/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
];
