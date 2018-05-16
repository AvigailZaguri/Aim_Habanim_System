import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './pages/staff/staff.component';
import { StaffAddComponent } from './pages/staff/add/add.component';
import { FamilyComponent } from './pages/family/family.component';
import { ViewFamilyComponent  } from './pages/family/view-family/view-family.component';
import { AddFamilyComponent } from './pages/family/add-family/add-family.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { AddComponent } from './pages/interview/add/add.component';
import{EventComponent} from './pages/event/event.component';
import{CircleComponent} from './ui/circle/circle.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'staff', component: StaffComponent ,
  children:[
    {path: 'add', component: StaffAddComponent}
  ]},
  { path: 'family', component: FamilyComponent ,
    children:[
      {path: 'add', component: AddFamilyComponent},
      {path: 'view', component: ViewFamilyComponent}
    ]},
  { path: 'interview', component: InterviewComponent ,
    children:[
      {path: 'add', component: AddComponent}
    ] },
    { path: 'event', component: EventComponent  },
    { path: 'circle', component: CircleComponent  }
];
 
 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}