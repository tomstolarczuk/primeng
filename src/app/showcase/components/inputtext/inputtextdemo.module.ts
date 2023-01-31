import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { InputTextDemo } from './inputtextdemo';
import { InputTextDemoRoutingModule } from './inputtextdemo-routing.module';

@NgModule({
    imports: [CommonModule, InputTextDemoRoutingModule, FormsModule, InputTextModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputTextDemo]
})
export class InputTextDemoModule {}
