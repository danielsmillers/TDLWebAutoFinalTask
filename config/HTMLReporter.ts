import moment from 'moment';

export default class HTMLReporter {
  private static dateGenerator(
    format: string,
    days: number,
    months: number,
    years: number,
  ): string {
    const date = moment()
      .add(days, 'd')
      .add(months, 'M')
      .add(years, 'y')
      .format(format);
    return date;
  }

  public static generateReport() {
    const os = require('node:os');
    const report = require('multiple-cucumber-html-reporter');

    report.generate({
      jsonDir: './test-results/reports/',
      reportPath: './test-results/reports/html/',
      pageTitle: 'SAUCEDEMO.com Test Execution Report',
      reportName: 'SAUCEDEMO.com Test Execution Results',
      displayDuration: true,
      displayReportTime: true,
      metadata: {
        browser: {
          name: 'chrome',
          version: 'latest',
        },
        device: os.hostname(),
        platform: {
          name: 'windows',
          version: os.version(),
        },
      },
      customData: {
        title: 'Test Run Information',
        data: [
          {
            label: 'Execution Date',
            value: this.dateGenerator('DD/MM/YYYY', 0, 0, 0),
          },
          {
            label: 'Base URL',
            value: 'https://www.saucedemo.com/',
          },
        ],
      },
    });
  }
}

HTMLReporter.generateReport();
