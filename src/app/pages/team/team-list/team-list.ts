import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {Tag} from 'primeng/tag';
import {RouterLink} from '@angular/router';
import {TeamService} from '../services/team.service';

@Component({
    selector: 'team-list',
    imports: [
        FormsModule,
        TableModule,
        Tag,
        RouterLink
    ],
    templateUrl: './team-list.html',
    styleUrl: './team-list.css',
    standalone: true,
    providers: [TeamService]
})
export class TeamList {

    teamList: Team[] = [];
    cols: any[] = [];
    mapToStatus: Map<string, string> = new Map<string, string>();

    constructor(private readonly teamService: TeamService) {
        this.teamList = this.teamService.list();
        this.mapToStatus = this.setStatusToMap();
    }

    getSeverity(status: string): any {
        return this.mapToStatus.get(status) ?? 'secondary';
    }

    setStatusToMap(): Map<string, string> {
        return new Map<string, string>([
            ['Approved', 'success'],
            ['Awaiting', 'warn'],
            ['No Status', 'secondary'],
            ['Rejected', 'danger'],
            ['Pending', 'info']
        ]);
    }

}
