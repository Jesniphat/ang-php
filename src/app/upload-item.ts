import { UploadItem }    from 'angular2-http-file-upload';
import { ApiService }    from './service/api.service';
 
export class MyUploadItem extends UploadItem {
    constructor(file: any, private apiService: ApiService) {
        super();
        this.url = this.apiService.upl; //'http://localhost/project_shop_api/upload.php';
        this.headers = { HeaderName: 'Header Value', AnotherHeaderName: 'Another Header Value' };
        this.file = file;
    }
}