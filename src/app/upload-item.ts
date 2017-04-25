import { UploadItem }    from 'angular2-http-file-upload';
 
export class MyUploadItem extends UploadItem {
    constructor(file: any, url: any) {
        super();
        this.url = url;
        this.headers = { HeaderName: 'Header Value', AnotherHeaderName: 'Another Header Value' };
        this.file = file;
    }
}