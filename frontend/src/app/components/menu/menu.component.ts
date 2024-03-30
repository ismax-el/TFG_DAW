import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { MatButton } from '@angular/material/button'

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [MatToolbar, MatButton],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {

}
