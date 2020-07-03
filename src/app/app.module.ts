import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './routing.module';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { HomeComponent } from './home/home.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    SignupFormComponent,
    HomeComponent,
    ProfileFollowerComponent,
    PostComponent,
    GithubFollowersComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [EmailService, PostService, GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
