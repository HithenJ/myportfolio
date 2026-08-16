import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-legacy-redirect',
  template: ''
})
export class LegacyRedirectComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const fragment = this.route.snapshot.data['fragment'] as string;
    this.router.navigate(['/'], { fragment, replaceUrl: true });
  }
}
