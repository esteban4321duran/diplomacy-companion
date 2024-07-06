import { Component, OnInit } from '@angular/core';
import { FactionsService } from '../../services/factions.service';
import { ActivatedRoute, Params } from '@angular/router';
import {MarkdownComponent, MarkdownService} from "ngx-markdown";

@Component({
    selector: 'app-faction-page',
    standalone: true,
    imports: [
        MarkdownComponent
    ],
    templateUrl: './faction-page.component.html',
    styleUrl: './faction-page.component.css'
})
export class FactionPageComponent implements OnInit {

    contentSrc: string|null = "";

    constructor(private factionsService: FactionsService, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            const factionName = params['factionName'];
            this.contentSrc = this.factionsService.getFactionContentSrc(factionName);
        })
    }


}
