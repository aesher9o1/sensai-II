import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShellComponent } from './components/navbar/shell/shell.component';
import { MainComponent } from './components/navbar/main/main.component';

import { FeatherModule } from 'angular-feather';

import {
  Phone,
  Star,
  Send,
  Headphones,
  HardDrive,
  Calendar,
  BarChart,
  DownloadCloud,
  Mail,
  Clipboard,
  Play,
  Box,
  Settings,
  Award,
  Code,
  Camera,
  Sun,
  Wind,
  Clock,
  Anchor,
  Users,
  Eye,
  Activity,
  UploadCloud,
  PenTool,
  Zap,
  Map,
  Cloud,
  DollarSign,
  ThumbsUp,
  PieChart,
  User,
  LifeBuoy,
  Image,
  Sliders,
  Target,
  File,
  Smartphone,
  MessageCircle,
  CreditCard,
  Book,
  Lock,
  Airplay,
  Monitor,
  Download,
  Hexagon,
  Layers,
  ArrowLeft,
  ArrowRight,
  Repeat,
  Bell,
} from 'angular-feather/icons';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AptitudeComponent } from './pages/aptitude/aptitude.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

// Select some icons (use an object, not an array)
const icons = {
  Phone,
  Star,
  Send,
  Headphones,
  HardDrive,
  Calendar,
  BarChart,
  DownloadCloud,
  Mail,
  Clipboard,
  Play,
  Box,
  Settings,
  Award,
  Code,
  Camera,
  Sun,
  Wind,
  Clock,
  Anchor,
  Users,
  Eye,
  Activity,
  UploadCloud,
  PenTool,
  Zap,
  Map,
  Cloud,
  DollarSign,
  ThumbsUp,
  PieChart,
  User,
  LifeBuoy,
  Image,
  Sliders,
  Target,
  File,
  Smartphone,
  MessageCircle,
  CreditCard,
  Book,
  Lock,
  Airplay,
  Monitor,
  Download,
  Hexagon,
  Layers,
  ArrowLeft,
  ArrowRight,
  Repeat,
  Bell,
};
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ShellComponent,
    MainComponent,
    AptitudeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons),
    FontAwesomeModule,
    SwiperModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CountdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
