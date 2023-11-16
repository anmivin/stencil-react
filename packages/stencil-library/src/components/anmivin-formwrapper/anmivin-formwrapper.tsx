import { Component, Prop, h, Listen, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'anmivin-formwrapper',
  styleUrl: 'anmivin-formwrapper.css',
  shadow: true,
})
export class AnmivinFormwrapper {
  @Prop() buttoncolor?: string;
  @State() formValue: Record<string, any> = new Map();
  @Event() private submitForm: EventEmitter;

  @Listen('inputValueChange', { target: 'body' })
  valuePassed(event: CustomEvent<{ label: string; value: any }>) {
    const detail = event.detail;
    this.formValue.set(detail.label, detail.value);
  }

  handleSubmit = () => {
    this.submitForm.emit(this.formValue);
  };

  render() {
    return (
      <div class="form-wrapper">
        <slot />
        <anmivin-button onClick={this.handleSubmit}>sum</anmivin-button>
      </div>
    );
  }
}
