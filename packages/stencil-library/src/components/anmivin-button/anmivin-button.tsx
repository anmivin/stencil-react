import { Component, Prop, h } from '@stencil/core';
import { colorLuminance, getTextColor } from '../../utils/helpers';
import { sizes, ButtonSizes } from '../../utils/types';
@Component({
  tag: 'anmivin-button',
  styleUrl: 'anmivin-button.css',
  shadow: true,
})
export class AnmivinButton {
  @Prop() buttoncolor?: string;
  @Prop() variant?: 'pressed' | 'flat';
  @Prop() size?: sizes;
  @Prop() type?: string;

  private currentSize = ButtonSizes[this.size ?? sizes.Large];
  private height = this.currentSize.height;

  private getStyle() {
    return {
      height: `${this.height}px`,
      backgroundColor: this.buttoncolor,
      borderRadius: `${this.currentSize.radius}px`,
      border: 'none',
      color: `${getTextColor(this.buttoncolor)}`,
      padding: `0 ${this.currentSize.padding}px`,
      boxShadow: `${this.variant === 'pressed' ? 'inset ' : ''}${this.height / 20}px ${this.height / 20}px ${this.height / 10}px ${colorLuminance(this.buttoncolor, -0.5)}, ${
        this.variant === 'pressed' ? 'inset ' : ''
      }-${this.height / 20}px -${this.height / 20}px  ${this.height / 10}px ${colorLuminance(this.buttoncolor, 0.5)}`,
    };
  }

  render() {
    return (
      <button class="button-content" style={this.getStyle()}>
        <slot />
      </button>
    );
  }
}
