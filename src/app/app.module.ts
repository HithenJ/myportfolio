import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AiWorkflowComponent } from './component/ai-workflow/ai-workflow.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { LegacyRedirectComponent } from './pages/legacy-redirect.component';
import { RevealDirective } from './directives/reveal.directive';
import { MagneticDirective } from './directives/magnetic.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    AiWorkflowComponent,
    ContactComponent,
    FooterComponent,
    LegacyRedirectComponent,
    RevealDirective,
    MagneticDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
