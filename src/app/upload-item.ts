import { UploadItem }    from 'angular2-http-file-upload';
 
export class MyUploadItem extends UploadItem {
    constructor(file: any) {
        super();
        this.url = 'http://localhost/project_shop_api/upload.php';
        this.headers = { HeaderName: 'Header Value', AnotherHeaderName: 'Another Header Value' };
        this.file = file;
    }
}