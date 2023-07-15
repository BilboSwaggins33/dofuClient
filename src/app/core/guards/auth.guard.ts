import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verifyToken().subscribe((result) => {
    if (JSON.stringify(result) != "{}") {
      router.navigate(["/home"]);
      return true;
    } else {
      router.navigate(["/login"]);
      return false;
    }
  })

};
