import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  isLogin = false
  fruits: Array<string> = ['apple','melon','cherry','banana','lemon','blueberry','grape']
  
  handleClickButton() {
      this.isLogin = !this.isLogin
  }
}
