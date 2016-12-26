import './dev.scss';
import ReactMasker from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-masker">
        <ReactMasker cssClass="test1" img="https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg">
          洗颜新潮流！人气洁面皂排行榜
        </ReactMasker>

        <ReactMasker cssClass="test1" img="https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg">
          美容用品 & 日用品（上）
        </ReactMasker>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
