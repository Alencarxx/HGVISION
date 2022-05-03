import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' ) {           
            history.push('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelefone,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/10</p>
                <h1>DS-160 - Formulário para Visto</h1>                                
                <p>
                Segue em sequências o formulário rascunho para DS-160. Logo após o preenchimento de todas estas informações a nossa empresa, analisa e verifica se está dentro dos padrões estabelecidos antes de enviar diretamente para o consulado. Proporcionando assim uma maior credibilidade e segurança para os requerentes.
                Lembramos que todos os dados devem ser preenchidos, pois na falta deles não podemos dar continuidade no cadastramento. Todas as informações declaradas neste, são de inteira responsabilidade por parte do informante.
                </p>

                <hr/>                

                <label>
                    E-mail *
                    <input
                        type="text"
                        autoFocus
                        value={state.email}                        
                        onChange={handleEmailChange}
                    />
                </label>
                <br />
                <label>
                    Informe todos os telefones para contato:
                    <input
                        type="text"                        
                        value={state.telefone} 
                        onChange={handleTelefoneChange}                       
                    />
                </label>               

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}