import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BrNavigationService {
  constructor(private readonly router: Router) {}

  navigateTo(segment: string) {
    this.router.navigate(['app', 'bionic-reading', segment]);
  }

  get isBrowser() {
    return typeof window !== 'undefined';
  }

  get isServer() {
    return !this.isBrowser;
  }

  get isMobile() {
    if (this.isServer) {
      return false;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  get isDesktop() {
    if (this.isServer) {
      return false;
    }
    return !this.isMobile;
  }
}
