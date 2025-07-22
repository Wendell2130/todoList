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
  @Input() isShowed: boolean = false;
  @Output() closePopup = new EventEmitter<void>();
 
  hiddenPopup() {
    this.closePopup.emit();
  }


}