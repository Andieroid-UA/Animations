import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
/*------Red Cube--------------------------------------*/
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
/*------Shrinking Cube---------------------------------*/
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(100px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => nromal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
      // transition('shrunken <=> *', animate(500, style({
      //   borderRadius: '50px'
      // }))), // no transition
    ]),
/*-------List Animations------------------------------------*/
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *',
        [
          style({
            opacity: 0,
            transform: 'translateX(-100px)'
          }),
          animate(300)
        ]),
      transition('* => void',
        [
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ]),
    ]),
/*-------List Animations #2------------------------------------*/
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void',
        [
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ]),
    ]),
  ]
})

export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
      this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrink() {
      this.wildState = 'shrunken';
    }

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

}
