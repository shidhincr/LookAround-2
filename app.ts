/// <reference path="typings/angular2/angular2.d.ts" />

import {Component,View,bootstrap} from 'angular2/angular2';

@Component({
    selector: 'look-around'
})

@View({
    template: `
        <div>
            <span>{{appName}} application bootstrap complete</span>
        </div>
    `
})

class LookAround {
    appName: string;
    constructor(){
        this.appName = 'LookAround2';
    }
}

bootstrap(LookAround);

