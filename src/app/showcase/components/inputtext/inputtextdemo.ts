import { Component, ViewEncapsulation } from '@angular/core';
import { BasicDocComponent } from './basicdoc';
import { ImportDocComponent } from './importdoc';

@Component({
    templateUrl: './inputtextdemo.html',
    styleUrls: ['./inputtextdemo.scss']
})
export class InputTextDemo {
    disabled: boolean = true;

    value1: string;

    value2: string;

    value3: string;

    value4: string;

    value5: string = 'Disabled';

    value6: string;

    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
    ]
}
