import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, switchMap } from 'rxjs';

// export const companyGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class CompanyGuard implements CanActivate {
  constructor(
    // public afAuth: AngularFireAuth,
    // private router: Router,
    // private sqliteService: SqliteService,
    // private global: GlobalService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.afAuth.authState.pipe(
    //   take(1),
    //   switchMap(async (user: any) => {
    //     if (user) {
    //       const token = await user.getIdTokenResult();
    //       this.global.currentUser.dataId = token.claims.user_id;
    //       if (token.claims.company || this.global.claim.company) {
    //         this.global.getStorage('user').then((curentUser) => {
    //           if (curentUser) {
    //             this.global.currentUser = curentUser;
    //           }
    //         });
    //         this.global.claim.company = true;
    //         return true;
    //       } else {
    //         return this.router.createUrlTree(['/auth/login']);
    //       }
    //     } else {
    //       return this.router.createUrlTree(['/auth/login']);
    //     }
    //   })
    // );
    return true;
  }
}
