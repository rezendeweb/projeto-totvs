import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoDialogService,
  PoModalAction, 
  PoModalComponent,
  PoNotificationService,
  PoPageAction, 
  PoPageFilter,
  PoTableColumn,
  PoBreadcrumb,
  PoCheckboxGroupOption
} from '@portinari/portinari-ui';

import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  styleUrls: ['task.component.css'],
  templateUrl: './task.component.html',
  providers: [TaskService]
})
export class TaskComponent implements OnInit {

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;
  
  showMoreDisabled: boolean = false;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: '/principal'},
    { label: 'Concluir', action: this.hireCandidate, disabled: this.disableHireButton.bind(this) },
    { label: 'Cancelar', action: this.cancelarConcluirTarefa, disabled: this.disableHireButton.bind(this) },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: this.beforeRedirect.bind(this) },
      { label: 'Tarefas' }
    ]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.advancedFilterModal.close();
      const filters = [...this.status];
      this.filterAction(filters);
    },
    label: 'Filtrar'
  };

  public readonly filterSettings: PoPageFilter = {
    action: 'filterAction',
    advancedAction: 'advancedFilterActionModal',
    ngModel: 'labelFilter',
    placeholder: 'Pesquisar'
  };
  
  private disclaimers = [];

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;

  constructor(
    private sampleHiringProcessesService: TaskService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private router: Router) { }

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.statusOptions = this.sampleHiringProcessesService.getStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(filter = [this.labelFilter]) {
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['statusTarefa']) {
      case 'iniciado':
        selectedCandidate['statusTarefa'] = 'concluido';
        this.poNotification.success('Tarefa Concluída com sucesso');
        break;

      case 'concluido':
        this.poNotification.warning('Esta tarefa já está concluída.');
        break;

      case 'cancelado':
        this.poNotification.error('Esta tarefa já foi cancelada, não é possíel conluir.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item => {
      return Object.keys(item)
      .some(key => (!(item[key] instanceof Object) && this.includeFilter(item[key], filters)));
    });
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map(value => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {

    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {

      this.poDialog.confirm({
        title: `Confirmar o redirecionamento para ${itemBreadcrumbLabel}`,
        message: `Existe uma tarefa selecionada. Tem certeza do redirecionamento?`,
        confirm: () => this.router.navigate(['/'])
      });

    } else {
      this.router.navigate(['/']);
    }

  }
  
  showMore() {
    //this.showMoreDisabled = true;
  }

  cancelarConcluirTarefa(): void {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['statusTarefa']) {
      case 'iniciado' :
        selectedCandidate['statusTarefa'] = 'cancelado';
        this.poNotification.error('Tarefa cancelada com sucesso.');
        break;

      case 'concluido':
        this.poNotification.error('Esta tarefa já está concluída, não é possível cancelar');
        break;

      case 'cancelado':
        this.poNotification.error('Esta tarefa já foi cancelada.');
        break;
    }
  }

}