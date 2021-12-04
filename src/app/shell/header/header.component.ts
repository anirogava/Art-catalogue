import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get isEn(): boolean {
    return this.isLanguage('en');
  }
  get isKa(): boolean {
    return this.isLanguage('ka');
  }
  get isLoggedIn(): boolean {
    // return this.auth.isLoggedIn;
    return false;
  }
  get isInitiated(): boolean {
    // return this.auth.isInitiated;
    return false;
  }

  constructor(
    private translateService: TranslateService,
    private router: Router // private auth: AuthService
  ) {}

  en() {
    this.translateService.use('en');
  }
  ka() {
    this.translateService.use('ka');
  }
  goToSignIn() {
    this.router.navigate(['sign-in']);
  }
  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
  signOut() {
    console.log('signing out ...');
    // this.auth.signOut().then(() => {
    //   this.router.navigate(['sign-in']);
    // });
  }

  private isLanguage(lang: string): boolean {
    const defaultLang = this.translateService.defaultLang;
    const currentLang = this.translateService.currentLang;
    return currentLang ? currentLang === lang : defaultLang === lang;
  }

  ngOnInit() {}
}
