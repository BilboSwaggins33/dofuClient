import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('idToken');
    if (token) {
      const request1 = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${token}`),
      });
      return next.handle(request1);
    } else {
      return next.handle(request);
    }
  }
}
