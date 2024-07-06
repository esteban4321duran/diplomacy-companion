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
            england: 'england-strategy-guide.md',
            france: 'england-strategy-guide.md',
            germany: 'england-strategy-guide.md',
            italy: 'england-strategy-guide.md',
            russia: 'england-strategy-guide.md',
            turkey: 'england-strategy-guide.md',
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
