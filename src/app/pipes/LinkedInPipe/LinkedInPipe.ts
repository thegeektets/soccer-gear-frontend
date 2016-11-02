import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'asLinkItAllUp'
})

export class LinkedInPipe implements PipeTransform {
    transform(value: string) {

        let reg = /((\w+|\.)?(\w+|\.)?(\w+|\.)?(\@)(\w+\.{1}\w+)(\w+|\.)?(\w+|\.))/g; // emails
        let emailDoneStr = value.replace(reg, '<span class=\'text-primary\'> $1 </span>' );

        reg = /((https?\:\/\/)(\S+?)\.(com|edu|net|org|co\.uk|in)(\/?)(\S*))/g; // urls
        let toReturn = emailDoneStr.replace(reg, '<span class=\'text-primary\'> $1 </span>' );

        return toReturn;
    }
}
