import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const LoginGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.checkLocalTokenExists()) {
    return router.parseUrl("/home");
  }

  return true;

};

