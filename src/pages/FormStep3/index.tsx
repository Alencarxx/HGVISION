import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step4');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    const handledataProvavelChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataProvavel,
            payload: e.target.value
        });
    }

    const handlequantoTempoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setQuantoTempo,
            payload: e.target.value
        });
    }

    const handlequalCidadeVisitarChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setQualCidadeVisitar,
            payload: e.target.value
        });
    }

    const handleinformeHotelPessoaUSAChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setInformeHotelPessoaUSA,
            payload: e.target.value
        });
    }

    const handleenderecoCEPTelefoneEUAChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEnderecoCEPTelefoneEUA,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/10</p>
                <h1>Programa de Viagem</h1>
                <p>Nestes campos abaixo cont??m informa????es importantes e obrigat??rias no seu DS160, n??o deixe em branco mesmo que n??o tenha reservas ou datas precisas. ?? necess??rio colocar somente como uma refer??ncia.</p>

                <hr/>

                <label>
                    Data prov??vel da viagem (Dia/M??s/Ano):
                    <input
                        type="text"
                        autoFocus
                        value={state.dataProvavel}                        
                        onChange={handledataProvavelChange}
                    />
                </label>
                <br />
                <label>
                    Quanto tempo pretende ficar nos USA:
                    <input
                        type="text"
                        autoFocus
                        value={state.quantoTempo}                        
                        onChange={handlequantoTempoChange}
                    />
                </label>
                <br />
                <label>
                    Qual cidade(s) pretende visitar:
                    <input
                        type="text"
                        autoFocus
                        value={state.qualCidadeVisitar}                        
                        onChange={handlequalCidadeVisitarChange}
                    />
                </label>
                <br />
                <p>
                    <b>Nome do Hotel ou Pessoa de Contato nos USA:</b><br/>
                    Em caso de indicar alguma pessoa, necess??rio informar sua rela????o com o seu contato.
                </p>
                <label>
                    Informe o nome do Hotel ou Pessoa de Contato nos USA:
                    <input
                        type="text"
                        autoFocus
                        value={state.informeHotelPessoaUSA}                        
                        onChange={handleinformeHotelPessoaUSAChange}
                    />
                </label>
                <br />
                <label>
                    Endere??o completo com CEP - (ZIPCODE) e Telefone (EUA):
                    <input
                        type="text"
                        autoFocus
                        value={state.enderecoCEPTelefoneEUA}                        
                        onChange={handleenderecoCEPTelefoneEUAChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Pr??ximo</button>
            </C.Container>
        </Theme>
    );
}