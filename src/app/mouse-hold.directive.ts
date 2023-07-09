import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from "@angular/core";
import {
  catchError, concatMap,
  of,
  Subject,
  Subscription,
  timeout,
} from "rxjs";

@Directive({
  selector: '[appMouseHold]'
})
export class MouseHoldDirective implements OnInit, OnDestroy {

  private readonly _stop = new Subject<string>();
  private readonly _start = new Subject<void>();
  private subscription!: Subscription;

  @Output() mousehold = new EventEmitter<any>();
  ngOnInit() {
    this.subscription = this._start.pipe(concatMap(() => this._stop.pipe(timeout(200), catchError(error => of(`error`))))).subscribe((val: any) => this.mousehold.emit(val));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener("mousedown", ["$event"])
  onMouseDown($event: { button: number; }) {
    if ($event.button === 0) {
      this._start.next();
    }
  }

  @HostListener("mouseup")
  onMouseUp() {
    this._stop.next('click');
  }

}
