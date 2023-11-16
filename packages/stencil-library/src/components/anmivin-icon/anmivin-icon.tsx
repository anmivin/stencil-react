import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'anmivin-icon',
  shadow: true,
})
export class AnmivinIcon {
  @Prop() path: string;
  @Prop({ reflect: true }) size?: number = 24;
  @Prop() fill?: string = 'transparent';
  @Prop() stroke?: string = '#000000';

  render() {
    return (
      <svg width={this.size} height={this.size} viewBox="0 0 24 24" fill={this.fill} xmlns="http://www.w3.org/2000/svg">
        <path d={this.path} stroke={this.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  }
}
