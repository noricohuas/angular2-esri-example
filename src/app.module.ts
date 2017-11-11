import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MapComponent } from './app/components/map.component';
import { SearchComponent } from './app/components/search.component';
import { LegendComponent } from './app/components/legend.component';
import { BasemapSelect } from './app/components/basemapselect.component';
import { LayerComponent } from './app/components/layer.component';
import { TabComponent } from './app/components/tab.component';
import { TabsComponent } from './app/components/tabs.component';
import { AppComponent }  from './app.component';

import { MapService } from './app/services/map.service';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    MapComponent, 
    SearchComponent, 
    LegendComponent, 
    BasemapSelect, 
    LayerComponent, 
    TabComponent, 
    TabsComponent
  ],
  providers: [
    MapService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
