import { Component, h, Prop, State } from '@stencil/core';

import { colorLuminance } from '../../utils/helpers';
import { IconPaths } from '../../utils/types';

@Component({
  tag: 'anmivin-contextmenu',
  styleUrl: 'anmivin-contextmenu.css',
  shadow: true,
})
export class AnmivinContextMenu {
  @Prop({ mutable: true, reflect: true })
  @Prop()
  isopen: boolean;
  @Prop() modalcolor?: string;
  @Prop() menuitems: string | Array<{ title: string; action: () => void | string }>;
  @State() _menuitems: Array<{ title: string; action: () => void }>;

  itemsDataWatcher = (items: string | Array<{ title: string; action: () => void | string }>) => {
    if (typeof items !== 'string') this._menuitems = items;
    else this._menuitems = JSON.parse(items).map(item => ({ ...item, action: new Function(item.action) }));
  };

  componentWillLoad() {
    this.itemsDataWatcher(this.menuitems);
  }

  private handleClose = () => {
    this.isopen = false;
  };

  private handleOpen = () => {
    this.isopen = true;
  };

  private getStyle() {
    return {
      backgroundColor: this.modalcolor,
      boxShadow: `10px 10px 40px ${colorLuminance(this.modalcolor, -0.5)}, -10px -10px 40px ${colorLuminance(this.modalcolor, 0.5)}`,
    };
  }
  render() {
    return (
      <div>
        <div class="menu-icon-button" onClick={this.handleOpen}>
          <anmivin-icon path={IconPaths.DotsIcon}></anmivin-icon>
        </div>
        <div class={`menu-wrapper ${this.isopen && 'isopen'}`} style={this.getStyle()}>
          <div class="menu-content">
            {this._menuitems.map(item => (
              <anmivin-menuitem text={item.title} onAction={item.action}></anmivin-menuitem>
            ))}
          </div>
        </div>
        <div class={`menu-backdrop ${this.isopen && 'isopen'}`} onClick={this.handleClose}></div>
      </div>
    );
  }
}
