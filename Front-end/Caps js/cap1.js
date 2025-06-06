document.addEventListener('DOMContentLoaded', function() {
  // Elementos do DOM
  const settingsToggle = document.getElementById('settings-toggle');
  const settingsMenu = document.getElementById('settings-menu');
  const menuButton = document.querySelector('.menu-button');
  const dropdownMenu = document.querySelector('.settings-menu');
  const chapterText = document.getElementById('chapter-text');
  
  // Conteúdo do capítulo
  const chapterContent = `
    <p>Em um certo ambiente acadêmico uma aula estava sendo realizada, aparentemente algo relacionado às exatas.</p> <p>Um professor, baixinho e com bigode, escrevia números e caracteres de forma incessante na longa lousa branca, sem vontade alguma de parar. Em contrapartida, os alunos pareciam desanimados e cansados.</p> <p>Tec… Tec… Tec…</p> <p>A sala de aula estava em completo silêncio, apenas os sons do canetão eram ouvidos.</p> <p>Um aluno, farto da situação, de repente falou: “Professor Leon! É realmente necessário escrever tanto? Meus dedos já estão calejados devido às suas aulas. Seria muito mais fácil mandar toda essa matéria em PDF, nos economizaria muito tempo.”</p> <p>O professor de repente parou a caneta e se virou lentamente para olhar o rapaz.</p> <p>“A melhor maneira de aprender algo é primeiramente gravar isso profundamente em sua mente. Ao copiar manualmente a matéria, ela fica guardada mais facilmente na cabeça. Hoje, nas duas primeiras aulas, focaremos apenas em transcrever o conteúdo. Depois disso, irei explicar e responder quaisquer dúvidas que vocês tenham.” explicou de maneira didática.</p> <p>A sala, outrora silenciosa, foi preenchida com sons de protestos.</p> <p>“Mas, professor, é necessário variar um pouco. Sinto que meus dedos vão cair de tanto escrever. Você por acaso quer nos fazer desistir do curso?” Outro aluno, magro e alto, perguntou de repente.</p> <p>Suspiro!</p> <p>“Tudo bem, eu planejava atribuir esse trabalho para a próxima aula. Já que estão tão ansiosos, vamos começar a organizar hoje. Se dividam em onze grupos de até seis pessoas, com um mínimo de cinco por grupo. O trabalho consiste em elaborar um projeto de tema livre de acordo com o assunto da matéria. Mas lembrem-se, quero um relatório escrito com a descrição detalhada do projeto e com todos os cálculos seguindo o conteúdo das últimas aulas. Vocês terão um mês. O prazo é um pouco apertado, mas se as tarefas para cada membro forem atribuídas corretamente, vocês conseguirão fazer facilmente.”</p> <p>“Ai, sim, professor!!”</p> <p>Os alunos comemoraram, enquanto se levantavam para juntar suas cadeiras e se organizar.</p> <p>“Nunca pensei que ficaria feliz em ter que fazer um trabalho da faculdade… Acho que apenas as aulas irritantes do velho Leon conseguem causar isso na gente.” comentou, de forma aborrecida, uma bela garota loira, com curvas acentuadas e seios firmes.</p> <p>Ela usava uma camisa folgada, que mostrava levemente o sutiã pelas laterais e costas, e uma calça legging justa ao corpo. Pareciam ser roupas do tipo que se usa em uma academia.</p> <p>“Bem, veja o lado bom, pelo menos não precisamos ficar escrevendo por horas de novo, Carla.” Um rapaz mulato disse ao lado.</p> <p>“Diga por si mesmo. Esse trabalho vai ser um porre, só de pensar na quantidade de cálculos que vamos ter que fazer já me dá náuseas. Eu nem lembro do conteúdo das últimas aulas.” respondeu Carla.</p> <p>“Se você focasse mais nas aulas e menos no Hugo, ainda lembraria do conteúdo! Soube que se ‘empolgou’ muito nesse último sábado.” Uma garota do grupo falou de forma brincalhona.</p> <p>“É melhor você fechar essa boca, se não quiser que eu mesma a feche!” A loira respondeu com uma falsa irritação.</p> <p>“Hahahaaha.”</p> <p>O grupo riu e se divertiu, enquanto terminavam de arrumar suas coisas.</p> <p>De repente, um jovem, que parecia ter 18 ou 19 anos, se levantou de sua cadeira e caminhou lentamente em direção ao grupo.</p> <p>O rapaz tinha cerca de 1,76 de altura, sua aparência não era bonita e nem feia. A cor de sua pele era extremamente pálida, quase como se estivesse doente. Seus olhos eram castanhos escuros e seu cabelo preto e curto, um pouco bagunçado. Suas roupas pareciam muito modestas e maltratadas. Ele parecia ser o tipo que seria facilmente ignorado em meio a uma multidão, quase invisível.</p> <p>Thiago, o rapaz mulato, percebeu rapidamente o jovem e falou ao grupo:</p> <p>“Tsc… Olha quem tá vindo aí, aquele nerd estranho.”</p> <p>“Esse manezão. O que será que ele quer?” Carla questionou de forma fria.</p> <p>O grupo notou o rapaz caminhando em direção a eles e cessaram rapidamente a conversa, lançando olhares levemente hostis e de zombaria. Era um comportamento em relação aos excluídos.</p> <p>O rapaz parou em frente ao grupo e ficou em pé de forma estática. Parecia estar extremamente hesitante e desconfortável. Suas mãos estavam trêmulas e suavam frio.</p> <p>“Err… Eu… Eu…”</p> <p>Ele abriu a boca como se quisesse dizer algo, mas acabou não dizendo nada e apenas continuou a gaguejar.</p> <p>Nesse momento, Carla perdeu a paciência e falou:</p> <p>“Desembucha de uma vez, nerdão. O que caralhos você quer?”</p> <p>O rapaz ficou atônito ao ser repreendido de forma tão agressiva pela garota loira. Ele parecia assustado e envergonhado, mas tentou ao máximo se acalmar e organizar seus pensamentos.</p> <p>“Bem… E-eu reparei que vocês estão em cinco e o professor mencionou que os grupos poderiam ter até seis. Estou sem grupo, então pensei que… talvez pudesse me juntar a vocês.” O jovem pálido disse de forma pausada e meio gaguejando, parecia estar fazendo o seu melhor apenas para dizer isso.</p> <p>O que ele falou surpreendeu o grupo.</p> <p>“Você quer se juntar a nós? Essa é boa.” Thiago ironizou.</p> <p>Os outros também pareciam ter expressões zombeteiras e alguns até riram baixinho.</p> <p>O rapaz ficou parado em pé sem saber o que fazer.</p> <p>“Lembro que você é o cara que não fala muito, mas não sei o seu nome, como você se chama?” Carla perguntou com um meio sorriso. Quem não a conhecia certamente acharia esse sorriso extremamente encantador e ficaria fascinado, mas os amigos próximos sabiam que era um sorriso de puro escárnio.</p> <p>O jovem ficou hipnotizado devido à mudança de atitude dessa bela garota em relação a ele, mas rapidamente se recompôs, afinal, precisava muito entrar em um grupo caso quisesse concluir a tarefa dada.</p> <p>“Eu… eu me chamo… F-Fernando.”</p> <p>“Oh, então esse é o seu nome.” Carla falou, como se estivesse interessada.</p> <p>“Então, Fernando, como você pode ver, nosso grupo de cinco é muito unido. Seria estranho permitir alguém de fora, como você, entrar assim do nada, mas acho que posso abrir uma exceção.” A garota loira falou de forma sucinta e calma, o que surpreendeu o rapaz pálido e, até mesmo, seus próprios amigos.</p> <p>“Porém…” continuou. “Preciso que faça algo. Se quer se juntar a nós, terá que fazer algum esforço, afinal, nada é de graça nessa vida. Todos os cálculos serão entregues para você fazer e nós nos encarregaremos da parte escrita e da maquete. O que me diz?” Carla disse, sorrindo de orelha a orelha, porém o sarcasmo era claro em sua entonação.</p> <p>Era óbvio que ela planejava se aproveitar dele. Os cálculos são a parte mais difícil e correspondia a 80% do projeto. Os amigos rapidamente entenderam sua intenção, ela queria obrigá-lo a fazer todo o trabalho pesado para eles!</p> <p>A oferta da garota loira jogou um balde de água fria no rapaz.</p> <p>“Isso… Eu…” O jovem balbuciou sem saber o que dizer. Queria recusar, pois fazer tantos cálculos sozinho seria extremamente desafiador, mesmo para ele que era alguém extremamente inteligente e focado.</p> <p>“O quê? Você tem algum problema com isso?” Carla perguntou, ainda sorrindo.</p> <p>“Eu… acho um pouco… injusto.” Apesar da extrema timidez, o rapaz se esforçou para dizer isso. Se ele concordasse, a carga que teria seria imensa pelos próximos meses, mal teria tempo para estudar para as outras matérias.</p> <p>“Oh? Então você acha injusto.” O sorriso de Carla vagarosamente se desfez, suas sobrancelhas se juntaram em sinal de descontentamento e ela lançou um olhar arrogante em direção a Fernando.</p> <p>O jovem tímido sentiu seu coração ‘gelar’ com essa nova mudança de atitude da loira.</p> <p>“Se acha injusto, então é melhor você se foder com essa sua cara de nerd nojento para longe daqui!! Seu escroto. Alguém como eu te deu uma oportunidade e você recusa? Quem você pensa que é? Seu lixo de baixa classe!!” A garota insultou, como se fosse muito superior a ele e pudesse pisá-lo como um mero inseto. Ela finalmente mostrou quem era de verdade!</p> <p>Fernando ficou muito abalado, ele já estava acostumado a ser menosprezado pelos outros devido a sua personalidade tímida e jeito antissocial, mas nunca foi insultado dessa forma.</p> <p>Ele estava com medo e, ao mesmo tempo, bravo. Mas o que ele poderia fazer? Não tinha amigos ali e nem sequer coragem para retrucar.</p> <p>A cena chamou a atenção de grupos próximos, que começaram a comentar sobre.</p> <p>O professor Leon, que estava organizando suas pastas, percebeu a comoção. Logo identificou a origem da confusão e se aproximou.</p> <p>“Afinal, o que está acontecendo aqui!?”</p> <p>“Nada, professor. Apenas recusamos esse cara de entrar em nosso grupo, mas ele tentou nos ameaçar e disse que faria coisas vulgares comigo. Então acabei ficando um pouco nervosa… Estou preocupada de que ele faça algo comigo.” Carla afirmou de forma desamparada, como se fosse uma pobre vítima à beira das lágrimas, sua atuação foi realmente muito boa e convincente. Os alunos dos outros grupos que já tinham alguma aversão ao jovem esquisito imediatamente acreditaram nela.</p> <p>“Isso é verdade rapaz?” O professor questionou. Até mesmo ele acreditou nela, mas preferiu ser justo e primeiro ouvir as duas partes.</p> <p>“Não! Eu estava… apenas…” Fernando estava em choque, não estava acostumado a ser o foco da atenção de tantas pessoas.</p> <p>A sala era bem espaçosa e tinha em torno de sessenta alunos. Para piorar, ele era o foco central numa situação tão vexaminosa, sendo caluniado de tal forma.</p> <p>O jovem pálido não sabia o que dizer ou como reagir. Estava enfurecido com essa mulher dissimulada a sua frente, mas alguém acreditaria nele mesmo se dissesse a verdade? Que essa garota linda era, na verdade, tão escorregadia quanto suas curvas delineadas e queria obrigá-lo a fazer a maior parte do projeto sozinho para ela?</p> <p>As pessoas já estavam o olhando com um olhar de julgamento e nojo, claramente convencidas de sua culpa.</p> <p>“É verdade, professor Leon! Esse moleque folgado chegou exigindo fazer parte do nosso grupo. Normalmente não nos importaríamos em acolhê-lo, mas devido à sua atitude, recusamos. Então ele falou muitas barbáries para Carla e nos ameaçou!” Thiago acusou e o restante do grupo concordou, parecia divertido ferrar um nerd pobretão como esse.</p> <p>“Jovem, é melhor você se explicar. Nesta instituição não aceitamos esse tipo de comportamento!!” O professor Leon o advertiu.</p> <p>Nesse momento, Fernando se desesperou, pois não poderia ser expulso. Ele estudou tanto para ganhar uma bolsa nesta Universidade renomada porque não tinha condições financeiras para pagar seus estudos. Se ele fosse expulso, estaria acabado!</p> <p>“Não! Eu apenas queria um grupo… Realmente não fiz nada!” Nesse momento de desespero, criou coragem para falar e praticamente não gaguejou.</p> <p>Contudo, era tarde. As pessoas já estavam convencidas pelo ato de Carla e seus amigos, afinal, eram cinco e ele apenas um. Somando o fato do jovem pálido ser considerado esquisito na classe, fez com que seus colegas tivessem uma opinião formada e não a mudariam independente do que o mesmo dissesse nesse momento.</p> <p>“Isso é o que veremos, rapaz. Por hora, como professor, estou aplicando uma penalidade disciplinar e pode se considerar suspenso. Dentro de alguns dias você receberá uma carta informando uma data para prestar esclarecimentos do ocorrido à reitoria!” Leon demonstrou severidade em sua voz, claramente também estava convencido. Em sua opinião, o fato do rapaz ter hesitado em se explicar pareceu confirmar a acusação.</p> <p>Após pegar os dados de matrícula de Fernando, o professor Leon o convidou a se retirar da sala. Acompanhado de um segurança, o jovem foi conduzido até o lado de fora do campus.</p> <p>…</p> <p>Fernando estava em lágrimas, parado em frente a Universidade.</p> <p>Ainda chorando e desamparado, seguiu em direção até sua casa que ficava a trinta minutos a pé. Ele não tinha dinheiro para transporte, então sempre caminhava na ida e na volta.</p> <p>Ele veio de uma família pobre que não tinha condições de custear seus estudos. Por isso, estudou freneticamente, e com muito esforço, conseguiu ganhar uma das poucas bolsas de estudo nessa renomada Universidade particular.</p> <p>Essa era uma Universidade conhecida e conceituada em todo o país, onde as elites ricas se reuniam. Apesar de ter ganhado a Bolsa de Estudos, isso só significava que não teria que pagar a matrícula, as mensalidades e materiais didáticos, o restante dos custos seriam por sua própria conta.</p> <p>Fernando veio de uma pequena cidade chamada Lourenços, em outro estado, um ano antes de ganhar a Bolsa de Estudos e já havia feito um planejamento meticuloso. Juntou dinheiro suficiente para seus gastos iniciais e viajou para São Paulo, uma das cidades mais populosas do mundo, tudo na esperança de mudar sua vida.</p> <p>Após grandes dificuldades, conseguiu achar um pequeno apartamento a trinta minutos do campus a um preço muito baixo. Devido à má localização e o fato de ser bastante mofado, o valor foi bem acessível para ele.</p> <p>Depois disso, conseguiu um trabalho de faxineiro noturno em um restaurante.</p> <p>Com tudo isso, mal conseguia manter sua alimentação e outras necessidades básicas, bem como pagar o aluguel do pequeno apartamento cheio de mofo. Ele estava dando tudo de si, mas todo seu planejamento e esforço foram esmagados em um único dia.</p> <p>“Por que isso tinha que acontecer comigo? O que fiz de errado? Eu só queria estudar em paz…” Fernando estava sentado em sua cama, lágrimas desciam como uma cachoeira. Ele estava relembrando os acontecimentos do dia.</p> <p>De repente, ao se lembrar da loira voluptuosa e seus amigos que armaram para ele, uma fúria que nunca sentiu antes em sua vida fez seu sangue ferver.</p> <p>“Aqueles desgraçados! Eles me trataram como um idiota e destruíram minha vida apenas por diversão, como se eu não fosse nada… Um dia… Um dia certamente me vingarei!!” O jovem jurou para si mesmo.</p> <p>“Isso tudo aconteceu porque eu fui fraco… Fui um covarde… Se eu não fosse um bobão que deixa as pessoas se aproveitarem de mim, nada disso teria acontecido.” falou para si mesmo, apertando seus punhos fortemente enquanto as lágrimas escorriam.</p> <p>Mais do que aqueles ricos esnobes, Fernando odiou a si mesmo e suas fraquezas. Se ele fosse diferente, alguém mais decisivo e confiante, nada disso teria acontecido.</p> <p>“Um dia irei mudar meu destino com minhas próprias mãos. Estou farto de ser um ninguém que pode ser pisado a qualquer momento!!” Uma luz afiada e decisiva brilhou em seus olhos úmidos.</p> <p>Depois de algum tempo, após se acalmar, foi até a micro cozinha preparar algo para comer antes de ir descansar. Ele tinha que trabalhar de madrugada, afinal, apesar das coisas ruins que aconteceram nesse dia, ainda precisava pagar as contas.</p> <p>Era por volta das 18:00h quando terminou de comer e se banhar. Então deitou diretamente na cama, pronto para dormir. Ele precisava acordar às 00:00h para ir ao seu trabalho de faxineiro noturno em um restaurante 24h na região próxima.</p> <p>“Amanhã é um novo dia. Não vou deixar o que aconteceu hoje me abalar, ainda há esperança!” pensou consigo mesmo.</p> <p>Enquanto se perdia em seus pensamentos de automotivação, começou vagarosamente a adormecer. Pouco antes de dormir completamente, sentiu uma sensação estranha em torno de seu corpo, como se estivesse envolto em eletricidade.</p> <p>Essa sensação, estranha e desconhecida, veio de forma muito repentina e abraçou seu corpo completamente em poucos instantes. Fernando entrou em pânico com isso, o medo enchendo cada fibra de seu corpo.</p> <p>Ele tentou se levantar e abrir os olhos desesperadamente, mas apesar da luta frenética, tudo que conseguiu foi uma abertura semicerrada entre seus cílios. O que vislumbrou o assustou tremendamente.</p> <p>Havia uma série de luzes divinas de várias cores, incluindo cores que nunca havia visto antes. Elas estavam em torno de todo espaço ao seu redor. Era como se esses flashes coloridos fossem líquidos, envolvendo cada parte de seu corpo lentamente.</p> <p>“O que está acontecendo? O que é isso? Será que eu estou morrendo?” imaginou, profundamente assustado. Desgosto o preencheu por não ter sequer a chance de realizar seus autojuramentos.</p> <p>Antes que pudesse pensar mais a respeito dessa situação bizarra ou mesmo lamentar um pouco mais, sua visão subitamente escureceu e sua consciência lentamente se esvaiu.</p>

  `;
  
  chapterText.innerHTML = chapterContent;

  // Menu Dropdown
  if (menuButton && dropdownMenu) {
      menuButton.addEventListener('click', function(e) {
          e.stopPropagation();
          dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      });

      // Fechar menu ao clicar fora
      document.addEventListener('click', function() {
          dropdownMenu.style.display = 'none';
      });

      // Prevenir que o clique no menu feche ele
      dropdownMenu.addEventListener('click', function(e) {
          e.stopPropagation();
      });

      // Configurações do Menu
      const menuOptions = {
          // Font Family
          'arial': function() {
              document.body.style.fontFamily = 'Arial, sans-serif';
              updateActiveOption('font-family', this);
          },
          
          // Font Size
          'font-18': function() {
              document.body.style.fontSize = '18px';
              updateActiveOption('font-size', this);
          },
          
          // Line Height
          'line-180': function() {
              document.body.style.lineHeight = '1.8';
              updateActiveOption('line-height', this);
          },
          
          // Full Frame
          'full': function() {
              document.querySelector('.reading-container').style.maxWidth = '100%';
              updateActiveOption('frame-size', this);
          },
          'normal': function() {
              document.querySelector('.reading-container').style.maxWidth = '800px';
              updateActiveOption('frame-size', this);
          },
          'small': function() {
              document.querySelector('.reading-container').style.maxWidth = '600px';
              updateActiveOption('frame-size', this);
          },
          
          // Line Breaks
          'no-breaks': function() {
              document.querySelectorAll('.chapter-content p').forEach(p => {
                  p.style.marginBottom = '0';
              });
              updateActiveOption('line-breaks', this);
          },
          'with-breaks': function() {
              document.querySelectorAll('.chapter-content p').forEach(p => {
                  p.style.marginBottom = '1.5em';
              });
              updateActiveOption('line-breaks', this);
          }
      };
      
      // Ativar opções do menu
      document.querySelectorAll('.menu-option').forEach(option => {
          option.addEventListener('click', function() {
              const action = this.dataset.action;
              if (action && menuOptions[action]) {
                  // Remove active class from siblings
                  const parent = this.closest('.menu-section');
                  parent.querySelectorAll('.menu-option').forEach(opt => {
                      opt.classList.remove('active');
                  });
                  
                  // Add active class to clicked option
                  this.classList.add('active');
                  
                  // Execute the action
                  menuOptions[action]();
              }
          });
      });
  }

  // Configurações do Botão de Engrenagem (se existir)
  if (settingsToggle && settingsMenu) {
      settingsToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          settingsMenu.classList.toggle('show');
      });

      // Fechar menu ao clicar fora
      document.addEventListener('click', function() {
          settingsMenu.classList.remove('show');
      });

      // Prevenir que o clique no menu feche ele
      settingsMenu.addEventListener('click', function(e) {
          e.stopPropagation();
      });
  }
});