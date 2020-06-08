import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { DetailsComponent } from '../details/details.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { HomeComponent } from '../home/home.component';
import { MonthlistComponent } from '../monthlist/monthlist.component';
import { TodaylistComponent } from '../todaylist/todaylist.component';

    const routes: Routes = [
            {path:'list',component: ListComponent},
            {path:'',component: HomeComponent},
            {path:'Home',component: HomeComponent},
            {path:'details',component: DetailsComponent},
            {path:'details/:nameis',component: DetailsComponent},
            {path:'monthlist',component: MonthlistComponent},
            {path:'todaylist',component: TodaylistComponent},


    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes),
            FormsModule,
            CommonModule
        ],
        exports: [
            RouterModule,
            RouterOutlet
        ],
        declarations: []
    })
    export class AppRoutingModule { }
