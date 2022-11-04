import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path:"", component: PortfolioComponent },
  { path:"portfolio", component: PortfolioComponent },
  { path:"success", component: SuccessComponent },
  { path:"contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
