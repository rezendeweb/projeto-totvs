import { Injectable } from '@angular/core';

import { PoTableColumn } from '@portinari/portinari-ui';

@Injectable()
export class TaskService {

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'statusPrioridade', label: 'Prioridade', width: '100px' ,type: 'subtitle', subtitles: [
        { value: 'alta', color: 'color-07', label: 'Alta', content: '' },
        { value: 'media', color: 'color-10', label: 'Media', content: '' },
        { value: 'baixa', color: 'color-01', label: 'Baixa', content: '' },
      ]},
          
      { property: 'tarefaId', label: 'Tarefa Id', type: 'string' },
      { property: 'descricao', label: 'Descrição'},
      { property: 'dataInicio', label: 'Data Início', type: 'string' },
      { property: 'dataFim', label: 'Data Fim', type: 'string' },

      { property: 'statusTarefa', label: 'Status', type: 'label', width: '100px', labels: [
        { value: 'concluido', color: 'color-11', label: 'Conluído' },
        { value: 'iniciado', color: 'color-08', label: 'Iniciado'},
        { value: 'cancelado', color: 'color-07', label: 'Cancelado' }
      ]},
    ];
  }

  getStatus() {
    return [
      { value: 'concluido', label: 'Concluído' },
      { value: 'iniciado', label: 'Iniciado' },
      { value: 'cancelado', label: 'Cancelado'}
    ];
  }

  getItems() {
    return [
      {statusPrioridade:'baixa', statusTarefa: 'concluido', descricao: 'Fazer curso de angular', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000001' },
      {statusPrioridade:'alta', statusTarefa: 'iniciado', descricao: 'Estudar o Framework Portinari', dataInicio: '01/01/2020', dataFim: '', tarefaId: '000002'},
      {statusPrioridade:'baixa', statusTarefa: 'cancelado', descricao: 'Entregar o projeto no git da Totvs', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000003'},
      {statusPrioridade:'alta', statusTarefa: 'concluido', descricao: 'Fazer curso de angular', dataInicio: ' ', dataFim: '01/01/2020', tarefaId: '000004'},
      {statusPrioridade:'baixa', statusTarefa: 'concluido', descricao: 'Fazer curso de angular', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000005'},
      {statusPrioridade:'alta', statusTarefa: 'iniciado', descricao: 'Fazer curso de html 5', dataInicio: '01/01/2020', dataFim: '', tarefaId: '000006'},
      {statusPrioridade:'media', statusTarefa: 'concluido', descricao: 'Fazer curso de javascript', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000007'},
      {statusPrioridade:'baixa', statusTarefa: 'iniciado', descricao: 'Fazer curso de typescript', dataInicio: '01/01/2020', dataFim: '', tarefaId: '000008'},
      {statusPrioridade:'alta', statusTarefa: 'concluido', descricao: 'Fazer curso de angular', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000009' },
      {statusPrioridade:'alta', statusTarefa: 'iniciado', descricao: 'Estudar o Framework Portinari', dataInicio: '01/01/2020', dataFim: '', tarefaId: '000010'},
      {statusPrioridade:'media', statusTarefa: 'cancelado', descricao: 'Entregar o projeto no git da Totvs', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000011'},
      {statusPrioridade:'baixa', statusTarefa: 'concluido', descricao: 'Fazer curso de angular', dataInicio: ' ', dataFim: '01/01/2020', tarefaId: '000012'},
      {statusPrioridade:'alta', statusTarefa: 'concluido', descricao: 'Fazer curso de angular', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000013'},
      {statusPrioridade:'media', statusTarefa: 'iniciado', descricao: 'Fazer curso de html 5', dataInicio: '01/01/2020', dataFim: '', tarefaId: '000014'},
      {statusPrioridade:'alta', statusTarefa: 'concluido', descricao: 'Fazer curso de javascript', dataInicio: '', dataFim: '01/01/2020', tarefaId: '000015'},
      {statusPrioridade:'baixa', statusTarefa: 'iniciado', descricao: 'Fazer curso de typescript', dataInicio: '01/01/2020', dataFim: '', tarefaId: '000016'}
    ];

  }
}