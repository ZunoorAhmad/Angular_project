import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @ViewChild("myFileInput") myFileInput: any;
  completeProfileForm = new FormGroup({
    userid: new FormControl(''),
    fName: new FormControl(''),
    lName: new FormControl(''),
    cnic: new FormControl(467589087897867),
    email: new FormControl(''),
    password: new FormControl(''),
    linkedInProfile: new FormControl(''),
    profileImage: new FormControl(''),
    pdf: new FormControl([] as any[]),
  });
  profileImage: any;
  pdf: any;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.completeProfileForm.patchValue(JSON.parse(localStorage.getItem('user') || '{}'));
    console.log(user);
    this.completeProfileForm.value.userid = user._id;
    this.completeProfileForm.value.profileImage = user.profilePic[0];
    this.profileImage = user.profilePic[0];
  }

  isBase64Image(value: string): boolean {
    if (typeof value !== "string") {
      return false;
    }
    const base64Pattern = /^data:image\/(jpeg|png|gif|jpg);base64,/;
    return base64Pattern.test(value);
  }

  onSubmit(): void {

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.completeProfileForm.value.userid = user._id;

    console.log(this.completeProfileForm.value)

    if (!this.pdf || !this.profileImage) {
      alert('Make sure you have uploaded the prifile image and CV');
      return
    }

    this.completeProfileForm.value.pdf
    const productData = this.completeProfileForm.value
    const formData = new FormData();
    for (const [key, value] of Object.entries(productData)) {
      if (key === "profileImage" && typeof value === "string" && value.startsWith("data:image/")) {
        const imageBlob = this.dataURItoBlob(value);
        const imageFile = new File([imageBlob], "image.png", {
          type: "image/png"
        });
        formData.append("profileImage", imageFile);
      } else if (key === "pdf" && typeof value === "string") {
        const imageBlob = this.dataURItoBlob(value);
        const imageFile = new File([imageBlob], "pdf.pdf", {
          type: "pdf/pdf"
        });
        formData.append("pdf", imageFile);
      } else {
        formData.append(key, value as string);
      }
    }




    console.log('working', formData, this.completeProfileForm.value);
    this.authService.completeProfile(formData).subscribe((res: any) => {
      console.log(res);
      if (res?.message === 'Success') {
        console.log('profile updated successfully ', res.doc)
        this.messageService.add({ severity: 'success', summary: 'User Updated', detail: 'Profile Updated successfully' });
        this.completeProfileForm.patchValue(res.doc);
        localStorage.setItem('user', JSON.stringify(res.doc));
      }
    }, (err) => {
      alert(err);
    });
  }

  onUpload(event: any) {
    console.log(event);
    // for (let file of event.target.files) {
    //   this.completeProfileForm.patchValue({
    //     pdf: file
    //   });
    // }
    const fileSizeLimit = 1048487;
    const image = event.target.files[0];
    if (image.size <= fileSizeLimit) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        this.pdf = (e.target as FileReader).result as string;
        console.log(this.pdf);
        this.completeProfileForm.patchValue({
          pdf: this.pdf
        });
        this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: 'File uploaded successfully' });
      };
      reader.readAsDataURL(image);
    } else {
      this.messageService.add({ severity: 'info', summary: 'Alert', detail: 'File too Large' });
    }

  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }


  get Curriculumvitae() {

    return this.completeProfileForm.get('Curriculumvitae')?.value || [] as any[];

  }

  get userid() {
    return this.completeProfileForm.get('userid')?.value;
  }

  get fName() {
    return this.completeProfileForm.get('fName')?.value;
  }

  get lName() {
    return this.completeProfileForm.get('lName')?.value;
  }

  get email() {
    return this.completeProfileForm.get('email')?.value;
  }

  get password() {
    return this.completeProfileForm.get('password')?.value;
  }

  get linkedInProfile() {
    return this.completeProfileForm.get('linkedInProfile')?.value;
  }

  uploadFile(event: any) {
    try {
      const fileSizeLimit = 1048487;
      const image = event.target.files[0];
      if (image.size <= fileSizeLimit) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          this.profileImage = (e.target as FileReader).result as string;
          this.completeProfileForm.patchValue({
            profileImage: this.profileImage
          });
        };
        reader.readAsDataURL(image);
      } else {
        alert("File too Large");
      }
    } catch {
      alert("ERROR");
    }
  }

}
