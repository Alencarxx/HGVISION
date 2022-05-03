import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const handleSobreNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSobrenome,
            payload: e.target.value
        });
    }

    const handledatanascimentoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataNascimento,
            payload: e.target.value
        });
    }

    const handlecidadeEstadoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCidadeEstado,
            payload: e.target.value
        });
    }

    const handleestadoCivilChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEstadoCivil,
            payload: e.target.value
        });
    }

    const handleoutroNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setOutroNome,
            payload: e.target.value
        });
    }

    const handlecpfChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCpf,
            payload: e.target.value
        });
    }

    const handleemailcontatoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmailContato,
            payload: e.target.value
        });
    }

    const handleenderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEndereco,
            payload: e.target.value
        });
    }

    const handlecidadaniaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCidadania,
            payload: e.target.value
        });
    }

    const handlefacebookChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setFacebook,
            payload: e.target.value
        });
    }

    const handleinstagramChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setInstagram,
            payload: e.target.value
        });
    }

    const handlelinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setLinkedin,
            payload: e.target.value
        });
    }

    const handlenacionalidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNacionalidade,
            payload: e.target.value
        });
    }

    const handleoutraNacionalidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setOutraNacionalidade,
            payload: e.target.value
        });
    }


    return (
        <Theme>
            <C.Container>
                <p>Passo 2/10</p>
                <h1>Informações Pessoais</h1>                

                <hr/>                

                <label>
                    Nome: (Como esta no passaporte):
                    <input
                        type="text"
                        autoFocus
                        value={state.name}                        
                        onChange={handleNameChange}
                    />
                </label>
                <br />
                <label>
                    Sobrenome (Como esta no passaporte):
                    <input
                        type="text"                       
                        value={state.sobrenome}
                        onChange={handleSobreNomeChange}                        
                    />
                </label>
                <br />
                <label>
                    Data de Nascimento:
                    <input
                        type="text"                        
                        value={state.datanascimento}   
                        onChange={handledatanascimentoChange}                     
                    />
                </label>
                <br />
                <label>
                    Informe a cidade e estados de onde nasceu:
                    <input
                        type="text"                        
                        value={state.cidadeEstado}
                        onChange={handlecidadeEstadoChange}                        
                    />
                </label>
                <br />
                <label>
                    Local de Nascimento/ Nacionalidade:
                    <input
                        type="text"                        
                        value={state.nacionalidade}
                        onChange={handlenacionalidadeChange}                        
                    />
                </label>
                <br />
                <label>
                     Caso tenha outra nacionalidade, informar:
                    <input
                        type="text"                        
                        value={state.outraNacionalidade}
                        onChange={handleoutraNacionalidadeChange}                        
                    />
                </label>
                <br />                
                <label>
                    Estado Civil (Informar se é Casado (a) – Solteiro (a) – Divorciado (a) – Viúvo (a) - Nome completo do esposo (a) data de nascimento e local de nascimento, mesmo que seja divorciado (a), se divorciado, informar data do casamento, data do divórcio e motivo da separação)
                    <input
                        type="text"                        
                        value={state.estadoCivil}
                        onChange={handleestadoCivilChange}                        
                    />
                </label>
                <br />
                <label>
                    Já teve algum outro nome? Caso já tenha tido outro nome, quando SOLTEIRO (a) ou DIVORCIADO (a) OUTROS informar:
                    <input
                        type="text"                        
                        value={state.outroNome}
                        onChange={handleoutroNomeChange}                        
                    />
                </label>
                <br />
                <label>
                    CPF - Informe o numero do seu CPF:
                    <input
                        type="text"                       
                        value={state.cpf}
                        onChange={handlecpfChange}                         
                    />
                </label>
                <br />
                <label>
                    E-MAIL DE CONTATO:
                    <input
                        type="text"                        
                        value={state.emailcontato}
                        onChange={handleemailcontatoChange}                        
                    />
                </label>
                <br />
                <label>
                    Endereço completo + CEP - Informe seu endereço residencial com o CEP:
                    <input
                        type="text"                       
                        value={state.endereco}
                        onChange={handleenderecoChange}                        
                    />
                </label>
                <br />
                <label>
                    Tem alguma outra cidadania? Se sim informe se também tem seu respectivo passaporte está válido.
                    <input
                        type="text"                        
                        value={state.cidadania}
                        onChange={handlecidadaniaChange}                        
                    />
                </label>
                <br />
                <p>
                Redes sociais Informe o link de suas principais redes sociais:
                Caso se aplique informe o link ou como é conhecido nas sua principais redes sociais como - Facebook / Instagram / Linkedin:                    
                </p>
                <br />
                <label>
                    FACEBOOK:   
                    <input
                        type="text"                        
                        value={state.facebook}   
                        onChange={handlefacebookChange}                     
                    />
                </label>
                <br />
                <label>
                    INSTAGRAM:  
                    <input
                        type="text"                        
                        value={state.instagram} 
                        onChange={handleinstagramChange}                       
                    />
                </label>
                <br />
                <label>
                    LINKEDIN:   
                    <input
                        type="text"                        
                        value={state.linkedin}   
                        onChange={handlelinkedinChange}                     
                    />
                </label>


                
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}