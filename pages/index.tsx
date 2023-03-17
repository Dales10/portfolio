import styles from '../styles/home.module.scss';
import styleButton from '../styles/button.module.scss';

const Home = () => {
  return (
    <div className="mt-32 lg:mt-36 mx-8 md:mx-16 xl:ml-28">
      <span className='w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-40 bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

      <h1 className={`${styles.title} flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left font-bold leading-none`}>
        <span>
          Oi, eu sou
        </span>

        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black">
          Dário Matias
        </span>

        <span>
          web developer
        </span>
      </h1>

      <div className='flex justify-center lg:justify-start'>
        <button className={`${styleButton.button} w-64 sm:w-[300px] h-20 sm:h-20 mt-24 md:mt-20 lg:mt-24  text-2xl sm:text-3xl`}>
          Download CV
        </button>
      </div>

      <div className='w-full lg:w-[calc(100%_-_200px)] h-1 bg-[#090909] mt-44 mb-28' />

      <h2 className='text-4xl md:text-5xl font-extrabold'>
        Mensagem
      </h2>

      <div className='max-w-[1000px] text-xl md:text-2xl text-justify font-bold mt-14 md:mt-32 lg:mr-52 mb-32 indent-10 leading-tight'>
        <p>
          Nesse portifólio encontrará todos os meus projetos mais relevantes, tecnologias que tenho conhecimento, e conhecer um pouco sobre mim. Os projetos criados estarão em um card cada, com as tecnologias usadas, uma breve descrição do que se tratam, além de dois links, sendo um para ver o projeto online, e o outro para analisar o código-fonte no GitHub caso tenha interesse.
        </p>
        <p>
          Então vamos lá conhecer o meu trabalho e quem eu sou?
        </p>
      </div>

      <span className='w-100 lg:w-[550px] h-100 lg:h-[550px] absolute top-[900px] md:top-250 right-1/4 bg-[#0C009C] opacity-30 blur-[200px] -z-10' />
    </div>
  );
};

export default Home;
