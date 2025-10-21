import { Component } from '@angular/core';

// importing the module for simplicity - better to import components and other building blocks indicidually
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule /*, RouterLink */ } from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [NgbModule, RouterModule],
    templateUrl: './menu.html',
    styleUrl: './menu.scss',
})
export class Menu {
    isNavbarCollapsed = false;
}
