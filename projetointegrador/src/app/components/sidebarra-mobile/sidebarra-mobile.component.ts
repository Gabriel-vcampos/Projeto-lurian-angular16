import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebarra-mobile',
  templateUrl: './sidebarra-mobile.component.html',
  styleUrls: ['./sidebarra-mobile.component.scss']
})
export class SidebarraMobileComponent {
 isOpen = false;
  isMobile = false;

  @Output() sidebarClosed = new EventEmitter<void>(); // nome diferente

navItems: any;
otherItems: any;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sidebar') && !target.closest('.menu-button')) {
      this.isOpen = false;
      this.sidebarClosed.emit(); // agora não há conflito

    }
  }
}

