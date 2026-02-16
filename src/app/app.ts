import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UiEffectsService } from './core/services/ui-effects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet],
})
export class App implements AfterViewInit, OnDestroy {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly uiEffectsService: UiEffectsService
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.initializeUiEffects();
  }

  onRouteActivate(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.initializeUiEffects();
  }

  ngOnDestroy(): void {
    this.uiEffectsService.destroy();
  }

  private initializeUiEffects(): void {
    // Run after route component has rendered into the outlet.
    requestAnimationFrame(() => this.uiEffectsService.initialize());
  }
}
