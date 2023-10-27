import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('contentMenu') contentMenu: ElementRef | null = null;

  public openMenu(): void {
    this.contentMenu && this.contentMenu.nativeElement.classList.toggle('open');
  }

}
