import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('admin-template');

    isCollapsed = signal(false);

    toggleMenu(): void {
        this.isCollapsed.update(v => !v);
    }

    menuItems: MenuItem[] = [
        {id: 1, label: 'Dashboard', icon: 'ph ph-house', active: true},
        {id: 2, label: 'Team', icon: 'ph ph-users-three'},
        {id: 3, label: 'Analytics', icon: 'ph ph-chart-line'},
        {id: 4, label: 'Documents', icon: 'ph ph-files'},
        {id: 5, label: 'Calendar', icon: 'ph ph-calendar'},
        {id: 6, label: 'Messages', icon: 'ph ph-chat'},
        {id: 7, label: 'Settings', icon: 'ph ph-gear'},
    ];
}

interface MenuItem {
    id: number;
    label: string;
    icon: string;
    active?: boolean;
}
