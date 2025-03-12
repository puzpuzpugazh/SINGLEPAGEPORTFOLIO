import { Component, HostListener } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  projects = [
    { name: 'VIKINGCONNECT', description: 'The website connect.vikingpump.com is associated with Viking Pump, a leading manufacturer of positive displacement pumps. This platform is designed to provide users with access to various resources, including product information, technical support, and distributor lookup services.Regarding the technologies and frameworks used, Viking Pumps main website, vikingpump.com, employs a combination of Drupal as its content management system, Apache as its web server, PHP for server-side scripting, and the ZURB Foundation framework for responsive design. Additionally, it utilizes the Google Font API for typography and Google Tag Manager for tag management.', link: 'https://connect.vikingpump.com/' },
    { name: 'RISK MANAGEMENT', description: 'Risk management websites employ a variety of technologies and frameworks to provide effective solutions for identifying, assessing, and mitigating risks across different sectors. These platforms often integrate advanced tools such as artificial intelligence (AI), machine learning (ML), and natural language processing (NLP) to enhance their capabilities.For instance, AI-driven solutions are transforming the insurance industry by offering real-time risk monitoring and streamlined compliance processes. These platforms empower insurers and businesses to navigate the complexities of the digital age with greater confidence and efficiency.', link: '#' },
    { name: 'BMW', description: 'BMW Indias online shop (shop.bmw.in) offers a seamless digital experience, allowing users to explore, customize, and purchase vehicles online. Built using a modern microservices architecture, the platform ensures scalability and smooth integration with backend systems like inventory, finance calculators, CRM, and payment gateways. It follows a headless commerce strategy with commercetools for efficient product and order management. Cloud-based services enhance speed, flexibility, and SEO performance, ensuring a user-friendly experience. This advanced digital infrastructure enables BMW to continuously refine and expand its online services to meet customer needs.', link: 'https://shop.bmw.in/#/' },
    { name: 'Portfolio Website', description: 'A personal portfolio website showcasing my projects and skills.', link: '#' },
  ];
  name = '';
  email = '';
  message = '';
  successMessage = '';
  errorMessage = '';

  symbols: { x: number, y: number, symbol: string, color: string, angle: number }[] = [];
  colors = ['#fff'];
  symbolChars = ['✦'];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.stars();
  }


  stars() {
    if (this.isSessionWelcome()) {
      for (let i = 0; i < 32; i++) {
        const positions =[
          {x: window.innerWidth / 21, y: window.innerHeight / 21},
          {x: window.innerWidth / 6, y: 2 * window.innerHeight / 12},
          {x: window.innerWidth / 3.5, y: window.innerHeight / 21},
          {x: window.innerWidth / 2.5, y: 2 * window.innerHeight / 12},
          {x: window.innerWidth / 2, y: window.innerHeight / 21},
          {x: window.innerWidth / 1.5, y: 2 * window.innerHeight / 12},
          {x: window.innerWidth / 1.25, y: window.innerHeight / 21},
          {x: window.innerWidth / 1.1, y: 2 * window.innerHeight / 12},
          {x: window.innerWidth / 21, y: window.innerHeight / 3.5},
          {x: window.innerWidth / 6, y: window.innerHeight / 2.5},
          {x: window.innerWidth / 3.5, y: window.innerHeight / 3.5},
          {x: window.innerWidth / 2.5, y: window.innerHeight / 2.5},
          {x: window.innerWidth / 2, y: window.innerHeight / 3.5},
          {x: window.innerWidth / 1.5, y: window.innerHeight / 2.5},
          {x: window.innerWidth / 1.25, y: window.innerHeight / 3.5},
          {x: window.innerWidth / 1.1, y: window.innerHeight / 2.5},
          {x: window.innerWidth / 21, y: window.innerHeight / 1.5},
          {x: window.innerWidth / 6, y: window.innerHeight / 1.25},
          {x: window.innerWidth / 3.5, y: window.innerHeight / 1.5},
          {x: window.innerWidth / 2.5, y: window.innerHeight / 1.25},
          {x: window.innerWidth / 2, y: window.innerHeight / 1.5},
          {x: window.innerWidth / 1.5, y: window.innerHeight / 1.25},
          {x: window.innerWidth / 1.25, y: window.innerHeight / 1.5},
          {x: window.innerWidth / 1.1, y: window.innerHeight / 1.25},
          {x: window.innerWidth / 21, y: window.innerHeight / 1.1},
          {x: window.innerWidth / 3.5, y: window.innerHeight / 1.1},
          {x: window.innerWidth / 2, y: window.innerHeight / 1.1},
          {x: window.innerWidth / 1.25, y: window.innerHeight / 1.1},
        ];


        this.symbols.push({
          x: positions[i].x,
          y: positions[i].y,
          symbol: this.symbolChars[Math.floor(Math.random() * this.symbolChars.length)],
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          angle: 0
        });
      }
    }
  }

  isSessionWelcome(): boolean {
    return true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.symbols.forEach(symbol => {
      const dx = symbol.x - mouseX;
      const dy = symbol.y - mouseY;
      symbol.angle = Math.atan2(dy, dx) * (120 / Math.PI);
    });
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.symbols.forEach(symbol => {
      symbol.angle = 0;
    });
  }

  sendMessage() {
    if (!this.name || !this.email || !this.message) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    const formData = { name: this.name, email: this.email, message: this.message };

    this.emailService.sendEmail(formData).then(
      () => {
        this.successMessage = 'Email sent successfully!';
        this.errorMessage = '';
        this.name = '';
        this.email = '';
        this.message = '';
      },
      (error) => {
        this.errorMessage = 'Failed to send email. Please try again.';
        this.successMessage = '';
        console.error('Email sending error:', error);
      }
    );
  }

}
