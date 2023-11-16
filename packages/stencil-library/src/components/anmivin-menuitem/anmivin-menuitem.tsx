import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'anmivin-menuitem',
  styleUrl: 'anmivin-menuitem.css',
  shadow: true,
})
export class AnmivinMenuitem {
  @Prop() text: string;
  @Event() action: EventEmitter;

  clickHandler = () => {
    this.action.emit();
  };

  render() {
    return (
      <div class="menu-item" onClick={() => this.clickHandler()}>
        {this.text}
      </div>
    );
  }
}
