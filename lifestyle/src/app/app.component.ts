import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges,
  ViewChild,
  Input
} from '@angular/core';

@Component({
  selector: 'on-changes',
  template: `
  <div class="hero">
    <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
  </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})
export class OnChangesComponent implements OnChanges {
  @Input() name: string;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
OnInit,DoCheck,OnDestroy,AfterContentInit,
AfterContentChecked,AfterViewChecked,AfterViewInit{
  title = 'Inspect console for angular lifecycle';
  name:string;
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnInit(){
    console.log("ngOnInit");
  }
}
