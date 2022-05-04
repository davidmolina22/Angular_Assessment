import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LightSwitchComponent, TrafficLightComponent, TranslatePipe],
  imports: [CommonModule, RouterModule],
  exports: [LightSwitchComponent, TrafficLightComponent],
})
export class LightSwitchModule {}
