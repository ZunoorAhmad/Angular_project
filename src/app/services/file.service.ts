// create a service to handle authentication
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const endpoint = 'https://careerapis.tech-east.com.pk/api';

@Injectable({
    providedIn: 'root'
})

export class FileService {
    constructor(private http: HttpClient) { }

    downloadFile(name: string) {
        const fileUrl = endpoint + `/getFile${name}`;
        fetch(fileUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch the file.");
                }
                const filename = response.headers.get("Content-Disposition")?.split("filename=")[1] || "downloaded-file";
                return response.blob().then((blob) => {
                    const a = document.createElement("a");
                    a.href = window.URL.createObjectURL(blob);
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                });
            })
            .catch((error) => {
                alert('error downloading file');
                console.error("Error downloading the file:", error);
            });
    }

}
