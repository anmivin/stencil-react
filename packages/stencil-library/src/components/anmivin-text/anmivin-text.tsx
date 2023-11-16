import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'anmivin-text',
  styleUrl: 'anmivin-text.css',
  shadow: true,
})
export class AnmivinText {
  @Prop() color: string;
  @Prop() variant: 'title' | 'subtitle' | 'body';
  render() {
    return (
      <div class={`text ${this.variant}`}>
        <slot />
      </div>
    );
  }
}
