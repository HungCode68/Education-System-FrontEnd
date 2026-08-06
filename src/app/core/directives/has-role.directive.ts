import { Directive, Input, TemplateRef, ViewContainerRef, inject, effect } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[hasRole], [hasAnyRole]',
  standalone: true
})
export class HasRoleDirective {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);

  private hasView = false;
  private roleInput: string | string[] = [];
  private mode: 'single' | 'any' = 'single';

  @Input() set hasRole(val: string | string[]) {
    this.roleInput = val;
    this.mode = Array.isArray(val) ? 'any' : 'single';
    this.updateView();
  }

  @Input() set hasAnyRole(val: string[]) {
    this.roleInput = val;
    this.mode = 'any';
    this.updateView();
  }

  constructor() {
    // Automatically re-evaluate when authState Signal changes in AuthService
    effect(() => {
      this.authService.authState();
      this.updateView();
    });
  }

  private updateView() {
    const isAuthorized = this.checkAuthorization();

    if (isAuthorized && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isAuthorized && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  private checkAuthorization(): boolean {
    if (!this.roleInput || (Array.isArray(this.roleInput) && this.roleInput.length === 0)) {
      return true;
    }

    if (this.mode === 'single' && typeof this.roleInput === 'string') {
      return this.authService.hasRole(this.roleInput);
    } else if (this.mode === 'any' && Array.isArray(this.roleInput)) {
      return this.authService.hasAnyRole(this.roleInput);
    }

    return false;
  }
}
