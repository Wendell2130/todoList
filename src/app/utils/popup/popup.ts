import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { PopupType } from '../../interfaces/popuptype';

@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.html',
  styleUrl: './popup.scss'
})
export class Popup {
  @ViewChild('container') container!: ElementRef;
  constructor(private renderer:Renderer2) { }
  @Input() popType:PopupType = 'info'; 
  @Input() message: string = 'default message';
  @Input() isShowed: boolean = false;
 
 hiddenPopup() {
    this.isShowed = false;
   
  }
 
  
}