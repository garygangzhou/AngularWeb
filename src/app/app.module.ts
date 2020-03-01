import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OtherComponent } from './other/other.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HeadlinesComponent,
    AllnewsComponent,
    PageNotFoundComponent,
    OtherComponent,
    ArticleComponent,
    // NgxPaginationModule,
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
