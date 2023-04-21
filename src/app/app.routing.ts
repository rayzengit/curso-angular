import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { LigaComponent } from './liga/liga.component';
import { DeporteComponent } from './deporte/deporte.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UniformesComponent } from './uniformes/uniformes.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'liga', component: LigaComponent},
    {path: 'deporte', component: DeporteComponent},
    {path: 'pagina-principal', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: 'uniformes', component: UniformesComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
