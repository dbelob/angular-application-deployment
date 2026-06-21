import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HelloService } from '../../shared/services/hello.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-third',
    templateUrl: './third.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class ThirdComponent implements OnInit {
  public message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.getMessage('third')
      .subscribe(data => {
        this.message = data;
      });
  }
}
