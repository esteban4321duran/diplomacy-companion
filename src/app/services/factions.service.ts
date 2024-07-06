import { Injectable, Optional } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FactionsService {

    factionContent: Record<string, string>;
    factionNames: string[];

    constructor() {
        this.factionContent = {
            austria: 'austria-strategy-guide.md',
            inglaterra: 'england-strategy-guide.md',
            francia: 'england-strategy-guide.md',
            alemania: 'england-strategy-guide.md',
            italia: 'england-strategy-guide.md',
            rusia: 'england-strategy-guide.md',
            turquia: 'england-strategy-guide.md',
        }

        this.factionNames = Object.keys(this.factionContent);
    }

    getFactionNames() {
        return this.factionNames;
    }

    getFactionContentSrc(factionName: string): string | null {
        const text = this.factionContent[factionName];
        if (!text) {
            return null
        }

        return text;
    }
}
