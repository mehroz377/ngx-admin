import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProspectionComponent } from './prospection/prospection.component';
import { ChartsModule } from './charts/charts.module';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule } from '@nebular/theme';
import { TablesModule } from './tables/tables.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ChartsModule,
    ChartModule,
    NbCardModule, 
    TablesModule,
  ],
  declarations: [
    PagesComponent,
    ProspectionComponent,
  ],
})
export class PagesModule {
}
