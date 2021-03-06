import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skilled-warrior',
  templateUrl: './skilled-warrior.component.html',
  styleUrls: ['./skilled-warrior.component.scss'],
})
export class SkilledWarriorComponent implements OnInit {
  icons = [
    { name: 'blossom', size: 'icon-xl', position: { left: 100, top: 30 } },
    { name: 'dockbit', size: 'icon-xxl', position: { left: 60, top: -10 } },
    { name: 'zapier', size: 'icon-xxl', position: { left: 25, top: 0 } },
    { name: 'bitnami', size: 'icon-2xl', position: { left: 0, top: 50 } },
    { name: 'slack', size: 'icon-2xxl', position: { left: 23, top: 70 } },
    { name: 'monero', size: 'icon-xxl', position: { left: 65, top: 44 } },
    { name: 'dropbox', size: 'icon-xl', position: { left: 95, top: 83 } },
  ];

  constructor(
    private scrollToService: ScrollToService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  scrollToElement(target: string, page: string = ''): void {
    this.router.navigate([`/${page}`]).then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({
          target,
        });
      }, 0);
    });
  }
}
