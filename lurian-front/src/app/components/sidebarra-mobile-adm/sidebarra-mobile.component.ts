import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebarra-mobile',
  templateUrl: './sidebarra-mobile.component.html',
  styleUrls: ['./sidebarra-mobile.component.scss']
})
export class SidebarraMobileComponent {
  isOpen = false;
  isMobile = false;

  @Output() sidebarClosed = new EventEmitter<void>();

  // Itens de navegação com rotas
  navItems = [
    { 
      label: 'Página Inicial', 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      selected: false,
      route: ''
    },
    {
      label: 'Agendamentos',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 01-2-2V7a2 2 0 012-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      selected: false,
      route: 'adm/new-schedule'
    },
    {
      label: 'Pedidos',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      selected: false,
      route: 'adm/pedidos'
    }
  ];

  otherItems = [
    {
      label: 'Sobre nós',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      selected: false,
      route: '/about'
    }
  ];
  username: string = '';
  email: string= '';

  ngOnInit(): void {
    const userData = sessionStorage.getItem('userData'); // ou localStorage, se preferir
    

    if (userData) {
      try {
        const user = JSON.parse(userData);
        this.username = user.username || 'Usuário';
         this.email = user.email || 'E-mail não encontrado';
      } catch (error) {
        console.error('Erro ao analisar os dados do usuário:', error);
      }
    }
  }


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  // Método de navegação
  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.updateSelectedItems(route);
    this.closeSidebar();
  }

  // Atualiza estado dos itens selecionados
  private updateSelectedItems(currentRoute: string): void {
    this.navItems.forEach(item => item.selected = item.route === currentRoute);
    this.otherItems.forEach(item => item.selected = item.route === currentRoute);
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  closeSidebar(): void {
    this.isOpen = false;
    this.sidebarClosed.emit();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.sidebar') && !target.closest('.menu-button')) {
      this.closeSidebar();
    }
  }
}
