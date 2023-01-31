import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { AppInputStyleSwitchModule } from '../../layout/app.inputstyleswitch.component';
import { AppCodeModule } from '../../layout/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TriStateCheckboxDemo } from './tristatecheckboxdemo';
import { TriStateCheckboxDemoRoutingModule } from './tristatecheckboxdemo-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, TriStateCheckboxDemoRoutingModule, TriStateCheckboxModule, TabViewModule, AppInputStyleSwitchModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TriStateCheckboxDemo]
})
export class TriStateCheckboxDemoModule {}
