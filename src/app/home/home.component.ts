import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from "../hero/hero.component";
import { SocialBannerComponent } from "../social-banner/social-banner.component";
import { ProductsBaannerComponent } from "../products-baanner/products-baanner.component";
import { FeedbacksComponent } from "../feedbacks/feedbacks.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, SocialBannerComponent, ProductsBaannerComponent, FeedbacksComponent, FooterComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
