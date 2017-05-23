import './dev.scss';

import ReactMasker from './main';

class App extends React.Component{
  state =  {
    visible:true
  };
  _click1 = (e) =>{
    this.setState({
      visible:!this.state.visible
    });
  };
  render(){
    return (
      <div className="hello-react-masker">
        <button onClick={this._click1}>Toggle masker</button>
        <ReactMasker onClick={this._click1} visible={this.state.visible} className="test1">
          Test content...
        </ReactMasker>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
