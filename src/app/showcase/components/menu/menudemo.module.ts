import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { MenuDemo } from './menudemo';
import { MenuDemoRoutingModule } from './menudemo-routing.module';

@NgModule({
    imports: [CommonModule, ToastModule, MenuDemoRoutingModule, MenuModule, ButtonModule, TabViewModule, ToastModule, AppCodeModule, AppDemoActionsModule],
    declarations: [MenuDemo]
})
export class MenuDemoModule {}
