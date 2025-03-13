import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  @Input() message: string = 'You will be notified when the product goes on sale';
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter();

  close() {
    this.closeModal.emit();
  }
}
