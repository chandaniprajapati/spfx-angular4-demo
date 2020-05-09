import "reflect-metadata";
require('zone.js');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpFxAngular4RoutingWebPart.module.scss';
import * as strings from 'SpFxAngular4RoutingWebPartStrings';

export interface ISpFxAngular4RoutingWebPartProps {
  description: string;
}

export default class SpFxAngular4RoutingWebPart extends BaseClientSideWebPart <ISpFxAngular4RoutingWebPartProps> {

  public render(): void {
     let bootstrapCssUrl = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
    SPComponentLoader.loadCss(bootstrapCssUrl);

    this.domElement.innerHTML = '<spfx-angular-app>Loading...</spfx-angular-app>';
    platformBrowserDynamic().bootstrapModule(AppModule);
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
