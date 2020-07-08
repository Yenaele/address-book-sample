import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from '../service/token.service';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  private static AUTH_TOKEN_KEY = 'Authorization';

  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = req.clone({
      headers: req.headers.set(GlobalInterceptor.AUTH_TOKEN_KEY, this.tokenService.getToken())
    });
    return next.handle(authRequest);
  }

}
