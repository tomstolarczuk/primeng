import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-docsections',
    templateUrl: './app.docsections.component.html',
})
export class AppDocSectionsComponent {
    @Input() docs;
}

