import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

interface MenuItem {
    id: number;
    label: string;
    icon: string;
    active?: boolean;
    path: string;
}

@Component({
  selector: 'sidebar',
    imports: [
        RouterLink
    ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
    standalone: true
})
export class Sidebar {

    isCollapsed = signal(false);

    toggleMenu(): void {
        this.isCollapsed.update(v => !v);
    }

    menuItems: MenuItem[] = [
        {id: 1, label: 'Dashboard', path: '', icon: 'ph ph-house', active: true},
        {id: 2, label: 'Team', path: 'team', icon: 'ph ph-users-three'},
        {id: 3, label: 'Analytics', path: '', icon: 'ph ph-chart-line'},
        {id: 4, label: 'Documents', path: '', icon: 'ph ph-files'},
        {id: 5, label: 'Calendar', path: '', icon: 'ph ph-calendar'},
        {id: 6, label: 'Messages', path: '', icon: 'ph ph-chat'},
        {id: 7, label: 'Settings', path: '', icon: 'ph ph-gear'},
    ];

}
