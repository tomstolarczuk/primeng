import { Component, Input } from '@angular/core';
import { MenuItem } from './app.menu.component';

@Component({
    selector: '[app-menuitem]',
    templateUrl: './app.menuitem.component.html'
})
export class AppMenuItemComponent {
    @Input() item: MenuItem;

    @Input() root: boolean = true;
}
