import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Tag} from 'primeng/tag';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
    selector: 'team-form',
    imports: [
        TableModule,
        RouterLink,
        FormsModule,
        InputNumberModule
    ],
    templateUrl: './team-form.html',
    styleUrl: './team-form.css',
    standalone: true
})
export class TeamForm {

    model: Team = {};

}
