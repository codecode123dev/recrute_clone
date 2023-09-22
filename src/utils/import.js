import { defineAsyncComponent } from 'vue'

export function registrationGlobal(app){
    app.component('registration-layout', defineAsyncComponent(() => import("@/layouts/registration")))
    app.component('default-layout', defineAsyncComponent(() => import("@/layouts/default")))
    app.component('login-layout', defineAsyncComponent(() => import("@/layouts/login")))
    app.component('reset-password-layout', defineAsyncComponent(() => import("@/layouts/resetPassword")))
    app.component('admin-layout', defineAsyncComponent(() => import("@/layouts/admin")))
} 