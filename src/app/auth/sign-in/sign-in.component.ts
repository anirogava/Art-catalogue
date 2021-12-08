import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { loadingService } from 'src/app/services/loading.service';
export interface SignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingService: loadingService
  ) {}
  signIn({ email, password }: SignInForm) {
    if (!email || !password) {
      return;
    }
    this.loadingService.start();
    from(this.auth.signIn({ email, password }))
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe(() => {
        this.router.navigate(['content']);
      });
  }

  ngOnInit() {}
}
