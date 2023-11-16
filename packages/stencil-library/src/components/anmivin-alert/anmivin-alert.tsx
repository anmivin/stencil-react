import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import { colorLuminance } from '../../utils/helpers';
import { IconPaths } from '../../utils/types';
@Component({
  tag: 'anmivin-alert',
  styleUrl: 'anmivin-alert.css',
  shadow: true,
})
export class AnmivinAlert {
  @Prop({ mutable: true, reflect: true })
  @Prop()
  isopen: boolean;
  @Prop() alerttitle: string;
  @Prop() alertcolor?: string;

  @Event() private closAlert: EventEmitter;

  defaultTimeout = 5000;

  private handleClose = () => {
    this.isopen = false;
    this.closAlert.emit();
  };

  onCloseAlert = () => {
    setTimeout(this.handleClose, this.defaultTimeout);
  };

  private getStyle() {
    return {
      backgroundColor: this.alertcolor,
      boxShadow: `10px 10px 20px ${colorLuminance(this.alertcolor, -0.5)}, -10px -10px 20px ${colorLuminance(this.alertcolor, 0.5)}`,
    };
  }
  render() {
    this.onCloseAlert();

    if (!this.isopen) {
      return null;
    }
    return (
      <div class="alert-wrapper" style={this.getStyle()}>
        <div class="alert-content">
          <anmivin-text variant="subtitle">{this.alerttitle}</anmivin-text>
          <anmivin-text variant="body">
            <slot />
          </anmivin-text>
        </div>
        <div class="alert-icon-button" onClick={this.handleClose}>
          <anmivin-icon path={IconPaths.CloseIcon}></anmivin-icon>
        </div>
      </div>
    );
  }
}
