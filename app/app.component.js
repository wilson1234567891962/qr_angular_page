import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(architectureTobeService) {
        this.architectureTobeService = architectureTobeService;
        this.title = 'dummy';
        this.permissionCamera = false;
        this.isUIWebview = navigator.userAgent;
    }
    async ngOnInit() {
        await this.getStatePermissionCamera();
    }
    /**
     * Este metodo obtiene los datos de la arquitectura to be para guardar en referencia
     *
     case CONTACT_PHONE_DATA = "1"
     case ACH_PHONE_DATA = "2"
     case REGIONAL_TO_BE = "3"
     case DATA_SAVE_TO_BE = "4"
     case DATA_CLIENT_LOGIN = "6"
     */
    async getDataToBe() {
        if (this.isUIWebview !== undefined && /android/i.test(this.isUIWebview)) {
            const data = getObjectData(3);
            console.log('Data arquitectura to be en android fue' + JSON.stringify(data));
            this.architectureTobeService.dataToBe = data;
            this.checkIsLogin(this.architectureTobeService.dataToBe);
            return;
        }
        if (this.isUIWebview !== undefined && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.isUIWebview)) {
            await getObjectData(3).then((result) => {
                console.log('Data arquitectura to be en ios fue' + JSON.stringify(result));
                this.architectureTobeService.dataToBe = result;
                console.log('La data del servicio fue' + JSON.stringify(this.architectureTobeService.dataToBe));
                this.checkIsLogin(this.architectureTobeService.dataToBe);
            });
        }
    }
    checkIsLogin(architectureTobe) {
        this.architectureTobeService.isLogin = architectureTobe.token ? true : false;
        console.log('Is logueado' + this.architectureTobeService.isLogin);
    }
    /**
     * Comment : Los estados para comprobar los permisos son los siguientes
     LOCALIZATION("1"),
     CONTACT("2"),
     READ_PHONE_STATE("3"),
     LOCAL_STORAGE("4"),
     CAMERA_STORAGE("5")
     */
    async getStatePermissionCamera() {
        await this.getDataToBe();
        if (this.isUIWebview !== undefined && /android/i.test(this.isUIWebview) && await this.checkStateAndroid(5)) {
            this.navigate(true);
            this.permissionCamera = true;
            return;
        }
        if (this.isUIWebview !== undefined && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.isUIWebview)) {
            await this.checkStateIos(5).then((result) => {
                console.log('Respuesta del permiso de la camara' + JSON.stringify(result));
                this.navigate(result.state);
                this.permissionCamera = result.state;
            });
        }
        return;
    }
    navigate(state) {
        if (state) {
            /*
                To do: Mostrar pantalla de camara
             */
        }
    }
    async checkStateAndroid(item) {
        // aca se verifica el permiso de la camaea s esta en true or false
        return checkPermissionWebView(item);
    }
    async checkStateIos(item) {
        // aca se verifica el permiso de la camara  es esta en true or false en ios
        return checkPermissionWebView(item);
    }
    closePage() {
        if (this.permissionCamera) {
            this.navigate(true);
        }
        else {
            /*
                To do: Mostrar la pantalla de se requiere este permiso
             */
        }
    }
    async requestPermissionCamera() {
        // Aca solicitamos lanzar el permiso de la camara
        requestPermissionLaunch(5);
        let count = 0;
        let timerId = setInterval(async () => {
            if (count < 10) {
                await this.getStatePermissionCamera();
                if (this.permissionCamera) {
                    console.log('El usuario acepto los permisos');
                    clearInterval(timerId);
                    this.navigate(true);
                }
            }
            else if (count > 10) {
                clearInterval(timerId);
                /*
                 To do: Mostrar la pantalla de se requiere este permiso
                 */
            }
            count++;
        }, 1000);
    }
    async goToLogin() {
        if (this.isUIWebview !== undefined && /android/i.test(this.isUIWebview)) {
            await hideOrShowOptionLogin('onboarding,footer');
            backPage();
        }
        if (this.isUIWebview !== undefined && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.isUIWebview)) {
            await hideOrShowOptionLogin('onboarding,footer').then((result) => {
                console.log('Mensaje para el proceso de ocultar' + JSON.stringify(result));
                backPage();
            });
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map