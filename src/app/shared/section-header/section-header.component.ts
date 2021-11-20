import { Component, Input, OnInit } from '@angular/core';

interface IButton {
  label: string,
  link: string,
  type: 'btn-link' | 'btn-primary'
}


@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';

  // @Input() buttonLabel = 'Vai a ...';
  // @Input() buttonClass = 'btn-link';
  // @Input() buttonLink = '';
//si può fare così oppure come sotto, usando un'interfaccia

_button: IButton = {
  label: '',
   link: '',
   type: 'btn-link'};

@Input() set button(value: Partial<IButton>){  //con partial non sono obbligatori tutti i campi
this._button = {...this._button, ...value};
}

  constructor() { }

  ngOnInit(): void {
  }

}
