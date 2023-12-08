const travels = [
    {
        id: 1,
        name: "Mato Grosso",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/04/o-que-fazer-mato-grosso-chapada-conexao123.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandeira_de_Mato_Grosso.svg/1200px-Bandeira_de_Mato_Grosso.svg.png",
        description: "Mato Grosso: é um estado da região Centro-Oeste do Brasil, com uma área de 903.366 km² e uma população de 3.526.220 habitantes (estimativa IBGE 2020). Sua capital é Cuiabá e sua sigla é MT1.",
        capital: "Cuiabá",
        population: "3.526.220",
        area: "903.366 km²",
        cities: "141",
        region: "Centro-Oeste",
        coordenadasCapital: {
            latitude: -15.601410,
            longitude: -56.097893
        },
    },
    {
        id: 2,
        name: "Minas Gerais",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/08/conheca-o-estado-de-minas-gerais-historia-turismo-e-mais-conexao123.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/1200px-Bandeira_de_Minas_Gerais.svg.png",
        description: "Minas Gerais: é um estado da região Sudeste do Brasil, com uma área de 586.528 km² e uma população de 21.292.666 habitantes (estimativa IBGE 2020). Sua capital é Belo Horizonte e sua sigla é MG1.",
        capital: "Belo Horizonte",
        population: "21.292.666",
        area: "586.528 km²",
        cities: "853",
        region: "Sudeste",
        coordenadasCapital: {
            latitude: -19.815700,
            longitude: -43.954200
        }
    },
    {
        id: 3,
        name: "Bahia",
        image: "https://aloalobahia.com/images/p/bahiacompeeeeete_alo_alo_bahia.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/1200px-Bandeira_da_Bahia.svg.png",
        description: "Bahia: é um estado da região Nordeste do Brasil, com uma área de 564.733 km² e uma população de 14.930.634 habitantes (estimativa IBGE 2020). Sua capital é Salvador e sua sigla é BA1.",
        capital: "Salvador",
        population: "14.930.634",
        area: "564.733 km²",
        cities: "417",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -12.970400,
            longitude: -38.512400
        }
    },
    {
        id: 4,
        name: "Goiás",
        image: "https://cdn.myside.com.br/base/bb4/690/43f/melhores-cidades-morar-goias.jpeg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bandeira_de_Goi%C3%A1s.svg/1200px-Bandeira_de_Goi%C3%A1s.svg.png",
        description: "Goiás: é um estado da região Centro-Oeste do Brasil, com uma área de 340.111 km² e uma população de 7.113.540 habitantes (estimativa IBGE 2020). Sua capital é Goiânia e sua sigla é GO1.",
        capital: "Goiânia",
        population: "7.113.540",
        area: "340.111 km²",
        cities: "246",
        region: "Centro-Oeste",
        coordenadasCapital: {
            latitude: -16.679900,
            longitude: -49.255000
        }
    },
    {
        id: 5,
        name: "Paraná",
        image: "https://www.viagensecaminhos.com/wp-content/uploads/2022/01/catedral-maringa-pr.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/1200px-Bandeira_do_Paran%C3%A1.svg.png",
        description: "Paraná: é um estado da região Sul do Brasil, com uma área de 199.307 km² e uma população de 11.516.840 habitantes (estimativa IBGE 2020). Sua capital é Curitiba e sua sigla é PR1.",
        capital: "Curitiba",
        population: "11.516.840",
        area: "199.307 km²",
        cities: "399",
        region: "Sul",
        coordenadasCapital: {
            latitude: -25.429700,
            longitude: -49.271900
        }
    },
    {
        id: 6,
        name: "Santa Catarina",
        image: "https://www.rvempreendimentos.com.br/wp-content/uploads/2022/03/morar-em-santa-catarina.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/1200px-Bandeira_de_Santa_Catarina.svg.png",
        description: "Santa Catarina: é um estado da região Sul do Brasil, com uma área de 95.736 km² e uma população de 7.252.502 habitantes (estimativa IBGE 2020). Sua capital é Florianópolis e sua sigla é SC1.",
        capital: "Florianópolis",
        population: "7.252.502",
        area: "95.736 km²",
        cities: "295",
        region: "Sul",
        coordenadasCapital: {
            latitude: -27.594500,
            longitude: -48.547700
        }
    },
    {
        id: 7,
        name: "Ceará",
        image: "https://www.sintafce.org.br/wp-content/uploads/2019/10/004.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/1200px-Bandeira_do_Cear%C3%A1.svg.png",
        description: "Ceará: é um estado da região Nordeste do Brasil, com uma área de 148.920 km² e uma população de 9.187.103 habitantes (estimativa IBGE 2020). Sua capital é Fortaleza e sua sigla é CE1.",
        capital: "Fortaleza",
        population: "9.187.103",
        area: "148.920 km²",
        cities: "184",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -3.731900,
            longitude: -38.526700
        }
    },
    {
        id: 8,
        name: "Rio Grande do Sul",
        image: "https://s1.static.brasilescola.uol.com.br/be/2021/04/porto-alegre.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/1200px-Bandeira_do_Rio_Grande_do_Sul.svg.png",
        description: "Rio Grande do Sul: é um estado da região Sul do Brasil, com uma área de 281.748 km² e uma população de 11.422.973 habitantes (estimativa IBGE 2020). Sua capital é Porto Alegre e sua sigla é RS1.",
        capital: "Porto Alegre",
        population: "11.422.973",
        area: "281.748 km²",
        cities: "497",
        region: "Sul",
        coordenadasCapital: {
            latitude: -30.031800,
            longitude: -51.206500
        }
    },
    {
        id: 9,
        name: "São Paulo",
        image: "https://blog.viajesantacruz.com.br/wp-content/uploads/2018/12/S%C3%A3o-Paulo-principal.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/1200px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png",
        description: "São Paulo: é um estado da região Sudeste do Brasil, com uma área de 248.222 km² e uma população de 46.289.333 habitantes (estimativa IBGE 2020). Sua capital é São Paulo e sua sigla é SP1.",
        capital: "São Paulo",
        population: "46.289.333",
        area: "248.222 km²",
        cities: "645",
        region: "Sudeste",
        coordenadasCapital: {
            latitude: -23.550500,
            longitude: -46.633300
        }
    },
    {
        id: 10,
        name: "Pernambuco",
        image: "https://static.todamateria.com.br/upload/es/ta/estado-de-pernambuco-og.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/1200px-Bandeira_de_Pernambuco.svg.png",
        description: "Pernambuco: é um estado da região Nordeste do Brasil, com uma área de 98.311 km² e uma população de 9.616.621 habitantes (estimativa IBGE 2020). Sua capital é Recife e sua sigla é PE1.",
        capital: "Recife",
        population: "9.616.621",
        area: "98.311 km²",
        cities: "185",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -8.046660,
            longitude: -34.877110
        }
    },
    {
        id: 11,
        name: "Amazonas",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/07/conheca-o-estado-do-amazonas-historia-turismo-e-cultura-rio-amazonas-conexao123.jpeg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/1200px-Bandeira_do_Amazonas.svg.png",
        description: "Amazonas: é um estado da região Norte do Brasil, com uma área de 1.570.745 km² e uma população de 4.207.714 habitantes (estimativa IBGE 2020). Sua capital é Manaus e sua sigla é AM1.",
        capital: "Manaus",
        population: "4.207.714",
        area: "1.570.745 km²",
        cities: "62",
        region: "Norte",
        coordenadasCapital: {
            latitude: -3.119027,
            longitude: -60.021731
        }
    },
    {
        id: 12,
        name: "Pará",
        image: "https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2020/08/turismo.jpg?fit=540%2C360&ssl=1",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/1200px-Bandeira_do_Par%C3%A1.svg.png",
        description: "Pará: é um estado da região Norte do Brasil, com uma área de 1.247.689 km² e uma população de 8.690.745 habitantes (estimativa IBGE 2020). Sua capital é Belém e sua sigla é PA1.",
        capital: "Belém",
        population: "8.690.745",
        area: "1.247.689 km²",
        cities: "144",
        region: "Norte",
        coordenadasCapital: {
            latitude: -1.455780,
            longitude: -48.490180
        }
    },
    {
        id: 13,
        name: "Rio de Janeiro",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1200px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png",
        description: "Rio de Janeiro: é um estado da região Sudeste do Brasil, com uma área de 43.696 km² e uma população de 17.366.189 habitantes (estimativa IBGE 2020). Sua capital é Rio de Janeiro e sua sigla é RJ1.",
        capital: "Rio de Janeiro",
        population: "17.366.189",
        area: "43.696 km²",
        cities: "92",
        region: "Sudeste",
        coordenadasCapital: {
            latitude: -22.908300,
            longitude: -43.196400
        }
    },
    {
        id: 14,
        name: "Espírito Santo",
        image: "https://imgs.dreamcasa.com.br/1000x500/dist/blog/imgs/2019/05/espirito-santo.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/1200px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png",
        description: "Espírito Santo: é um estado da região Sudeste do Brasil, com uma área de 46.077 km² e uma população de 4.064.052 habitantes (estimativa IBGE 2020). Sua capital é Vitória e sua sigla é ES1.",
        capital: "Vitória",
        population: "4.064.052",
        area: "46.077 km²",
        cities: "78",
        region: "Sudeste",
        coordenadasCapital: {
            latitude: -20.315500,
            longitude: -40.312800
        }
    },
    {
        id: 15,
        name: "Alagoas",
        image: "https://s5.static.brasilescola.uol.com.br/be/2021/05/1-maceio.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/1200px-Bandeira_de_Alagoas.svg.png",
        description: "Alagoas: é um estado da região Nordeste do Brasil, com uma área de 27.778 km² e uma população de 3.351.543 habitantes (estimativa IBGE 2020). Sua capital é Maceió e sua sigla é AL1.",
        capital: "Maceió",
        population: "3.351.543",
        area: "27.778 km²",
        cities: "102",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -9.665990,
            longitude: -35.735000
        }
    },
    {
        id: 16,
        name: "Rio Grande do Norte",
        image: "https://www.abihrn.com.br/wp-content/uploads/2018/08/ar-mais-puro.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/1200px-Bandeira_do_Rio_Grande_do_Norte.svg.png",
        description: "Rio Grande do Norte: é um estado da região Nordeste do Brasil, com uma área de 52.796 km² e uma população de 3.534.165 habitantes (estimativa IBGE 2020). Sua capital é Natal e sua sigla é RN1.",
        capital: "Natal",
        population: "3.534.165",
        area: "52.796 km²",
        cities: "167",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -5.779260,
            longitude: -35.200920
        }
    },
    {
        id: 17,
        name: "Paraíba",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/07/conheca-o-estado-da-paraiba-historia-turismo-conexao123.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/1200px-Bandeira_da_Para%C3%ADba.svg.png",
        description: "Paraíba: é um estado da região Nordeste do Brasil, com uma área de 56.439 km² e uma população de 4.039.277 habitantes (estimativa IBGE 2020). Sua capital é João Pessoa e sua sigla é PB1.",
        capital: "João Pessoa",
        population: "4.039.277",
        area: "56.439 km²",
        cities: "223",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -7.115090,
            longitude: -34.864090
        }
    },
    {
        id: 18,
        name: "Maranhão",
        image: "https://www.brasildefatorn.com.br/images/uploads/maranhao-frente-para-o-mar.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/1200px-Bandeira_do_Maranh%C3%A3o.svg.png",
        description: "Maranhão: é um estado da região Nordeste do Brasil, com uma área de 331.937 km² e uma população de 7.114.598 habitantes (estimativa IBGE 2020). Sua capital é São Luís e sua sigla é MA1.",
        capital: "São Luís",
        population: "7.114.598",
        area: "331.937 km²",
        cities: "217",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -2.538740,
            longitude: -44.282630
        }
    },
    {
        id: 19,
        name: "Acre",
        image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/01/rio-acre.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/1200px-Bandeira_do_Acre.svg.png",
        description: "Acre: é um estado da região Norte do Brasil, com uma área de 164.122 km² e uma população de 894.470 habitantes (estimativa IBGE 2020). Sua capital é Rio Branco e sua sigla é AC1.",
        capital: "Rio Branco",
        population: "894.470",
        area: "164.122 km²",
        cities: "22",
        region: "Norte",
        coordenadasCapital: {
            latitude: -9.974990,
            longitude: -67.824300
        }
    },
    {
        id: 20,
        name: "Tocantins",
        image: "https://classic.exame.com/wp-content/uploads/2020/05/gettyimages-1151612425.jpg?quality=70&strip=info&w=1024",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Bandeira_do_Tocantins.svg/1200px-Bandeira_do_Tocantins.svg.png",
        description: "Tocantins: é um estado da região Norte do Brasil, com uma área de 277.620 km² e uma população de 1.590.248 habitantes (estimativa IBGE 2020). Sua capital é Palmas e sua sigla é TO1.",
        capital: "Palmas",
        population: "1.590.248",
        area: "277.620 km²",
        cities: "139",
        region: "Norte",
        coordenadasCapital: {
            latitude: -10.249090,
            longitude: -48.324290
        }
    },
    {
        id: 21,
        name: "Mato Grosso do Sul",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/07/conheca-o-estado-do-mato-grosso-do-sul-turismo-e-mais-vista-aerea-de-bonito-conexao123.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bandeira_de_Mato_Grosso_do_Sul.svg/1200px-Bandeira_de_Mato_Grosso_do_Sul.svg.png",
        description: "Mato Grosso do Sul: é um estado da região Centro-Oeste do Brasil, com uma área de 357.145 km² e uma população de 2.809.394 habitantes (estimativa IBGE 2020). Sua capital é Campo Grande e sua sigla é MS1.",
        capital: "Campo Grande",
        population: "2.809.394",
        area: "357.145 km²",
        cities: "79",
        region: "Centro-Oeste",
        coordenadasCapital: {
            latitude: -20.448630,
            longitude: -54.629370
        }
    },
    {
        id: 22,
        name: "Roraima",
        image: "https://s2-g1.glbimg.com/KzbbWXx52ZzDJmWzo5cv3ocFflQ=/0x0:1280x720/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/0/1/DPsjLESm2qmYjWhJvwTw/boa-vista-do-alto.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_de_Roraima.svg/1200px-Bandeira_de_Roraima.svg.png",
        description: "Roraima: é um estado da região Norte do Brasil, com uma área de 224.299 km² e uma população de 631.181 habitantes (estimativa IBGE 2020). Sua capital é Boa Vista e sua sigla é RR1.",
        capital: "Boa Vista",
        population: "631.181",
        area: "224.299 km²",
        cities: "15",
        region: "Norte",
        coordenadasCapital: {
            latitude: 2.823460,
            longitude: -60.675830
        }
    },
    {
        id: 23,
        name: "Rondônia",
        image: "https://1.bp.blogspot.com/-IuN4F1sWazc/T74UF9yViPI/AAAAAAAAYBQ/8yxW1kRa4tU/s1600/rondonia-porto-velho.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_de_Rond%C3%B4nia.svg/1200px-Bandeira_de_Rond%C3%B4nia.svg.png",
        description: "Rondônia: é um estado da região Norte do Brasil, com uma área de 237.576 km² e uma população de 1.796.460 habitantes (estimativa IBGE 2020). Sua capital é Porto Velho e sua sigla é RO1.",
        capital: "Porto Velho",
        population: "1.796.460",
        area: "237.576 km²",
        cities: "52",
        region: "Norte",
        coordenadasCapital: {
            latitude: -8.761160,
            longitude: -63.900430
        }
    },
    {
        id: 24,
        name: "Sergipe",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/07/sergipe-conexao123.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandeira_de_Sergipe.svg/1200px-Bandeira_de_Sergipe.svg.png",
        description: "Sergipe: é um estado da região Nordeste do Brasil, com uma área de 21.910 km² e uma população de 2.318.822 habitantes (estimativa IBGE 2020). Sua capital é Aracaju e sua sigla é SE1.",
        capital: "Aracaju",
        population: "2.318.822",
        area: "21.910 km²",
        cities: "75",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -10.947200,
            longitude: -37.073900
        }
    },
    {
        id: 25,
        name: "Piauí",
        image: "https://blog.123milhas.com/wp-content/uploads/2022/08/piaui-teresina-turismo-conexao123.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/1200px-Bandeira_do_Piau%C3%AD.svg.png",
        description: "Piauí: é um estado da região Nordeste do Brasil, com uma área de 251.529 km² e uma população de 3.281.480 habitantes (estimativa IBGE 2020). Sua capital é Teresina e sua sigla é PI1.",
        capital: "Teresina",
        population: "3.281.480",
        area: "251.529 km²",
        cities: "224",
        region: "Nordeste",
        coordenadasCapital: {
            latitude: -5.091940,
            longitude: -42.803440
        }
    },
    {
        id: 26,
        name: "Amapá",
        image: "https://s2-g1.glbimg.com/8QLNVj_qFYFItqvmeWzVAHfCBQE=/0x0:4928x3264/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/09/17/vista_macapa.jpg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/1200px-Bandeira_do_Amap%C3%A1.svg.png",
        description: "Amapá: é um estado da região Norte do Brasil, com uma área de 142.814 km² e uma população de 861.773 habitantes (estimativa IBGE 2020). Sua capital é Macapá e sua sigla é AP1.",
        capital: "Macapá",
        population: "861.773",
        area: "142.814 km²",
        cities: "16",
        region: "Norte",
        coordenadasCapital: {
            latitude: 0.034460,
            longitude: -51.066630
        }
    },
]

export default travels;