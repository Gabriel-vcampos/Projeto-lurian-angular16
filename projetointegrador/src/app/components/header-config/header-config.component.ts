import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-config',
  templateUrl: './header-config.component.html',
  styleUrls: ['./header-config.component.scss'],
})
export class HeaderConfigComponent {
  @Input() hideSearchInput: boolean = false;
}
