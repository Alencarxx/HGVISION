import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ThemePDF } from '../../components/ThemePDF';
import { ChangeEvent, useEffect } from 'react';
import React, { useState, useRef  } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


 export const FormStep11 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 11
            });
        }
    }, []);  

        
   
    const handleNextStep = () => {
        
        var qd1 = [[ 'Data provável da viagem (Dia/Mês/Ano):'], [state.dataProvavel].concat([],[]),[].concat()];
        var qd2 = [[ 'Quanto tempo pretende ficar:'], [state.quantoTempo],[]];
        var qd3 = [[ 'Qual cidade pretende visitar:'], [state.qualCidadeVisitar],[]];
        var qd4 = [[ 'Nome do Hotel/Pessoa de Contato:'], [state.informeHotelPessoaUSA],[]];
        var qd5 = [[ 'Endereço completo com CEP / Telefone (EUA):'], [state.enderecoCEPTelefoneEUA],[]];
        var qd51 = [[''], [''],['']];
        var qd6 = [['Informações pessoais'],[ 'Sobrenome (Como esta no passaporte):'], [state.sobrenome]];
        var qd7 = [[''],['Nome (Como esta no passaporte):'], [state.name]];
        var qd8 = [[''],['RG e CPF:'], [state.cpf]];
        var qd9 = [[''],['E-MAIL'], [state.emailcontato]];
        var qd10 = [[''],['Data de Nascimento:'], [state.datanascimento]];
        var qd11 = [[''],['Local de Nascimento/ Nacionalidade:'], [state.nacionalidade]];
        var qd12 = [[''],['Telefone Residencial:'], [state.telefone]];
        var qd13 = [[''],['Telefone Comercial e Celular:'], [state.telefone]];
        var qd14 = [[''],['Endereço completo + CEP:'], [state.endereco]];
        var qd15 = [[''],['Caso já tenha tido outro nome, quando SOLTEIRO (a) ou DIVORCIADO (a) OUTROS informar:'], [state.outroNome]];
        var qd16 = [[''],['Informar se é Casado (a) – Solteiro (a) – Divorciado (a) – Viúvo (a) - Nome completo do esposo (a) data de nascimento e local de nascimento, mesmo que seja divorciado (a), se divorciado, informar data do casamento, data do divórcio e motivo da separação:'], [state.estadoCivil]];                
        var qd17 = [[''],['Caso tenha outra nacionalidade, informar:'], [state.outraNacionalidade]];                
        var qd18 = [[''],['Nome do PAI:'], [state.nomePai]];   
        var qd19 = [[''],['Data de Nascimento do PAI:'], [state.datanascimentoPai]];   
        var qd20 = [[''],['Ele mora nos EUA?'], [state.paiMoraEua]];   
        var qd21 = [[''],['Nome da Mãe:'], [state.nomeMae]];   
        var qd22 = [[''],['DATA NASCIMENTO DA MÃE:'], [state.datanascimentoMae]];   
        var qd23 = [[''],['Ela mora nos EUA?:'], [state.maeMoraEua]];   
        var qd231 = [[''], [''],['']];
        var qd24 = [['Dados do seu Passaporte'],['NUMERO DO PASSAPORTE:'], [state.numeroPassaporte]];   
        var qd25 = [[''],['CIDADE DE EMISSÃO:'], [state.cidadeEmissaoPassaporte]];  
        var qd26 = [[''],['DATA DE EMISSÃO:'], [state.dataEmissaoPassaporte]];  
        var qd27 = [[''],['DATA DE EXPIRAÇÃO:'], [state.dataExpiracaoPassaporte]];  
        var qd28 = [[''],['JÁ TEVE SEU PASSAPORTE ROUBADO/FURTADO?'], [state.passaporteRoubado]];  
        var qd281 = [[''], [''],['']];
        var qd29 = [['Dados do seu Visto EUA / Ultima Visita EUA'],['JÁ TEVE VISTO NEGADO OU REVOGADO?'], [state.vistoNegado]];   
        var qd30 = [[''],['DATA E PERIODO QUE FICOU NA ULTIMA VISITA AOS (EUA):'], [state.dataPeriodoVisita]];  
        var qd31 = [[''],['DATA EMISSÃO DO ULTIMO VISTO EUA:'], [state.dataEmissaoUltimoVisto]];  
        var qd32 = [[''],['VISTO VÁLIDO ATÉ:'], [state.dataExpiracaoVisto]];  
        var qd33 = [[''],['INFORMAR LICENÇA DO ULTIMO VISTO :'], [state.informaLicencaUltVisto]];  
        var qd34 = [[''],['ESTÁ SOLICITANDO MESMO TIPO DE VISTO? Especificação:'], [state.mesmoTipodeVisto]];  
        var qd341 = [[''], [''],['']];
        var qd35 = [['Acompanhantes de Viagem'],['Informar quais pessoas irão viajar com você (nome completo e parentesco):'], [state.pessoasqvaoviajar]];  
        var qd36 = [[''],['1º:'], ['']];  
        var qd37 = [[''],['2º:'],['']];  
        var qd38 = [[''],['3º:'], ['']];  
        var qd39 = [[''],['Quem está custeando sua viagem:'], [state.quemEstaCusteando]];  
        var qd40 = [[''],['Esta viajando com alguma agência de Turismo? Informar:'], [state.viajandoAgenciaTurismo]];  
        var qd401 = [[''], [''],['']];
        var qd41 = [['Dados Profissionais atuais'],['Nome da empresa onde trabalha:'], [state.nomeEmpresaTrabEst]]; 
        var qd42 = [[''],['Endereço completo da empresa:'], [state.endCompEmpEsc]];  
        var qd43 = [[''],['CEP:'], [state.CEPmpEsc]];  
        var qd44 = [[''],['Profissão:'], [state.profissao]];  
        var qd45 = [[''],['Cargo em exercício e Data de Admissão:'], [state.dataAdmissao]];  
        var qd46 = [[''],['Renda Bruta Mensal:'], [state.rendaBruta]];  
        var qd461 = [[''], [''],['']];
        var qd47 = [['Dados Profissionais dos útimos 5 anos'],['Nome da empresa onde trabalhou:'], [state.nomeEmpresaTrabalhou]];
        var qd48 = [[''],['Endereço:'], [state.EnderecoEmpresaTrabalhou]];  
        var qd49 = [[''],['Nome do supervisor da época:'], [state.SupervisorEmpresaTrabalhou]];  
        var qd50 = [[''],['Telefone:'], [state.TelefoneEmpresaTrabalhou]];  
        var qd52 = [[''],['Cargo e função da época:'], [state.CargoEmpresaTrabalhou]];  
        var qd53 = [[''],['Data de admissão e data de despensa:'], [state.AdmissaoEmpresaTrabalhou]];  
        var qd531 = [[''], [''],['']];
        var qd54 = [['Dados institucionais'],['Informar instituições de ensino que freqüentou:'], [state.nomeInstituicao]];  
        var qd55 = [[''],['Nome:'], [state.nomeInstituicao]];  
        var qd56 = [[''],['Endereço:'], [state.nomeInstituicao2]];
        var qd57 = [[''],['Curso:'], [state.nomeInstituicao3]];    
        var qd58 = [[''],['Curso:'], [state.nomeInstituicao3]];    
        var qd59 = [[''],['Data de inicio e de fim de curso:'], [state.nomeInstituicao4]];    
        var qd591 = [[''], [''],['']];
        var qd60 = [['Países que visito nos últimos 5 anos'],['Informar nome dos países:'], [state.nomePaisesVisitou]];   
        var qd61 = [[''],['Informar lista de idiomas fluentes que você fala:'], [state.idiomasFluentes]];
        var qd610 = [[''], [''],['']];
        var qd62 = [['Redes Sociais'],['Facebook:'], [state.facebook]];
        var qd63 = [[''],['Instagram:'], [state.instagram]];
        var qd64 = [[''],['Linkedin:'], [state.linkedin]];        
        
        var docDefinition = {
            header: { text:'Segue abaixo formulário rascunho para DS-160.',fontSize:7},
            footer: { text:'Dúvidas favor entrar em contato: 61-99101-2007 – WhatsApp - alex@hgvision.com.br',fontSize:7},
            content: [{ text: 'Programa de Viagem', fontSize: 15, alingment: 'justify', color: 'red' },
                      { text: 'Dynamic parts', 
                        table: {                            
                        headerRows: 1, 
                        widths: [ '25%', '29%', '*' ],                  
                        body: [qd1, qd2, qd3, qd4, qd5, qd51, qd6, qd7, qd8, qd9, qd10, qd11, qd12, qd13, qd14, qd15, qd16
                            ,qd17, qd18, qd19, qd20, qd21, qd22, qd23, qd231, qd24, qd25, qd26, qd27, qd28, qd281
                            , qd29, qd30, qd31, qd32, qd33, qd34, qd341
                            , qd35, qd36, qd37, qd38, qd39, qd40, qd401
                            , qd41, qd42, qd43, qd44, qd45, qd46, qd461 
                            ,qd47,  qd48 ,qd49  ,qd50  ,qd52 ,qd53  ,qd531
                            ,qd54 ,qd55,qd56,qd57 ,qd58 ,qd59 ,qd591,qd60 ,qd61 
                            ,qd610 ,qd62 ,qd63 ,qd64 ]  
                      } }                
                    ]   ,
            defaultStyle: {                            
                            fontSize: 8,
                            bold: true                            
                        }              
          };           

          pdfMake.createPdf(docDefinition).open({}, window.open('', '_blank')); 
          pdfMake.createPdf(docDefinition).download();         
      }

    return ( 
        <ThemePDF>
            <C.Container>
                
                <div >
                <p>Segue abaixo formulário rascunho para DS-160. Logo após o preenchimento de todas estas informações a nossa empresa, analisa e verifica se está dentro dos padrões estabelecidos antes de enviar diretamente para o consulado. Proporcionando assim uma maior credibilidade e segurança para os requerentes.Obs. Lembramos que todos os dados devem ser preenchidos, pois na falta deles não podemos dar continuidade no cadastramento. Todas as informações declaradas neste, são de inteira responsabilidade por parte do informante. </p>
                <p><b>Programa de Viagem</b></p>
                <p>Nestes campos abaixo contém informações importantes e obrigatórias no seu DS160, não deixe em branco mesmo que não tenha reservas ou datas precisas. É necessário colocar somente como uma referência. </p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Data provável da viagem (Dia/Mês/Ano):</label></td><td><label>{state.dataProvavel}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Quanto tempo pretende ficar: </label></td><td><label>{state.quantoTempo}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Qual cidade pretende visitar:  </label></td><td><label>{state.qualCidadeVisitar}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Nome do Hotel/Pessoa de Contato:</label></td><td><label>{state.informeHotelPessoaUSA}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Endereço completo com CEP / Telefone (EUA):   </label></td><td><label>{state.enderecoCEPTelefoneEUA}</label></td>                        
                    </tr>
                </table>

                <p><b>Informações pessoais</b></p>
                <hr/>

                <table>
                    <tr>
                        <td><label>Sobrenome (Como esta no passaporte):</label></td><td><label>{state.sobrenome}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Nome (Como esta no passaporte):</label></td><td><label>{state.name}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>RG e CPF:</label></td><td><label>{state.cpf}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>E-MAIL:</label></td><td><label>{state.emailcontato}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Data de Nascimento:</label></td><td><label>{state.datanascimento}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Local de Nascimento/ Nacionalidade:</label></td><td><label>{state.cidadeEstado}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Telefone Residencial:</label></td><td><label>{state.telefone}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Telefone Comercial e Celular:</label></td><td><label>{state.telefone}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Endereço completo + CEP:</label></td><td><label>{state.endereco}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Caso já tenha tido outro nome, quando SOLTEIRO (a) ou DIVORCIADO (a) OUTROS informar:</label></td><td><label>{state.outroNome}</label></td>                        
                    </tr>                    
                    <tr>
                        <td><label>Informar se é Casado (a) – Solteiro (a) – Divorciado (a) – Viúvo (a) - Nome completo do esposo (a) data de nascimento e local de nascimento, mesmo que seja divorciado (a), se divorciado, informar data do casamento, data do divórcio e motivo da separação:</label></td><td><label>{state.estadoCivil}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Caso tenha outra nacionalidade, informar:</label></td><td><label>{state.outraNacionalidade}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Nome do PAI:</label></td><td><label>{state.nomePai}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Data de Nascimento do PAI:</label></td><td><label>{state.datanascimentoPai}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Ele mora nos EUA?</label></td><td><label>{state.paiMoraEua}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Nome da Mãe:</label></td><td><label>{state.nomeMae}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>DATA NASCIMENTO DA MÃE:</label></td><td><label>{state.datanascimentoMae}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Ela mora nos EUA?:</label></td><td><label>{state.maeMoraEua}</label></td>                        
                    </tr>
                </table>

                <p><b>Dados do seu Passaporte</b></p>
                <hr/>

                <table>
                    <tr>
                        <td><label>NUMERO DO PASSAPORTE:</label></td><td><label>{state.numeroPassaporte}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>CIDADE DE EMISSÃO:</label></td><td><label>{state.cidadeEmissaoPassaporte}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>DATA DE EMISSÃO:</label></td><td><label>{state.dataEmissaoPassaporte}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>DATA DE EXPIRAÇÃO:</label></td><td><label>{state.dataExpiracaoPassaporte}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>JÁ TEVE SEU PASSAPORTE ROUBADO/FURTADO?</label></td><td><label>{state.passaporteRoubado}</label></td>                        
                    </tr>
                </table>

                <p><b>Dados do seu Visto EUA / Ultima Visita EUA</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>JÁ TEVE VISTO NEGADO OU REVOGADO?</label></td><td><label>{state.vistoNegado}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>DATA E PERIODO QUE FICOU NA ULTIMA VISITA AOS (EUA):</label></td><td><label>{state.dataPeriodoVisita}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>DATA EMISSÃO DO ULTIMO VISTO EUA:</label></td><td><label>{state.dataEmissaoUltimoVisto}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>VISTO VÁLIDO ATÉ:</label></td><td><label>{state.dataExpiracaoVisto}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>INFORMAR LICENÇA DO ULTIMO VISTO :</label></td><td><label>{state.informaLicencaUltVisto}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>ESTÁ SOLICITANDO MESMO TIPO DE VISTO?  Especificação:</label></td><td><label>{state.mesmoTipodeVisto}</label></td>                        
                    </tr>
                </table>

                <p><b>Acompanhantes de Viagem</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Informar quais pessoas irão viajar com você (nome completo e parentesco):</label></td><td><label>{state.pessoasqvaoviajar}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>1º:</label></td><td><label>{state.pessoasqvaoviajar}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>2º:</label></td><td><label>{state.pessoasqvaoviajar}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>3º:</label></td><td><label>{state.pessoasqvaoviajar}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Quem está custeando sua viagem:</label></td><td><label>{state.quemEstaCusteando}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Esta viajando com alguma agência de Turismo? Informar:</label></td><td><label>{state.viajandoAgenciaTurismo}</label></td>                        
                    </tr>
                </table>

                <p><b>Dados Profissionais atuais</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Nome da empresa onde trabalha:</label></td><td><label>{state.nomeEmpresaTrabEst}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Endereço completo da empresa:</label></td><td><label>{state.EnderecoEmpresaTrabalhou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>CEP:</label></td><td><label>{state.CEPmpEsc}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Profissão:</label></td><td><label>{state.profissao}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Cargo em exercício e Data de Admissão:</label></td><td><label>{state.cargoExercicio}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Renda Bruta Mensal:</label></td><td><label>{state.rendaBruta}</label></td>                        
                    </tr>
                </table>

                <p><b>Dados Profissionais dos útimos 5 anos</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Nome da empresa onde trabalhou:</label></td><td><label>{state.nomeEmpresaTrabalhou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Endereço:</label></td><td><label>{state.EnderecoEmpresaTrabalhou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Nome do supervisor da época:</label></td><td><label>{state.SupervisorEmpresaTrabalhou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Telefone:</label></td><td><label>{state.TelefoneEmpresaTrabalhou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Cargo e função da época:</label></td><td><label>{state.CargoEmpresaTrabalhou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Data de admissão e data de despensa:</label></td><td><label>{state.AdmissaoEmpresaTrabalhou}</label></td>                        
                    </tr>
                </table>
                <p><b>Dados institucionais</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Informar instituições de ensino que freqüentou:</label></td><td><label>{state.nomeInstituicao}</label></td>                        
                    </tr>   
                    <tr>
                        <td><label>Nome:</label></td><td><label>{state.nomeInstituicao}</label></td>                        
                    </tr>   
                    <tr>
                        <td><label>Endereço:</label></td><td><label>{state.nomeInstituicao2}</label></td>                        
                    </tr>   
                    <tr>
                        <td><label>Curso:</label></td><td><label>{state.nomeInstituicao3}</label></td>                        
                    </tr>   
                    <tr>
                        <td><label>Data de inicio e de fim de curso:</label></td><td><label>{state.nomeInstituicao4}</label></td>                        
                    </tr>        
                </table>
                <p><b>Países que visito nos últimos 5 anos</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Informar nome dos países:</label></td><td><label>{state.nomePaisesVisitou}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Informar lista de idiomas fluentes que você fala:</label></td><td><label>{state.idiomasFluentes}</label></td>                        
                    </tr>
                </table>
                <p><b>Países que visito nos últimos 5 anos</b></p>
                <hr/>
                <table>
                    <tr>
                        <td><label>Facebook:</label></td><td><label>{state.facebook}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Instagram:</label></td><td><label>{state.instagram}</label></td>                        
                    </tr>
                    <tr>
                        <td><label>Linkedin:</label></td><td><label>{state.linkedin}</label></td>                        
                    </tr>
                </table>
               
               <p>Dúvidas favor entrar em contato: 61-99101-2007 – WhatsApp  - alex@hgvision.com.br</p>               
           
               </div>
                <Link to="/step10" className="backButton">Voltar</Link>
                <button onClick={handleNextStep} >Gerar PDF</button>
                
                
            </C.Container>
        </ThemePDF>
    );
}


