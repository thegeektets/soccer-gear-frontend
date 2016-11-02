import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'asFacebookify',
})

export class FacebookPipe implements PipeTransform {
    private body: string;
    transform(value: string) {

        let newStr = '<span>' + value + '<span>';

        let reg = /(\#\w+)/g;
        let hashTaggedStr = newStr.replace(reg, '<span class=\'hashtag text-primary\'> $1 </span>' );

        reg = reg = /((https?\:\/\/)(\S+?)\.(com|edu|net|org|co\.uk|in)(\/?)(\S*))/g;
        let toReturn = hashTaggedStr.replace(reg, '<span class=\'url text-primary\'> $1 </span>' );
        return toReturn;
    }
}
