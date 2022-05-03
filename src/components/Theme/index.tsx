import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';
import { FaBeer } from 'react-icons/fa';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        
                        <SidebarItem
                            title="1"
                            description="Início"
                            icon="mail"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="2"
                            description="Informações Pessoais"
                            icon="profile"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="3"
                            description="Programa de Viagem"
                            icon="profile"
                            path="/step3"
                            active={state.currentStep === 3}
                        />

                        <SidebarItem
                            title="4"
                            description="Informações sobre seus familiares"
                            icon="profile"
                            path="/step4"
                            active={state.currentStep === 4}
                        />

                        <SidebarItem
                            title="5"
                            description="Informações sobre seu passaporte"
                            icon="profile"
                            path="/step5"
                            active={state.currentStep === 5}
                        />

                        <SidebarItem
                            title="6"
                            description="Informações sobre seu visto americano anterior e suas respectivas viagens aos USA"
                            icon="book"
                            path="/step6"
                            active={state.currentStep === 6}
                        />

                        <SidebarItem
                            title="7"
                            description="Dados profissionais ou Institucionais"
                            icon="book"
                            path="/step7"
                            active={state.currentStep === 7}
                        />

                        <SidebarItem
                            title="8"
                            description="Dados Profissionais dos últimos 05 anos"
                            icon="book"
                            path="/step8"
                            active={state.currentStep === 8}
                        />

                        <SidebarItem
                            title="9"
                            description="Dados institucionais. Aplica-se apenas à partir do ensino superior com curso concluído."
                            icon="book"
                            path="/step9"
                            active={state.currentStep === 9}
                        />

                        <SidebarItem
                            title="10"
                            description="Países que visito nos últimos 5 anos"
                            icon="book"
                            path="/step10"
                            active={state.currentStep === 10}
                        />
                        
                        
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}