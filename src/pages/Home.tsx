
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";


const Home = ()=>{

    return (
        <div>
            <Main />
            <Row rowID='1' heading="UpComing" fetchUrl={requests.requestUpcoming} />
            <Row rowID='2' heading="Popular" fetchUrl={requests.requestPopular} />
            <Row rowID='3' heading="Trending" fetchUrl={requests.requestTrending} />
            <Row rowID='4' heading="TopRated" fetchUrl={requests.requestTopRated} />
            <Row rowID='5' heading="Action" fetchUrl={requests.requestAction} />
            <Row rowID='6' heading="Comedy" fetchUrl={requests.requestComedy} />
            <Row rowID='7' heading="Horror" fetchUrl={requests.requestHorror} />
            
        </div>
    )
}

export default Home;