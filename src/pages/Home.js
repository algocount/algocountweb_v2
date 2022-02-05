import { Container } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import Logop5 from '../components/p5/Logop5'

const Home = () => {

  //let vOffset = document.getElementsByClassName('navbar')[0].offsetHeight

  return (
  <>
    <Layout>
      <div className="p5-container">
        <Logop5 className='p5-animation'/>
        <Container className='hero'>
          <h1 className='title'>Algocount</h1>
          <h2 className='sub-head'>
            Public Perception of Algorithms&nbsp;in&nbsp;Society: <br></br>
            Accounting for the Algorithmic Public&nbsp;Opinion
          </h2>
        </Container>
      </div>
    </Layout>
    {
    //<Container>
    //<h1 className='bigP'>
    //  The Public Perception of Algorithms in Society: Accounting for the Algorithmic Public Opinion.
    //</h1>
    //<h1 className='bigP'>
    //    Algocount project seeks to expand our current
    //    understanding of, and raise awareness about, the role of
    //    algorithms in society, with a specific focus on the
    //    formation of public opinion in the Italian context.
    //</h1>
    //</Container>
    }
  </>
  )
};

export default Home;
