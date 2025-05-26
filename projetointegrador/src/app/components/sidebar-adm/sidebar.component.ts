import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  ngAfterViewInit() {
    // Esconde o sidebar em telas menores
    if (window.innerWidth < 768) {
      this.sidebar.nativeElement.classList.add('-translate-x-full');
      this.overlay.nativeElement.classList.add('hidden');
    }
  }

  toggleSidebar() {
    const sidebarEl = this.sidebar.nativeElement;
    const overlayEl = this.overlay.nativeElement;
    const isOpen = !sidebarEl.classList.contains('-translate-x-full');

    sidebarEl.classList.toggle('-translate-x-full');
    overlayEl.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden', !isOpen);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    if (width >= 768) {
      this.sidebar.nativeElement.classList.remove('-translate-x-full');
      this.overlay.nativeElement.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    } else {
      this.sidebar.nativeElement.classList.add('-translate-x-full');
    }
  }
}
