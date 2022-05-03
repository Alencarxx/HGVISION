// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {    
    telefone: string;
    cpf: string;
    currentStep: number;
    sobrenome: string;
    datanascimento: string;
    cidadeEstado: string;
    estadoCivil: string;
    outroNome: string;
    name: string;
    level: 0 | 1;
    email: string;
    endereco: string;
    github: string;
    cidadania: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    emailcontato: string;
    dataProvavel: string;
    quantoTempo: string;
    qualCidadeVisitar:string;
    informeHotelPessoaUSA:string;
    enderecoCEPTelefoneEUA:string;
    nomePai:string;
    nomeMae:string;
    parenteUSA:string;
    nomesRelacao:string;
    quemEstaCusteando:string;
    numeroPassaporte:string;
    cidadeEmissaoPassaporte:string;
    dataEmissaoPassaporte:string;
    dataExpiracaoPassaporte:string;
    passaporteRoubado:string;
    vistoNegado:string;
    dataPeriodoVisita:string;
    dataEmissaoUltimoVisto:string;
    dataExpiracaoVisto:string;
    informaLicencaUltVisto:string;
    nomeEmpresaTrabEst:string;
    endCompEmpEsc:string;
    telefoneEmpEst:string;
    rendaBruta:string;
    profissao:string;
    cargoExercicio:string;
    dataAdmissao:string;
    nomeEmpresaTrabalhou:string;
    nomeEmpresaTrabalhou2:string;
    nomeEmpresaTrabalhou3:string;
    nomeInstituicao:string;
    nomeInstituicao2:string;
    nomeInstituicao3:string;
    nomeInstituicao4:string;
    nomePaisesVisitou:string;
    idiomasFluentes:string;
    nacionalidade:string;
    outraNacionalidade:string;
    datanascimentoPai:string;
    datanascimentoMae:string;
    paiMoraEua:string;
    maeMoraEua:string;
    mesmoTipodeVisto:string;
    pessoasqvaoviajar:string;
    viajandoAgenciaTurismo:string;
    CEPmpEsc:string;
    EnderecoEmpresaTrabalhou:string;
    SupervisorEmpresaTrabalhou:string;
    TelefoneEmpresaTrabalhou:string;
    CargoEmpresaTrabalhou:string;
    AdmissaoEmpresaTrabalhou:string;
}
type Action = {
    type: FormActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    cpf: '',
    cidadania: '',
    endereco: '',
    sobrenome: '',
    datanascimento: '',
    cidadeEstado: '',
    estadoCivil: '',
    outroNome: '',
    name: '',
    level: 0,
    email: '',
    telefone: '',
    github: '',
    facebook:'',
    instagram: '',
    linkedin:'',
    emailcontato:'',
    dataProvavel: '',
    quantoTempo:'',
    qualCidadeVisitar:'',
    informeHotelPessoaUSA:'',
    enderecoCEPTelefoneEUA:'',
    nomePai:'',
    nomeMae:'',
    parenteUSA:'',
    nomesRelacao:'',
    quemEstaCusteando:'',
    numeroPassaporte:'',
    cidadeEmissaoPassaporte:'',
    dataEmissaoPassaporte:'',
    dataExpiracaoPassaporte:'',
    passaporteRoubado:'',
    vistoNegado:'',
    dataPeriodoVisita:'',
    dataEmissaoUltimoVisto:'',
    dataExpiracaoVisto:'',
    informaLicencaUltVisto:'',
    nomeEmpresaTrabEst:'',
    endCompEmpEsc:'',
    telefoneEmpEst:'',
    rendaBruta:'',
    profissao:'',
    cargoExercicio:'',
    dataAdmissao:'',
    nomeEmpresaTrabalhou:'',
    nomeEmpresaTrabalhou2:'',
    nomeEmpresaTrabalhou3:'',
    nomeInstituicao:'',
    nomeInstituicao2:'',
    nomeInstituicao3:'',
    nomeInstituicao4:'',
    nomePaisesVisitou:'',
    idiomasFluentes:'',
    nacionalidade:'',
    outraNacionalidade:'',
    datanascimentoPai:'',
    datanascimentoMae:'',
    paiMoraEua:'',
    maeMoraEua:'',
    mesmoTipodeVisto:'',
    pessoasqvaoviajar:'',
    viajandoAgenciaTurismo:'',
    CEPmpEsc:'',
    EnderecoEmpresaTrabalhou:'',
    SupervisorEmpresaTrabalhou:'',
    TelefoneEmpresaTrabalhou:'',
    CargoEmpresaTrabalhou:'',
    AdmissaoEmpresaTrabalhou:''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setNacionalidade,
    setOutraNacionalidade,
    setDatanascimentoPai,
    setPaiMoraEua,
    setDatanascimentoMae,
    setMaeMoraEua,
    setCpf,
    setCidadania,
    setEndereco,
    setDataNascimento,
    setCidadeEstado,
    setEstadoCivil,
    setSobrenome,
    setOutroNome,
    setFacebook,
    setInstagram,
    setLinkedin,
    setName,
    setLevel,
    setEmail,
    setTelefone,
    setGithub,
    setEmailContato,
    setDataProvavel,
    setQuantoTempo,
    setQualCidadeVisitar,
    setInformeHotelPessoaUSA,
    setEnderecoCEPTelefoneEUA,
    setNomePai,
    setNomeMae,
    setParenteUSA,
    setNomesRelacao,
    setQuemEstaCusteando,
    setNumeroPassaporte,
    setCidadeEmissaoPassaporte,
    setDataEmissaoPassaporte,
    setDataExpiracaoPassaporte,
    setPassaporteRoubado,
    setVistoNegado,
    setDataPeriodoVisita,
    setDataEmissaoUltimoVisto,
    setDataExpiracaoVisto,
    setInformaLicencaUltVisto,
    setNomeEmpresaTrabEst,
    setEndCompEmpEsc,
    setTelefoneEmpEst,
    setRendaBruta,
    setProfissao,
    setCargoExercicio,
    setDataAdmissao,
    setNomeEmpresaTrabalhou,
    setNomeEmpresaTrabalhou2,
    setNomeEmpresaTrabalhou3,
    setNomeInstituicao,
    setNomeInstituicao2,
    setNomeInstituicao3,
    setNomeInstituicao4,
    setNomePaisesVisitou,
    setIdiomasFluentes,
    setMesmoTipodeVisto,
    setPessoasqvaoviajar,
    setViajandoAgenciaTurismo,
    setCEPmpEsc,
    setEnderecoEmpresaTrabalhou,
    setSupervisorEmpresaTrabalhou,
    setTelefoneEmpresaTrabalhou,
    setCargoEmpresaTrabalhou,
    setAdmissaoEmpresaTrabalhou
}
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setEmailContato:
            return {...state, emailcontato: action.payload};
        case FormActions.setDataNascimento:
            return {...state, datanascimento: action.payload};
        case FormActions.setName:            
            return {...state, name: action.payload};
        case FormActions.setTelefone:            
            return {...state, telefone: action.payload};
        case FormActions.setCpf:            
            return {...state, cpf: action.payload};    
        case FormActions.setCidadania:            
            return {...state, cidadania: action.payload};
        case FormActions.setEndereco:            
            return {...state, endereco: action.payload};
        case FormActions.setSobrenome:            
            return {...state, sobrenome: action.payload};
        case FormActions.setCidadeEstado:            
            return {...state, cidadeEstado: action.payload};
        case FormActions.setEstadoCivil:            
            return {...state, estadoCivil: action.payload};
        case FormActions.setOutroNome:            
            return {...state, outroNome: action.payload};
        case FormActions.setFacebook:            
            return {...state, facebook: action.payload};
        case FormActions.setInstagram:            
            return {...state, instagram: action.payload};
        case FormActions.setLinkedin:            
            return {...state, linkedin: action.payload};
        case FormActions.setSobrenome:            
            return {...state, sobrenome: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        case FormActions.setEmailContato:
            return {...state, emailContato: action.payload}
        case FormActions.setDataProvavel:
            return{...state, dataProvavel: action.payload}
        case FormActions.setQuantoTempo:
            return{...state, quantoTempo: action.payload}
        case FormActions.setQualCidadeVisitar:
            return{...state, qualCidadeVisitar: action.payload}
        case FormActions.setInformeHotelPessoaUSA:
            return{...state, informeHotelPessoaUSA: action.payload}
        case FormActions.setEnderecoCEPTelefoneEUA:
            return{...state, enderecoCEPTelefoneEUA: action.payload}
        case FormActions.setNomePai:
            return{...state, nomePai: action.payload}
        case FormActions.setNomeMae:
            return{...state, nomeMae: action.payload}
        case FormActions.setParenteUSA:
            return{...state, parenteUSA: action.payload}
        case FormActions.setNomesRelacao:
            return{...state, nomesRelacao: action.payload}
        case FormActions.setQuemEstaCusteando:
            return{...state, quemEstaCusteando: action.payload}
        case FormActions.setNumeroPassaporte:
             return{...state, numeroPassaporte: action.payload}
        case FormActions.setCidadeEmissaoPassaporte:
            return{...state, cidadeEmissaoPassaporte: action.payload}  
        case FormActions.setDataEmissaoPassaporte:
            return{...state, dataEmissaoPassaporte: action.payload}
        case FormActions.setDataExpiracaoPassaporte:
            return{...state, dataExpiracaoPassaporte: action.payload}    
        case FormActions.setPassaporteRoubado:
            return{...state, passaporteRoubado: action.payload} 
        case FormActions.setVistoNegado:
            return{...state, vistoNegado: action.payload}    
        case FormActions.setDataPeriodoVisita:
            return{...state, dataPeriodoVisita: action.payload}     
        case FormActions.setDataEmissaoUltimoVisto:
            return{...state, dataEmissaoUltimoVisto: action.payload} 
        case FormActions.setDataExpiracaoVisto:
            return{...state, dataExpiracaoVisto: action.payload} 
        case FormActions.setInformaLicencaUltVisto:
            return{...state, informaLicencaUltVisto: action.payload}    
        case FormActions.setNomeEmpresaTrabEst:
            return{...state, nomeEmpresaTrabEst: action.payload}       
        case FormActions.setEndCompEmpEsc:
            return{...state, endCompEmpEsc: action.payload}       
        case FormActions.setTelefoneEmpEst:        
            return{...state, telefoneEmpEst: action.payload}       
        case FormActions.setRendaBruta:        
            return{...state, rendaBruta: action.payload}   
        case FormActions.setProfissao:
            return{...state, profissao: action.payload}   
        case FormActions.setCargoExercicio:
            return{...state, cargoExercicio: action.payload}   
        case FormActions.setDataAdmissao:
            return{...state, dataAdmissao: action.payload}   
        case FormActions.setNomeEmpresaTrabalhou:
            return{...state, nomeEmpresaTrabalhou: action.payload}   
        case FormActions.setNomeEmpresaTrabalhou2:
            return{...state, nomeEmpresaTrabalhou2: action.payload}  
        case FormActions.setNomeEmpresaTrabalhou3:
            return{...state, nomeEmpresaTrabalhou3: action.payload}   
        case FormActions.setNomeInstituicao:
            return{...state, nomeInstituicao: action.payload}  
        case FormActions.setNomeInstituicao2:
            return{...state, nomeInstituicao2: action.payload}  
        case FormActions.setNomeInstituicao3:
            return{...state, nomeInstituicao3: action.payload}  
        case FormActions.setNomeInstituicao4:
            return{...state, nomeInstituicao4: action.payload}
        case FormActions.setNomePaisesVisitou:
            return{...state, nomePaisesVisitou: action.payload}  
        case FormActions.setIdiomasFluentes:
            return{...state, idiomasFluentes: action.payload}
        case FormActions.setNacionalidade:
            return{...state, nacionalidade: action.payload}
        case FormActions.setOutraNacionalidade:
            return{...state, outraNacionalidade: action.payload}
        case FormActions.setDatanascimentoPai:
            return{...state, datanascimentoPai: action.payload}
        case FormActions.setDatanascimentoMae:
            return{...state, datanascimentoMae: action.payload}
        case FormActions.setPaiMoraEua:
            return{...state, paiMoraEua: action.payload}
        case FormActions.setMaeMoraEua:
            return{...state, maeMoraEua: action.payload}
        case FormActions.setMesmoTipodeVisto:        
            return{...state, mesmoTipodeVisto: action.payload}
        case FormActions.setPessoasqvaoviajar:        
            return{...state, pessoasqvaoviajar: action.payload}     
        case FormActions.setViajandoAgenciaTurismo:        
            return{...state, viajandoAgenciaTurismo: action.payload}        
        case FormActions.setCEPmpEsc:        
            return{...state, CEPmpEsc: action.payload}  
        case FormActions.setEnderecoEmpresaTrabalhou:        
            return{...state, EnderecoEmpresaTrabalhou: action.payload}  
        case FormActions.setSupervisorEmpresaTrabalhou:        
            return{...state, SupervisorEmpresaTrabalhou: action.payload}  
        case FormActions.setTelefoneEmpresaTrabalhou:                
            return{...state, TelefoneEmpresaTrabalhou: action.payload}
        case FormActions.setCargoEmpresaTrabalhou:        
            return{...state, CargoEmpresaTrabalhou: action.payload}
        case FormActions.setAdmissaoEmpresaTrabalhou:        
            return{...state, AdmissaoEmpresaTrabalhou: action.payload}            
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}