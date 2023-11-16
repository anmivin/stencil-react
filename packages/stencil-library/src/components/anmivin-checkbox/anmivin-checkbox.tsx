import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { IconPaths } from '../../utils/types';
import { colorLuminance } from '../../utils/helpers';
@Component({
  tag: 'anmivin-checkbox',
  styleUrl: 'anmivin-checkbox.css',
  shadow: true,
})
export class AnmivinCheckbox {
  @Prop() formlabel?: string;
  @Prop() label: string;
  @Prop() checkboxcolor?: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Event() inputValueChange: EventEmitter<{ value: boolean; label: string }>;

  onInputChangeValue(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    if (this.formlabel) this.inputValueChange.emit({ value: this.checked, label: this.formlabel });
  }
  private getStyle() {
    return {
      backgroundColor: this.checkboxcolor,
      boxShadow: `2px 2px 4px ${colorLuminance(this.checkboxcolor, -0.5)}, -2px -2px 4px ${colorLuminance(this.checkboxcolor, 0.5)}`,
    };
  }
  render() {
    return (
      <div>
        <input class="checkbox-input" id="checkbox-input" type="checkbox" onChange={this.onInputChangeValue.bind(this)} />
        <label class="checkbox" htmlFor="checkbox-input">
          <div style={this.getStyle()}>
            <anmivin-icon path={IconPaths.CheckIcon} size={16}></anmivin-icon>
          </div>
          <span>{this.label}</span>
        </label>
      </div>
    );
  }
}
