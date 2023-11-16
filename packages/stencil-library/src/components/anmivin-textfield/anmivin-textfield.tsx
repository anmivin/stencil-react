import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { colorLuminance } from '../../utils/helpers';
import { sizes, ButtonSizes } from '../../utils/types';

@Component({
  tag: 'anmivin-textfield',
  styleUrl: 'anmivin-textfield.css',
  shadow: true,
})
export class AnmivinTextfield {
  @Prop() label: string;
  @Prop() size?: sizes;
  @Prop() fieldcolor?: string;
  @Prop() formlabel?: string;
  @Prop({ reflect: true, mutable: true }) value: string;

  @Event() inputValueChange: EventEmitter<{ value: string; label: string }>;

  onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    if (this.formlabel) this.inputValueChange.emit({ value: this.value, label: this.formlabel });
  }

  private currentSize = ButtonSizes[this.size ?? sizes.Large];
  private height = this.currentSize.height;
  private getStyle() {
    return {
      height: `${this.height}px`,
      backgroundColor: this.fieldcolor,
      borderRadius: `${this.currentSize.radius}px`,
      padding: `0 ${this.currentSize.padding}px`,
      boxShadow: `inset ${this.height / 20}px ${this.height / 20}px ${this.height / 10}px ${colorLuminance(this.fieldcolor, -0.5)}, inset -${this.height / 20}px -${
        this.height / 20
      }px  ${this.height / 10}px ${colorLuminance(this.fieldcolor, 0.5)}`,
    };
  }
  render() {
    return (
      <div class="textfield-wrapper">
        <span>{this.label}</span>
        <input type="text" style={this.getStyle()} value={this.value} onBlur={this.onInputChangeValue.bind(this)} />
      </div>
    );
  }
}
