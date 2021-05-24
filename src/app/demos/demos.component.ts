import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
})
export class DemosComponent implements OnInit {
  public isScreenSmall: boolean;

  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {}

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }
}
