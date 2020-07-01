import { Component } from '@angular/core';
import { PoTableColumn, PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocPoTableSort';
  lsColunas: Array<PoTableColumn> = [
    {
      label: "Status",
      property: "status",
      type: "label",
      labels: [
        {
          label: "Ativo",
          color: "color-11",
          value: "ativo"
        },
        {
          label: "Desativado",
          color: "color-07",
          value: "desativado"
        },
        {
          label: "Pendente",
          color: "color-04",
          value: "pendente"
        }
      ]
    },
    {
      label: "Nome",
      property: "nome"
    },
    {
      label: "Dias ativo",
      property: "diasAtivo",
      type: "number"
    }
  ]

  lsLinhas: Array<{ status: string, nome: string, diasAtivo: number }>= [
    {
      status: "ativo",
      nome: "Raynor",
      diasAtivo: 10
    },
    {
      status: "desativado",
      nome: "Sett",
      diasAtivo: 200
    },
    {
      status: "ativo",
      nome: "Snuffles",
      diasAtivo: 30
    },
    {
      status: "pendente",
      nome: "Lilith",
      diasAtivo: 193
    },
    {
      status: "pendente",
      nome: "Vigil",
      diasAtivo: 30
    },
    {
      status: "desativado",
      nome: "Ash",
      diasAtivo: 75
    },
    {
      status: "desativado",
      nome: "TARS",
      diasAtivo: 12000
    },
    {
      status: "ativo",
      nome: "Zofia",
      diasAtivo: 200
    },
    {
      status: "pendente",
      nome: "Kerrigan",
      diasAtivo: 790
    }
  ]

  pSort(colunaSelecionada: PoTableColumnSort){
    let tipoOrdem = colunaSelecionada.type

    // A idéia é que algo clicar na ordenação da coluna Status ela não mude.
    // Porem independente do que seja feito na ordenação, ele continua realizando
    // a ordenação padrão do Grid.
    if (colunaSelecionada.column.property == "status"){
      return this.lsLinhas.sort((x,y)=> { return 0; });
      //throw new Error("");
      //return false;
    } else if (colunaSelecionada.column.property == "nome"){
      this.lsLinhas.sort((x,y)=>{
        let numRetorno: number = 0;
        if (tipoOrdem == PoTableColumnSortType.Ascending){
          if (x.nome.length >= y.nome.length) {
            numRetorno = 1
          } else {
            numRetorno = -1
          }
        } else {
          if (x.nome.length <= y.nome.length) {
            numRetorno = 1
          } else {
            numRetorno = -1
          }
        }
        return numRetorno;
      })
    }
  }
}
