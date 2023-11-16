import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { colorLuminance } from '../../utils/helpers';
import { sizes, IconPaths } from '../../utils/types';
@Component({
  tag: 'anmivin-modal',
  styleUrl: 'anmivin-modal.css',
  shadow: true,
})
export class AnmivinModal {
  @Prop({ mutable: true, reflect: true })
  @Prop()
  isopen: boolean;
  @Prop() modaltitle: string;
  @Prop() modalcolor?: string;
  @Prop() buttons: string;
  @Prop() confirmText: string = 'confirm';
  @Prop() cancelText: string = 'cancel';

  @Event() private submitModal: EventEmitter;
  @Event() private closeModal: EventEmitter;

  private handleClose = () => {
    this.closeModal.emit();
  };

  private handleAction = () => {
    this.submitModal.emit();
  };

  private getStyle() {
    return {
      backgroundColor: this.modalcolor,
      boxShadow: `10px 10px 40px ${colorLuminance(this.modalcolor, -0.5)}, -10px -10px 40px ${colorLuminance(this.modalcolor, 0.5)}`,
    };
  }

  render() {
    if (!this.isopen) {
      return null;
    }
    return (
      <div>
        <div class="modal-wrapper" style={this.getStyle()}>
          <div class="modal-header">
            <anmivin-text variant="subtitle">{this.modaltitle}</anmivin-text>
            <div class="modal-icon-button" onClick={this.handleClose}>
              <anmivin-icon path={IconPaths.CloseIcon}></anmivin-icon>
            </div>
          </div>
          <div class="modal-content">
            <slot />
          </div>
          <div class="modal-footer">
            <anmivin-button size={sizes.Medium} variant="flat" onClick={this.handleClose}>
              {this.cancelText}
            </anmivin-button>
            <anmivin-button size={sizes.Medium} variant="flat" onClick={this.handleAction}>
              {this.confirmText}
            </anmivin-button>
          </div>
        </div>

        <div class="modal-backdrop" onClick={this.handleClose}></div>
      </div>
    );
  }
}
