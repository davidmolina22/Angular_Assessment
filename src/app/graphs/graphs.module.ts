import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GraphsComponent, BarChartComponent, LineChartComponent],
  imports: [CommonModule, NgChartsModule, RouterModule],
  exports: [GraphsComponent],
})
export class GraphsModule {}
