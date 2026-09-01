import { Component } from '@angular/core';
import { AriaUtils } from '../../utils/aria-utils';

@Component({
  selector: 'app-accessible-component',
  templateUrl: './accessible-component.component.html',
  styleUrls: ['./accessible-component.component.scss']
})
export class AccessibleComponentComponent {
  constructor(private ariaUtils: AriaUtils) {}
}