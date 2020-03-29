import { Component, OnInit } from '@angular/core';
import { 
  PoPageLoginCustomField, 
  PoPageLoginLiterals, 
  PoPageLogin, 
  PoPageLoginRecovery, 
  PoModalPasswordRecoveryType} 
from '@portinari/portinari-templates';

import { PoSelectOption, PoCheckboxGroupOption } from '@portinari/portinari-ui';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  background: string;
  contactEmail: string;
  customField: PoPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<PoSelectOption>;
  customLiterals: PoPageLoginLiterals;
  environment: string;
  exceededAttempts: number;
  secondaryLogo: string;
  literals: string;
  login: string;
  loginPattern: string;
  loginError: string;
  loginErrors: Array<string>;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: PoPageLoginRecovery;
  registerUrl: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({label: this.customFieldOption.label, value: this.customFieldOption.value});
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      //por enquanto vou deixar sem validação de login
      const userName = formData.login;
      const password = formData.password
      
      if (this.authService
          .authenticate(userName, password)=='ABC123'){
            console.log('autendicado');
            this.router.navigate(['principal']);
      }else{
        console.log('erro');
        this.exceededAttempts -= 1;
        if(this.exceededAttempts == -4) this.exceededAttempts = 1;
      }
    }
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0; //errou a senha adiciona na variavel
    this.secondaryLogo = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '@'&&'.com'; //validador na mascara do login
    this.loginError = '';
    this.loginErrors = [];
    this.logo = undefined;
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.productName = '';
    this.recovery = {
      url: '',
      type: PoModalPasswordRecoveryType.Email,
      contactMail: 'support@mail.com'
    };
    this.registerUrl = '';
  }

}
