import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HelloService } from '../../shared/services/hello.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class FirstComponent implements OnInit {
  public message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.getMessage('first')
      .subscribe(data => {
        this.message = data;
      });
  }
}
