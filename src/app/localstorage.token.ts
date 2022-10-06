import {InjectionToken} from '@angular/core'

// to use JS APIs in Angular
// here we are trying to access local storage of the browser as a value provider
export const localStorageToken = new InjectionToken<any>('local storage', {
    providedIn: 'root',
    factory(){
        return localStorage;
    },
});