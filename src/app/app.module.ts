import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import {AngularFireModule } from '@angular/fire/compat'
import { firebaseConfig } from './constants/constants';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 


@NgModule({
  declarations: [
    AppComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SingleCategoryComponent,
    CommentFormComponent,
    CommentListComponent,
    SubscriptionFormComponent,
    SinglePostComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    PostCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
