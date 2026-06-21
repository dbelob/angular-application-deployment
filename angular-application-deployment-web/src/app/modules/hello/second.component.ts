import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HelloService } from '../../shared/services/hello.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class SecondComponent implements OnInit {
  public message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit(): void {
    this.helloService.getMessage('second')
      .subscribe(data => {
        this.message = data;
      });
  }
}
