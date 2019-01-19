import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { FormadepagoComponent } from './components/formadepago/formadepago.component';

const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'formadepago/:id', component: FormadepagoComponent },
    { path: '**', component: HomeComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
