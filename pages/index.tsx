import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <div className="mt-24 lg:mt-36 mx-8 md:mx-16 xl:ml-28">
      <span className='w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] absolute top-0 sm:-top-[20px] lg:-top-[125px] left-0 sm:-left-[20px] lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

      <h1 className={`${styles.title} flex flex-col text-[35px] sm:text-[50px] md:text-[60px] lg:text-[75px] text-center lg:text-left font-bold leading-none`}>
        <span>
          Oi, eu sou
        </span>

        <span className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-black">
          Dário Matias
        </span>

        <span>
          web developer
        </span>
      </h1>

      <div className='flex justify-center lg:justify-start'>
        <button className={`${styles.button} w-64 sm:w-[300px] h-20 sm:h-[85px] mt-20 sm:mt-24 text-2xl sm:text-3xl`}>
          Download CV
        </button>
      </div>

      <div className='w-full lg:w-[calc(100%_-_200px)] h-1 bg-[#090909] mt-44 mb-28' />

      <h2 className='text-4xl md:text-[50px] font-extrabold'>
        Mensagem
      </h2>

      <div className='max-w-[1000px] text-xl md:text-[26px] text-justify font-bold mt-[60px] md:mt-[130px] lg:mr-52 mb-[130px] indent-10 leading-tight'>
        <p>
          Nesse portifólio encontrará todos os meus projetos mais relevantes, tecnologias que tenho conhecimento, e conhecer um pouco sobre mim. Os projetos criados estarão em um card cada, com as tecnologias usadas, uma breve descrição do que se tratam, além de dois links, sendo um para ver o projeto online, e o outro para analisar o código-fonte no GitHub caso tenha interesse.
        </p>
        <p>
          Então vamos lá conhecer o meu trabalho e quem eu sou?
        </p>
      </div>

      <span className='w-[400px] lg:w-[550px] h-[400px] lg:h-[550px] absolute top-[900px] md:top-[1000px] right-1/4 bg-[#0C009C] opacity-30 blur-[200px] -z-10' />
    </div>
  );
};

export default Home;
