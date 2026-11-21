import type { Project } from '@/types';

export const projects: Project[] = [
    {
        name: 'StudyFlow AI',
        desc: 'Plataforma que automatiza a criação de flashcards e simulados usando IA Generativa e repetição espaçada.',
        tech: ['JavaScript', 'AI', 'Education'],
        url: 'https://github.com/Zsubzeroz/studyflow-ai',
        image: '/assets/images/studyflow_ai.webp',
        featured: true,
    },
    {
        name: 'Kitchen Manager',
        desc: 'API REST que gerencia todo o fluxo de pedidos e insumos, otimizando o tempo de entrega e controle de estoque.',
        tech: ['Python', 'Django', 'REST API'],
        url: 'https://github.com/Zsubzeroz/cozinha-restaurante',
        image: '/assets/images/projeto2.webp',
        featured: true,
    },
    {
        name: 'Xadrez Chess',
        desc: 'Engine de xadrez completa com interface interativa e detecção automática de jogadas especiais.',
        tech: ['JavaScript', 'Logic', 'Game Dev'],
        url: 'https://github.com/Zsubzeroz/Xadrez-Chess',
        image: '/assets/images/chess_strategy.webp',
        featured: true,
    },
    {
        name: 'Taxi Service Auth',
        desc: 'Módulo de autenticação robusto com JWT, garantindo criptografia de ponta a ponta e gestão de usuários escalável.',
        tech: ['Python', 'JWT', 'Security'],
        url: 'https://github.com/Zsubzeroz/py-taxi-service-authentication',
        image: '/assets/images/taxi_auth.webp',
        featured: true,
    },
    {
        name: 'Piano Maestro Virtual',
        desc: 'Aplicação interativa que organiza a rotina de estudos, superando barreiras técnicas através de feedback visual.',
        tech: ['JavaScript', 'Music Tech', 'Auth'],
        url: 'https://github.com/Zsubzeroz/Piano-Maestro-Virtual',
        image: '/assets/images/piano_maestro.webp',
        featured: true,
    },
    {
        name: 'Personal Portfolio',
        desc: 'Dashboard interativo com vitrine de projetos, arquivo dinâmico e design focado em conversão de marca pessoal.',
        tech: ['HTML/CSS', 'JavaScript', 'UI/UX'],
        url: 'https://github.com/Zsubzeroz/Portfolio',
        image: '/assets/images/projeto1.webp',
        featured: true,
    },
    {
        name: 'Mario-Jump',
        desc: 'Clássico jogo do Mario com mecânicas de pulo e obstáculos, desenvolvido com HTML/CSS e JS.',
        tech: ['JavaScript', 'Game'],
        url: 'https://github.com/Zsubzeroz/Mario-Jump',
    },
    {
        name: 'Snake-Game',
        desc: 'O clássico "jogo da cobrinha" com sistema de pontuação e níveis de velocidade progressivos.',
        tech: ['JavaScript', 'Game'],
        url: 'https://github.com/Zsubzeroz/Snake-Game',
    },
    {
        name: 'podologa-fabricia',
        desc: 'Site profissional para clínica de podologia, com agendamento e galeria de serviços.',
        tech: ['HTML', 'CSS', 'JS'],
        url: 'https://github.com/Zsubzeroz/podologa-fabricia',
    },
    {
        name: 'django-todo-list',
        desc: 'Gerenciador de tarefas completo com autenticação de usuários e persistência em banco de dados.',
        tech: ['Python', 'Django'],
        url: 'https://github.com/Zsubzeroz/django-todo-list',
    },
    {
        name: 'Piano-Maestro-Virtual',
        desc: 'Interface musical interativa para aprendizado de teoria e prática de piano.',
        tech: ['JavaScript', 'Audio'],
        url: 'https://github.com/Zsubzeroz/Piano-Maestro-Virtual',
    },
    {
        name: 'py-taxi-service-authentication',
        desc: 'Módulo de segurança robusto para serviços de transporte via app.',
        tech: ['Python', 'Auth'],
        url: 'https://github.com/Zsubzeroz/py-taxi-service-authentication',
    },
    {
        name: 'Anota-o',
        desc: 'App de notas rápidas com suporte a Markdown e organização por categorias.',
        tech: ['JavaScript', 'Productivity'],
        url: 'https://github.com/Zsubzeroz/Anota-o',
    },
    {
        name: 'app-generator',
        desc: 'Ferramenta para automatizar a criação de estruturas básicas de projetos Python.',
        tech: ['Python', 'CLI'],
        url: 'https://github.com/Zsubzeroz/app-generator',
    },
    {
        name: 'Calculadora-de-IMC',
        desc: 'Calculadora de Índice de Massa Corporal com dicas de saúde baseadas no resultado.',
        tech: ['JavaScript', 'Health'],
        url: 'https://github.com/Zsubzeroz/Calculadora-de-IMC',
    },
    {
        name: 'ControleDeEstoque-Simples',
        desc: 'Sistema básico para controle de entrada e saída de mercadorias em pequenos comércios.',
        tech: ['C#', 'System'],
        url: 'https://github.com/Zsubzeroz/ControleDeEstoque-SImples',
    },
    {
        name: 'memory-game',
        desc: 'Jogo da memória temático com diferentes níveis de dificuldade e cronômetro.',
        tech: ['JavaScript', 'Game'],
        url: 'https://github.com/Zsubzeroz/memory-game',
    },
    {
        name: 'Rel-gio',
        desc: 'Relógio digital moderno com cronômetro, timer e alarmes configuráveis.',
        tech: ['JavaScript', 'UI'],
        url: 'https://github.com/Zsubzeroz/Rel-gio',
    },
    {
        name: 'Sistema-de-login',
        desc: 'Template de sistema de login seguro com proteção contra brute-force e hashing de senhas.',
        tech: ['Python', 'Security'],
        url: 'https://github.com/Zsubzeroz/Sistema-de-login',
    },
    {
        name: 'Adivinhe-de-0-a-100',
        desc: 'Jogo de lógica onde o usuário deve adivinhar o número secreto com dicas.',
        tech: ['Python', 'Logic'],
        url: 'https://github.com/Zsubzeroz/Adivinhe-de-0-a-100',
    },
];

export const featuredProjects = projects.filter(p => p.featured);
export const archiveProjects = projects.filter(p => !p.featured);
