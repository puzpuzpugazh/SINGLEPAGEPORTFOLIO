import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {}

  private emailJsUrl = 'https://api.emailjs.com/api/v1.0/email/send';

  private serviceID = 'service_u16x5oa';
  private templateID = 'template_j6yx6kw';
  private userID = 'X3VtX5EZIoTS6amNd';

  sendEmail(formData: { name: string; email: string; message: string }) {
    return emailjs.send(this.serviceID, this.templateID, formData, this.userID);
  }
}
