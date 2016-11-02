import {Component, Input} from '@angular/core';

@Component({
    selector: 'as-loading',
    template: `
        <div class="loading-spinner"  style="position: relative;">
            <table border="0" cellpadding="0" cellspacing="0" [style.minHeight]="getMinHeight()" style=" position: relative; width:100%;">
                <tr><td valign="middle" align="center">
                    <img style="width:100px; height:100px;" src="{{getImagePath()}}" />
                </td></tr>
            </table>
        </div>
    `
})

export class LoadingComponent {

    @Input()
    private minHeight: number = 200;

    @Input()
    private scheme: string = 'blue-white';

    public getMinHeight(asNumber = false): number | string {
        if (asNumber) {
            return this.minHeight;
        } else {
            return this.minHeight + 'px';
        }
    }

    private getImagePath() {
        return '/assets/images/loading-' + this.scheme + '.gif';
    }


}

