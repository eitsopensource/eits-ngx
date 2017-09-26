import { TranslateService } from './translate.service';

export function format(text: string, args: any[]): string {
    let formattedString = text;
    text.match(/\{\d+\}/g).forEach(placeholder => {
        const index = parseInt(placeholder.substring(1), 10);
        formattedString = formattedString.replace(placeholder, args[index]);
    });
    return formattedString;
}

export function translate(key: string, ...args: any[]): string {
    if (args.length > 0) {
        return format(TranslateService.bundle[key], args);
    } else {
        return TranslateService.bundle[key] || key;
    }
}
