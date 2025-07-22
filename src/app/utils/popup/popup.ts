import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { PopupType } from '../../interfaces/popuptype';

@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.html',
  styleUrl: './popup.scss'
})
export class Popup {
  @Input() popType: PopupType = 'info';
  @Input() message: string = 'default message';
  @Input() isShowed: boolean = false; //isShowed e isShowedChange criam um two-way binding
  @Output() isShowedChange = new EventEmitter<boolean>();
 
  hiddenPopup() { //dá o controle de visibilidade ao elemento pai
    this.isShowed = false;
    this.isShowedChange.emit(this.isShowed);
    
  }


}