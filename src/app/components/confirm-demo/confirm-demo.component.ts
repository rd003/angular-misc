import { Component, OnDestroy } from '@angular/core';
import { AppearanceAnimation, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';
import { of, tap,catchError, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-confirm-demo',
  template: `
    <button (click)="deleteSomething()" type="button" style="cursor: pointer;">Delete</button>
  
    <p>{{msg}}</p>
    
 `,
  styles: [
  ]
})
export class ConfirmDemoComponent implements OnDestroy {
  msg = "";
  destroy$: Subject<boolean> = new Subject<boolean>();

  deleteSomething() {
    // const shouldDelete = window.confirm("Are you sure to delete?");
    // if (shouldDelete) {
    //   this.msg = "Deleted successfully";
    // }

    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Cofirm deletion!!');
    newConfirmBox.setMessage('Are you sure to delete this item??');

    // Choose layout color type
    newConfirmBox.setConfig({
    layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
    animationIn: AppearanceAnimation.BOUNCE_IN, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
    animationOut: DisappearanceAnimation.BOUNCE_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
    buttonPosition: 'right', // optional 
    });

    newConfirmBox.setButtonLabels('YES', 'NO');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$()
      .pipe(
        tap(value => {
          if (value.success) {
            this.msg = "Deleted successfully";
          }
        }),
        catchError(error => {
          console.log("error in dialog box");
          return of(null);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
