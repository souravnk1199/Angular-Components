import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewCointainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewCointainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewCointainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
