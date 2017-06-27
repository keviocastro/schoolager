import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core'

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class SchoolagerAuthComponent {
  constructor(private router: Router, private http: Http, private dialogService: MdlDialogService) { }
  environment = environment;
  spinnerShow = false;
  
  async onThen() {
    try {
      this.spinnerShow = true;
      await this.getOthersInfo();
      this.redirectUser();
    } catch (e) {
      this.dialogService.alert('Ouve um problema com a sua requisição.','ok', 'Erro :(');
    } finally {
      this.spinnerShow = false;
    }
  }

  private async getOthersInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        let account_configs = (await this.getSchoolAPI('account-configs')).account_configs;
        let accountConfigs: any = {};
        account_configs.forEach(element => accountConfigs[element.name] = { value: element.value, default: element.default });
        let user = (await this.getSchoolAPI('auth/user')).person;
        let planId = accountConfigs.lesson_plan_model_id.value != "" ? accountConfigs.lesson_plan_model_id.value : accountConfigs.lesson_plan_model_id.default;
        let lessonPlan = (await this.getSchoolAPI(`lesson-plan-models/${planId}`)).lesson_plan_model;
        localStorage.setObject('userData', { "accountConfigurations": accountConfigs, "person": user, "lessonPlanModel": lessonPlan });
        resolve();
      } catch (e){
        reject();
      }
    })
  }

  private async getSchoolAPI(url) {
    return this.http.get(`${environment.schools_api_uri}api/${url}`,
      { headers: new Headers({ 'authorization': `Bearer ${localStorage.getItem('access_token')}` }) })
      .map(x => x.json()).toPromise<any>();
  }

  private redirectUser() {
    let userData = localStorage.getObject('userData');
    let targetUrl = localStorage.getItem('targetUrl')
    let url = targetUrl ? targetUrl : "/class-daily";
    localStorage.removeItem('targetUrl');
    if (userData && userData.person) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate(['/error']);
    }
  }
}
