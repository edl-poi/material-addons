import { Component } from '@angular/core';
import { QuickListBasicComponent } from '../../example-components/quick-list-basic/quick-list-basic.component';
import { Example } from '../../components/example-viewer/example.class';
import { QuickListExtendedComponent } from '../../example-components/quick-list-extended/quick-list-extended.component';
import { QuickListCompactBasicComponent } from '../../example-components/quick-list-compact-basic/quick-list-compact-basic.component';

@Component({
  selector: 'app-quick-list-demo',
  templateUrl: './quick-list-demo.component.html',
  styleUrls: ['./quick-list-demo.component.scss'],
})
export class QuickListDemoComponent {
  basicQuickListComponent = new Example(QuickListBasicComponent, 'quick-list-basic', 'Quick List Basic');
  extendedQuickListComponent = new Example(QuickListExtendedComponent, 'quick-list-extended', 'Quick List Extended');
  compactQuickListComponent = new Example(QuickListCompactBasicComponent, 'quick-list-compact-basic', 'Quick List Compact');

}
