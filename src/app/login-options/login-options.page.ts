import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.page.html',
  styleUrls: ['./login-options.page.scss'],
})
export class LoginOptionsPage implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  login() {
    if (this.loginForm.get('username').value.includes('farmer')) {
      this.router.navigate(['/tabs/tab1']);
    }

    if (this.loginForm.get('username').value.includes('consumer')) {
      this.router.navigate(['/consumer-frontpage']);
    }
  }
}
