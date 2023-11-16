import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'anmivin-tooltip',
  styleUrl: 'anmivin-tooltip.css',
  shadow: true,
})
export class AnmivinTooltip {
  @Prop() text: string;
  @Prop() position: 'top' | 'right' | 'bottom' | 'left';
  @Prop() arrow: boolean;

  render() {
    return (
      <div class="tooltip-wrapper">
        <span class={`tooltip-text ${this.arrow && 'arrow'} ${this.position}`}>{this.text}</span>
        <slot></slot>
      </div>
    );
  }
}
