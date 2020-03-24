/**
 * application: msrac
 * 
 * https://www.toptal.com/designers/htmlarrows/symbols/
 */

define(['h-vue'], ({ H }) => {


  const version = '0.0.7';

  const render = H(function(h) {

    return h('div', 

      h('div', 
        h('h1', this.titulo),
        h('h3', this.subtitulo)
      ), 

      h('div', 'contato:'),

      h('table', {'attrs': {'align':'center'}},

        h('tr',
          h('td', {'attrs': {'align':'right'}}, 'email: '),
          h('td', {'attrs': {'align':'left'}}, 
            h('a', {'attrs': {'href':`mailto${this.email}`}}, this.email)
          )
        ),

        h('tr',
          h('td', {'attrs': {'align':'right'}}, 'telefone:'),
          h('td', {'attrs': {'align':'left'}}, 
            h('a', {'attrs': {'href':`tel:${this.fone}`}, 'style': {'content': '\260E'}}, 
              `(${this.fone.substr(0,2)}) ${this.fone.substr(2,4)}-${this.fone.substr(6,4)}`
            )
          )
        ),

        h('tr',
          h('td', {'attrs': {'align':'right'}}, 'endereço:'),
          h('td', {'attrs': {'align':'left'}}, this.endereco[0])
        ),

        h('tr',
          h('td'),
          h('td', {'attrs': {'align':'left'}}, this.endereco[1])
        ),

        h('tr',
          h('td'),
          h('td', {'attrs': {'align':'left'}},
            h('a', {'attrs': {'target':'_blank', 'href':this.mapa}}, 'mapa do google')
          )
        )

      )
    )

})

const data = () => ({
  'titulo': 'MSR Assessoria Contábil',
  'subtitulo': 'Serviços de contabilidade',
  'email': 'contato@msrac.com.br',
  'fone': '6232258393',
  'endereco': ['Rua da Maçonaria, Quadra 17, Lote 25, Casa 2', 'cep: 74.684-220 Vila Jardim São Judas Tadeu, Goiânia - Goiás'],
  'mapa': 'https://bit.ly/2rcOMvN'
})

return { version, data, render }

})