import { Injectable } from "@angular/core";
import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, of, retry, throwError } from "rxjs";

@Injectable()
export class AuthService {

  userPath = "/api/user";

  localTokenExists: boolean = this.checkLocalTokenExists();

  constructor(private socialAuthService: SocialAuthService, private router: Router, private httpClient: HttpClient) {
    this.socialAuthService.authState.subscribe((user) => {
      if (user != null) {
        this.localTokenExists = true;
        localStorage.setItem("idToken", user.idToken);
        this.router.navigate(["/home"]);
      } else {
        this.localTokenExists = false;
        localStorage.removeItem("idToken");
        this.router.navigate(["/login"]);
      }
    });
  }

  checkLocalTokenExists() {
    return localStorage.getItem("idToken") != null;
  }

  verifyToken() {
    if (this.checkLocalTokenExists()) {
      var urlencoded = new URLSearchParams();
      urlencoded.append("credential", localStorage.getItem("idToken")!);
      return this.httpClient.post(`${environment.apiURL}${this.userPath}/login`, urlencoded, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).pipe(retry(1),
        catchError(this.handleError));
    } else {
      return of({});
    }
  }


  refreshToken() {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  };

  logout() {
    localStorage.removeItem("idToken");
    this.socialAuthService.signOut();
  }

  private handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
