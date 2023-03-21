const currentSoftSkills = [
    'TypeScript',
    'React',
    'Next.js',
    'Firebase',
    'TailwindCSS',
    'SASS',
    'Node.js',
    'Prisma',
    'MySQL',
    'PostgreSQL',
    'SQLite',
    'Git',
    'GitHub',
    'Express.js',
    'Fastify',
];

const futureSoftSkills = [
    'C#',
    'C++',
    'Python',
    'Kotlin',
    'Lua',
    'Nest.js',
    'React Native',
    'Mongodb',
    'GraphQL',
    '.Net',
];

type InfoProps = {
    [key: string]: {
        info: string;
        created: string;
        createdBy: string;
    }
}

const infos: InfoProps = {
    TypeScript: {
        info: 'Se trata de uma ferramenta/ linguagem de programação que adiciona tipagem estática opcional ao JavaScript, tornando o desenvolvimento de projetos mais seguros, pela correção de erros de tipagem em tempo real.',
        created: 'Outubro de 2012',
        createdBy: 'Microsoft',
    },
    React: {
        info: 'É uma biblioteca JavaScript usado para criar interfaces de usuário (UI) em aplicativos web. Ele é fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.',
        created: '2013',
        createdBy: 'Facebook (atual Meta).',
    },
    'Next.js': {
        info: 'É um framework JavaScript Frontend baseado no React, que permite a renderização do lado do servidor e geração de sites estáticos para aplicativos web, além de gastar poucos recursos. Graças a essas características o tempo de carregamento da aplicação é menor, isso porque o esforço fica por conta do servidor.',
        created: '2016',
        createdBy: 'Vercel',
    },
    Firebase: {
        info: 'O Firebase é um ORM frontend do Google conectado a um banco de dados do tipo NoSQL, com o objetivo de guardar dados de forma simples e rápida, e pode ser usado gratuitamente.',
        created: '2011',
        createdBy: 'James Tamplin e Andrew Lee',
    },
    TailwindCSS: {
        info: 'Framework CSS que permite criar layouts de forma rápida e simples, usando uma estrutura CSS pronto em formato de várias classes utilitárias, opinativas e de propósito único, que podem ser usadas diretamente dentro da marcação de um texto para projetar um elemento.',
        created: 'Novembro de 2017',
        createdBy: 'Adam Wathan',
    },
    'Node.js': {
        info: 'Permite a execução de código JavaScript fora de um navegador web, o que revolucionou o mundo da programação. Com o Node.js é possível desenvolver aplicações sem a necessidade de um navegador, o que possibilita a criação de APIs e microsserviços, até mesmo aplicações mobile, embora haja frameworks próprios para isso como o React Native, muito embora o mesmo não existiria se não fosse o Node.',
        created: 'Maio de 2009',
        createdBy: 'Ryan Dahl',
    },
    Git: {
        info: 'É um sistema de controle de versão. Sua função é ajudar no controle do histórico de projetos, mas pode ser usado com a mesma finalidade para qualquer tipo de arquivo. O Git deixa o processo de desenvolvimento mais flexível e seguro, isso porque caso não se lembre quais alterações fez no projeto, pode retornar a última versão salva no Git. Se trata de uma das principais ferramentas de um desenvolvedor.',
        created: 'Abril de 2005',
        createdBy: 'Linus Torvalds',
    },
    GitHub: {
        info: 'Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git, a mesma permite o compartilhamento dos projetos guardados com outros desenvolvedores de forma simples. O GitHub facilita a colaboração no desenvolvimento de projetos com pessoas de outras regiões, ou até mesmo que estejam trabalhando de suas casas. É basicamente uma plataforma/"rede social" criada para programadores.',
        created: 'Abril de 2008',
        createdBy: 'Chris Wanstrath, J. Hyett, Tom Preston-Werner e Scott Chacon',
    }
};

const technologiesGradient = {
    TypeScript: '#3178C6, #D5E5F2',
    React: '#05F2DB, #7E84F2',
    'Next.js': '#8C8C8C, #F2F2F2',
    Firebase: '#F26A1B, #F2E205',
    TailwindCSS: '#1DCBF2, #F2F2F2',
    SASS: '#EE05F2, #F27E7E',
    'Node.js': '#0DF205, #71A668',
    Prisma: '#030A8C, #023059',
    MySQL: '#03738C, #F28B0C',
    PostgreSQL: '#0511F2, #326A8C',
    SQLite: '#0F7CBF, #030A8C',
    Git: '#F24535, #D95E52',
    GitHub: '#F2F2F2, #403F3F',
    'Express.js': '#F2F2F2, #A6A6A6',
    Fastify: '#A6A6A6, #595959',
    'C#': '#9879D9, #280068',
    'C++': '#6AA5D9, #030A8C',
    Python: '#F2C53D, #0511F2',
    Kotlin: '#0095D5, #D966B1',
    Lua: '#7A7EBF, #000081',
    'Nest.js': '#EE05F2, #F20505',
    'React Native': '#05F2DB, #7E84F2',
    Mongodb: '#A3D9B6, #1D9B52',
    GraphQL: '#EE05F2, #F20587',
    '.Net': '#5CD7F2, #079DD9',
};

export { currentSoftSkills, futureSoftSkills, infos, technologiesGradient };
