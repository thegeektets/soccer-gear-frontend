import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'asTweetyBird',
})

export class TwitterPipe implements PipeTransform {

    // (\#\w+) i believe this should find hashtags...not sure if it finds all?
    // (\@\w+)
    transform(value: string) {
        let reg = /(\#\w+)/g;
        let halfNewStr = value.replace(reg, '<span class="hashtag text-primary">$1</span>'); // hashtag finder

        // reg = /((\w+|\.)?(\w+|\.)?(\w+|\.)?(\@)(\w+\.{1}\w+)(\w+|\.)?(\w+|\.))/g;
        // let newStr = halfNewStr.replace(reg, '<span class=\'text-primary\'>$1</span>'); // emails

        reg = /((https?\:\/\/)(\S+?)\.(com|edu|net|org|co\.uk|in)(\/?)(\S*))/g; // urls
        let urlsHighlighted = halfNewStr.replace(reg, '<span class="text-primary url">$1</span>');

        reg = /(\@[a-zA-Z]+)/g;
        let toReturn = urlsHighlighted.replace(reg, '<span class="callout text-primary">$1</span>'); // @ based callout (@Jimmy)


        return toReturn;
    }
}

