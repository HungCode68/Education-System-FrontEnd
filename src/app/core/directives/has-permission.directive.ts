import { Directive, Input, TemplateRef, ViewContainerRef, inject, effect } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[hasPermission], [hasAnyPermission], [hasAllPermissions]',
  standalone: true
})
export class HasPermissionDirective {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);

  private hasView = false;
  private permissionInput: string | string[] = [];
  private mode: 'single' | 'any' | 'all' = 'single';

  @Input() set hasPermission(val: string | string[]) {
    this.permissionInput = val;
    this.mode = Array.isArray(val) ? 'any' : 'single';
    this.updateView();
  }

  @Input() set hasAnyPermission(val: string[]) {
    this.permissionInput = val;
    this.mode = 'any';
    this.updateView();
  }

  @Input() set hasAllPermissions(val: string[]) {
    this.permissionInput = val;
    this.mode = 'all';
    this.updateView();
  }

  constructor() {
    // Automatically re-evaluate when authState Signal changes in AuthService
    effect(() => {
      // Access authState signal to register dependency
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
    if (!this.permissionInput || (Array.isArray(this.permissionInput) && this.permissionInput.length === 0)) {
      return true;
    }

    if (this.mode === 'single' && typeof this.permissionInput === 'string') {
      return this.authService.hasPermission(this.permissionInput);
    } else if (this.mode === 'any' && Array.isArray(this.permissionInput)) {
      return this.authService.hasAnyPermission(this.permissionInput);
    } else if (this.mode === 'all' && Array.isArray(this.permissionInput)) {
      return this.authService.hasAllPermissions(this.permissionInput);
    }

    return false;
  }
}
