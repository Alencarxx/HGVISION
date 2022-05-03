import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep8 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 8
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step9');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handlenomeEmpresaTrabalhouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeEmpresaTrabalhou,
            payload: e.target.value
        });
    }

    const handlenomeEmpresaTrabalhouChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeEmpresaTrabalhou2,
            payload: e.target.value
        });
    }

    const handlenomeEmpresaTrabalhouChange3 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeEmpresaTrabalhou3,
            payload: e.target.value
        });
    }

    const handleEnderecoEmpresaTrabalhouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEnderecoEmpresaTrabalhou,
            payload: e.target.value
        });
    }
    
    const handleSupervisorEmpresaTrabalhouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSupervisorEmpresaTrabalhou,
            payload: e.target.value
        });
    }

    const handleTelefoneEmpresaTrabalhouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelefoneEmpresaTrabalhou,
            payload: e.target.value
        });
    }

    const handleSCargoEmpresaTrabalhouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCargoEmpresaTrabalhou,
            payload: e.target.value
        });
    }

    const handleadmissaoEmpresaTrabalhouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setAdmissaoEmpresaTrabalhou,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 8/10</p>
                <h1>Dados Profissionais dos últimos 05 anos</h1>
                <p>Se aplica para todos os requerentes abaixo de 60 anos.</p>

                <hr/>

                <label>
                    Nome da empresa onde trabalhou: 
                    <input
                        type="text"
                        value={state.nomeEmpresaTrabalhou}
                        onChange={handlenomeEmpresaTrabalhouChange}
                    />
                </label>

                <label>
                    Endereço completo da empresa: 
                    <input
                        type="text"
                        value={state.EnderecoEmpresaTrabalhou}
                        onChange={handleEnderecoEmpresaTrabalhouChange}
                    />
                </label>

                <label>
                     Nome do supervisor(a) da época: 
                    <input
                        type="text"
                        value={state.SupervisorEmpresaTrabalhou}
                        onChange={handleSupervisorEmpresaTrabalhouChange}
                    />
                </label>

                <label>
                    Telefone da empresa: 
                    <input
                        type="text"
                        value={state.TelefoneEmpresaTrabalhou}
                        onChange={handleTelefoneEmpresaTrabalhouChange}
                    />
                </label>

                <label>
                Cargo e função da época: 
                    <input
                        type="text"
                        value={state.CargoEmpresaTrabalhou}
                        onChange={handleSCargoEmpresaTrabalhouChange}
                    />
                </label>

                <label>
                Data de admissão e data de despensa: 
                    <input
                        type="text"
                        value={state.AdmissaoEmpresaTrabalhou}
                        onChange={handleadmissaoEmpresaTrabalhouChange}
                    />
                </label>

                  

                <label>
                    Nome da empresa onde trabalhou / Endereço completo / Nome do supervisor(a) da época: / Telefone / Cargo e função da época / Data de admissão e data de despensa:
                    <input
                        type="text"
                        value={state.nomeEmpresaTrabalhou2}
                        onChange={handlenomeEmpresaTrabalhouChange2}
                    />
                </label>

                <label>
                    Nome da empresa onde trabalhou / Endereço completo / Nome do supervisor(a) da época: / Telefone / Cargo e função da época / Data de admissão e data de despensa:
                    <input
                        type="text"
                        value={state.nomeEmpresaTrabalhou3}
                        onChange={handlenomeEmpresaTrabalhouChange3}
                    />
                </label>

                

                <Link to="/step7" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}