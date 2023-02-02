import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";

@Component({
    selector: 'app-docsection',
    templateUrl: './app.docsection.component.html',
})
export class AppDocSectionsComponent implements OnInit {
    @Input() docs: [];

    ngOnInit() {
        console.log(this.docs)
    }

}

@NgModule({
    imports: [CommonModule],
    exports: [AppDocSectionsComponent],
    declarations: [AppDocSectionsComponent]
})
export class DocSectionModule { }

